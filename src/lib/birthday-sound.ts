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
    title: "Penjaga Hati",
    artist: "Nadhif Basalamah",
    src: "/audio/penjaga-hati.mp3",
    durationText: "03:45",
  },
  {
    id: "promise",
    title: "Promise",
    artist: "Laufey",
    src: "/audio/promise.mp3",
    durationText: "03:54",
  },
  {
    id: "birthday-piano",
    title: "Happy Birthday to You",
    artist: "Acoustic Serenade",
    src: "/audio/birthday-piano.wav",
    durationText: "02:30",
  },
];

class BirthdaySoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;
  private currentTrackIndex: number = 0;
  private audioElement: HTMLAudioElement | null = null;
  private listeners: ((playing: boolean, track: SongTrack) => void)[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (!this.audioElement && typeof window !== "undefined") {
      this.audioElement = new Audio();
      this.audioElement.loop = true;
      this.audioElement.volume = 0.9;

      this.audioElement.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener("ended", () => {
        this.nextTrack();
      });

      // If MP3 fails (e.g. not found yet), fallback seamlessly to .wav version
      this.audioElement.addEventListener("error", () => {
        const track = PLAYLIST[this.currentTrackIndex];
        if (track && track.src.endsWith(".mp3")) {
          const fallbackSrc = track.src.replace(".mp3", ".wav");
          console.info(`Switching from ${track.src} to ${fallbackSrc}`);
          if (this.audioElement && this.audioElement.src !== fallbackSrc) {
            this.audioElement.src = fallbackSrc;
            this.audioElement.play().catch(() => {});
          }
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
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playTrack(index: number) {
    this.currentTrackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[this.currentTrackIndex];

    this.initAudioElement();
    this.initContext();
    this.playNeedleDrop();

    if (this.audioElement) {
      this.audioElement.src = track.src;
      this.audioElement.currentTime = 0;
      this.audioElement.muted = this.isMuted;

      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            this.notify();
          })
          .catch(() => {
            // Try fallback .wav
            if (this.audioElement && track.src.endsWith(".mp3")) {
              this.audioElement.src = track.src.replace(".mp3", ".wav");
              this.audioElement.play().catch(() => {});
            }
          });
      }
    }
  }

  public togglePlay() {
    this.initAudioElement();
    if (!this.audioElement) return;

    if (this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
      this.notify();
    } else {
      if (!this.audioElement.src || this.audioElement.src === "" || this.audioElement.src.endsWith("/")) {
        this.playTrack(this.currentTrackIndex);
      } else {
        this.initContext();
        this.playNeedleDrop();
        this.audioElement
          .play()
          .then(() => {
            this.isPlaying = true;
            this.notify();
          })
          .catch(() => {
            this.playTrack(this.currentTrackIndex);
          });
      }
    }
  }

  public nextTrack() {
    this.playTrack(this.currentTrackIndex + 1);
  }

  public prevTrack() {
    this.playTrack(this.currentTrackIndex - 1);
  }

  public stop() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  public playTone(freq: number, duration: number = 0.5, delay: number = 0, type: OscillatorType = "sine") {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // ignore
    }
  }

  public playNeedleDrop() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      // ignore
    }
  }

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

  public playCelebrationChime() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const arpeggio = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    arpeggio.forEach((freq, idx) => {
      if (!this.ctx) return;
      const now = this.ctx.currentTime + idx * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.0);
    });
  }

  public playHappyBirthdayMelody() {
    this.playTrack(2);
  }
}

export const soundEngine = new BirthdaySoundEngine();
