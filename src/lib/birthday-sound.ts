// Web Audio API Synthesizer for birthday acoustic piano, candle blow, chime, and ambient music

class BirthdaySoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlayingAmbient: boolean = false;
  private ambientInterval: any = null;

  private init() {
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

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isPlayingAmbient) {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Play a single harmonic piano-like tone
  public playTone(freq: number, duration: number = 1.0, delay: number = 0, type: OscillatorType = "sine") {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + delay;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    // Warm decay envelope
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Play "Happy Birthday to You" warm piano melody
  public playHappyBirthdayMelody() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Frequencies for C4 Happy Birthday:
    // C4, C4, D4, C4, F4, E4
    // C4, C4, D4, C4, G4, F4
    // C4, C4, C5, A4, F4, E4, D4
    // Bb4, Bb4, A4, F4, G4, F4
    const notes: { f: number; d: number; t: number }[] = [
      { f: 261.63, d: 0.3, t: 0.0 }, // Hap-
      { f: 261.63, d: 0.3, t: 0.35 }, // py
      { f: 293.66, d: 0.6, t: 0.7 }, // birth-
      { f: 261.63, d: 0.6, t: 1.35 }, // day
      { f: 349.23, d: 0.6, t: 2.0 }, // to
      { f: 329.63, d: 1.2, t: 2.7 }, // you

      { f: 261.63, d: 0.3, t: 4.1 }, // Hap-
      { f: 261.63, d: 0.3, t: 4.45 }, // py
      { f: 293.66, d: 0.6, t: 4.8 }, // birth-
      { f: 261.63, d: 0.6, t: 5.45 }, // day
      { f: 392.0, d: 0.6, t: 6.1 }, // to
      { f: 349.23, d: 1.2, t: 6.75 }, // you

      { f: 261.63, d: 0.3, t: 8.2 }, // Hap-
      { f: 261.63, d: 0.3, t: 8.55 }, // py
      { f: 523.25, d: 0.7, t: 8.9 }, // birth-
      { f: 440.0, d: 0.7, t: 9.65 }, // day
      { f: 349.23, d: 0.6, t: 10.4 }, // dear
      { f: 329.63, d: 0.6, t: 11.05 }, // sa-
      { f: 293.66, d: 1.2, t: 11.7 }, // yang

      { f: 466.16, d: 0.35, t: 13.1 }, // Hap-
      { f: 466.16, d: 0.35, t: 13.5 }, // py
      { f: 440.0, d: 0.7, t: 13.9 }, // birth-
      { f: 349.23, d: 0.7, t: 14.65 }, // day
      { f: 392.0, d: 0.7, t: 15.4 }, // to
      { f: 349.23, d: 1.8, t: 16.15 }, // you
    ];

    notes.forEach((n) => {
      this.playTone(n.f, n.d, n.t, "triangle");
      // Add a slight octave sub-harmonic for fullness
      this.playTone(n.f / 2, n.d * 0.9, n.t, "sine");
    });
  }

  // Sound effect of blowing out candles (gentle breath / wind noise)
  public playCandleBlowSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 1.5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Generate soft filtered pink noise for breath/wind
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.95 * b1 + white * 0.1;
        b2 = 0.85 * b2 + white * 0.25;
        data[i] = (b0 + b1 + b2) * 0.3;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 1.2);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      console.warn("Audio blow error:", e);
    }
  }

  // Celebratory chime / magic spark sound
  public playCelebrationChime() {
    if (this.isMuted) return;
    const arpeggio = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6
    arpeggio.forEach((freq, idx) => {
      this.playTone(freq, 1.2, idx * 0.09, "sine");
    });
  }

  // Start continuous ambient piano loop
  public startAmbient() {
    if (this.isPlayingAmbient || this.isMuted) return;
    this.init();
    this.isPlayingAmbient = true;

    const chords = [
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 261.63, 329.63, 392.0],  // Am7
      [174.61, 220.0, 261.63, 329.63], // Fmaj7
      [196.0, 246.94, 293.66, 349.23], // G7
    ];

    let chordIndex = 0;
    const playNextChord = () => {
      if (!this.isPlayingAmbient || this.isMuted) return;
      const chord = chords[chordIndex];
      chord.forEach((note, nIdx) => {
        this.playTone(note, 3.5, nIdx * 0.15, "triangle");
      });
      chordIndex = (chordIndex + 1) % chords.length;
    };

    playNextChord();
    this.ambientInterval = setInterval(playNextChord, 4500);
  }

  public stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  public isAmbientActive(): boolean {
    return this.isPlayingAmbient;
  }
}

export const soundEngine = new BirthdaySoundEngine();
