// Advanced Audio & Sound Engine for Scandinavian Editorial Birthday Experience

export interface SongTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  durationText: string;
}

export const PLAYLIST: SongTrack[] = [
  {
    id: "penjaga-hati",
    title: "Penjaga Hati (Acoustic)",
    artist: "Nadhif Basalamah",
    src: "/audio/penjaga-hati.mp3",
    durationText: "03:45",
  },
  {
    id: "promise",
    title: "Promise (Vintage Jazz)",
    artist: "Laufey",
    src: "/audio/promise.mp3",
    durationText: "03:54",
  },
  {
    id: "birthday-piano",
    title: "Happy Birthday (Acoustic Serenade)",
    artist: "Piano Studio",
    src: "/audio/birthday-piano.mp3",
    durationText: "02:30",
  },
];

class BirthdaySoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;
  private currentTrackIndex: number = 0;
  private audioElement: HTMLAudioElement | null = null;
  private ambientInterval: any = null;
  private listeners: ((playing: boolean, track: SongTrack) => void)[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.audioElement = new Audio();
      this.audioElement.loop = true;
      this.audioElement.volume = 0.75;

      this.audioElement.addEventListener("ended", () => {
        this.nextTrack();
      });

      this.audioElement.addEventListener("error", () => {
        console.info("Falling back to built-in acoustic synthesizer");
        // Seamless fallback to synthesizer
        if (this.isPlaying) {
          this.startSynthesizedAmbient();
        }
      });
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public subscribe(fn: (playing: boolean, track: SongTrack) => void) {
    this.listeners.push(fn);
    fn(this.isPlaying, PLAYLIST[this.currentTrackIndex]);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) =>
      fn(this.isPlaying, PLAYLIST[this.currentTrackIndex])
    );
  }

  public getCurrentTrack(): SongTrack {
    return PLAYLIST[this.currentTrackIndex];
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    if (this.isMuted && this.isPlaying) {
      this.stop();
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playTrack(index: number) {
    this.currentTrackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[this.currentTrackIndex];

    this.initContext();
    this.playNeedleDrop();

    if (this.audioElement && track.src) {
      this.audioElement.src = track.src;
      this.audioElement
        .play()
        .then(() => {
          this.isPlaying = true;
          this.stopSynthesizedAmbient();
          this.notify();
        })
        .catch(() => {
          // If browser blocks or file not found, use synthesized ambient acoustic
          this.isPlaying = true;
          this.startSynthesizedAmbient();
          this.notify();
        });
    } else {
      this.isPlaying = true;
      this.startSynthesizedAmbient();
      this.notify();
    }
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.playTrack(this.currentTrackIndex);
    }
  }

  public nextTrack() {
    this.playTrack(this.currentTrackIndex + 1);
  }

  public prevTrack() {
    this.playTrack(this.currentTrackIndex - 1);
  }

  public stop() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopSynthesizedAmbient();
    this.notify();
  }

  // Turntable needle drop sound effect
  public playNeedleDrop() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      // ignore
    }
  }

  // Synthesizer Tone
  public playTone(freq: number, duration: number = 1.0, delay: number = 0, type: OscillatorType = "sine") {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Start synthesized warm ambient chords ("Penjaga Hati" Acoustic Progression)
  private startSynthesizedAmbient() {
    this.stopSynthesizedAmbient();
    const chords = [
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 261.63, 329.63, 392.0],  // Am7
      [174.61, 220.0, 261.63, 329.63], // Fmaj7
      [196.0, 246.94, 293.66, 349.23], // G7
    ];

    let chordIndex = 0;
    const playNextChord = () => {
      if (!this.isPlaying || this.isMuted) return;
      const chord = chords[chordIndex];
      chord.forEach((note, nIdx) => {
        this.playTone(note, 3.8, nIdx * 0.14, "triangle");
      });
      chordIndex = (chordIndex + 1) % chords.length;
    };

    playNextChord();
    this.ambientInterval = setInterval(playNextChord, 4200);
  }

  private stopSynthesizedAmbient() {
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  // Sound effect of blowing out candle
  public playCandleBlowSound() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 1.2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.95 * b1 + white * 0.1;
        b2 = 0.85 * b2 + white * 0.25;
        data[i] = (b0 + b1 + b2) * 0.25;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(380, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 1.1);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      // ignore
    }
  }

  // Celebratory chime
  public playCelebrationChime() {
    if (this.isMuted) return;
    const arpeggio = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    arpeggio.forEach((freq, idx) => {
      this.playTone(freq, 1.2, idx * 0.08, "sine");
    });
  }

  // "Happy Birthday to You" arpeggio melody
  public playHappyBirthdayMelody() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [
      { f: 261.63, d: 0.3, t: 0.0 },
      { f: 261.63, d: 0.3, t: 0.35 },
      { f: 293.66, d: 0.6, t: 0.7 },
      { f: 261.63, d: 0.6, t: 1.35 },
      { f: 349.23, d: 0.6, t: 2.0 },
      { f: 329.63, d: 1.2, t: 2.7 },

      { f: 261.63, d: 0.3, t: 4.1 },
      { f: 261.63, d: 0.3, t: 4.45 },
      { f: 293.66, d: 0.6, t: 4.8 },
      { f: 261.63, d: 0.6, t: 5.45 },
      { f: 392.0, d: 0.6, t: 6.1 },
      { f: 349.23, d: 1.2, t: 6.75 },

      { f: 261.63, d: 0.3, t: 8.2 },
      { f: 261.63, d: 0.3, t: 8.55 },
      { f: 523.25, d: 0.7, t: 8.9 },
      { f: 440.0, d: 0.7, t: 9.65 },
      { f: 349.23, d: 0.6, t: 10.4 },
      { f: 329.63, d: 0.6, t: 11.05 },
      { f: 293.66, d: 1.2, t: 11.7 },
    ];

    notes.forEach((n) => {
      this.playTone(n.f, n.d, n.t, "triangle");
      this.playTone(n.f / 2, n.d * 0.9, n.t, "sine");
    });
  }
}

export const soundEngine = new BirthdaySoundEngine();
