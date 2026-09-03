// Web Audio API synthesizer for tactile UI sound effects and ambient chill sound
class SoundEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tactile mechanical key thock sound
  public playClick(pitch: number = 600, duration: number = 0.04) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio fallback silent
    }
  }

  // Soft high harmonic chime for success / toggle / modal
  public playChime(success: boolean = true) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const freqs = success ? [523.25, 659.25, 783.99, 1046.5] : [440, 330];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);

        const startTime = this.ctx.currentTime + idx * 0.05;
        gain.gain.setValueAtTime(0.06, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch {
      // Audio fallback
    }
  }

  // Ambient gentle chord generator for Vinyl / Music player
  private ambientOscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  public isAmbientPlaying: boolean = false;

  public toggleAmbientMusic(trackIndex: number = 0, onStateChange?: (playing: boolean) => void) {
    if (this.isAmbientPlaying) {
      this.stopAmbientMusic();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startAmbientMusic(trackIndex);
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  public startAmbientMusic(trackIndex: number = 0) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      this.stopAmbientMusic();

      const chords = [
        [220, 277.18, 329.63, 440], // A major 7
        [174.61, 220, 261.63, 329.63], // F major 7
        [196.00, 246.94, 293.66, 392.00] // G major
      ];

      const selectedChord = chords[trackIndex % chords.length];

      this.ambientOscillators = selectedChord.map((freq) => {
        if (!this.ctx) throw new Error('No context');
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Low volume ambient drone
        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 1.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        return { osc, gain };
      });

      this.isAmbientPlaying = true;
    } catch {
      // Audio error
    }
  }

  public stopAmbientMusic() {
    if (this.ambientOscillators.length > 0 && this.ctx) {
      this.ambientOscillators.forEach(({ osc, gain }) => {
        try {
          gain.gain.linearRampToValueAtTime(0.001, (this.ctx?.currentTime || 0) + 0.5);
          setTimeout(() => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // Ignore
            }
          }, 500);
        } catch {
          // Ignore
        }
      });
      this.ambientOscillators = [];
    }
    this.isAmbientPlaying = false;
  }
}

export const sound = new SoundEngine();
