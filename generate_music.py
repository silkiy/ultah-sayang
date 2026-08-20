import wave
import math
import struct
import random

SAMPLE_RATE = 44100

def generate_piano_note(freq, duration, velocity=0.8):
    total_samples = int(SAMPLE_RATE * duration)
    samples = []
    
    # Piano harmonics ratios & decay rates
    harmonics = [
        (1.0, 1.0, 1.0),     # Fundamental
        (2.0, 0.6, 1.4),     # 2nd harmonic
        (3.0, 0.35, 1.8),    # 3rd harmonic
        (4.0, 0.2, 2.2),     # 4th harmonic
        (5.0, 0.1, 2.8),     # 5th harmonic
        (6.0, 0.05, 3.2),    # 6th harmonic
    ]
    
    attack_samples = int(SAMPLE_RATE * 0.015)
    
    for i in range(total_samples):
        t = i / SAMPLE_RATE
        
        # Base envelope
        if i < attack_samples:
            env = (i / attack_samples) * velocity
        else:
            # Exponential decay
            env = velocity * math.exp(-t * 1.8)
            
        sample_val = 0.0
        for mult, amp, dec_rate in harmonics:
            harmonic_env = math.exp(-t * 1.5 * dec_rate)
            # Subtle chorus detune
            phase1 = 2 * math.pi * (freq * mult) * t
            phase2 = 2 * math.pi * (freq * mult + 0.35) * t
            sample_val += amp * harmonic_env * (0.6 * math.sin(phase1) + 0.4 * math.sin(phase2))
            
        final_val = sample_val * env
        samples.append(final_val)
        
    return samples

def mix_track(events, total_duration):
    total_samples = int(SAMPLE_RATE * total_duration)
    left_channel = [0.0] * total_samples
    right_channel = [0.0] * total_samples
    
    for start_time, freq, duration, vel, pan in events:
        note_samples = generate_piano_note(freq, duration, vel)
        start_idx = int(start_time * SAMPLE_RATE)
        
        l_weight = (1.0 - pan) / 2.0
        r_weight = (1.0 + pan) / 2.0
        
        for j, s in enumerate(note_samples):
            idx = start_idx + j
            if idx < total_samples:
                left_channel[idx] += s * l_weight
                right_channel[idx] += s * r_weight
                
    # Add gentle vinyl warmth / room reverb
    reverb_delay = int(SAMPLE_RATE * 0.12)
    reverb_decay = 0.25
    for i in range(reverb_delay, total_samples):
        left_channel[i] += left_channel[i - reverb_delay] * reverb_decay
        right_channel[i] += right_channel[i - reverb_delay] * reverb_decay
        
    # Normalize
    max_amp = 0.001
    for s in left_channel + right_channel:
        if abs(s) > max_amp:
            max_amp = abs(s)
            
    norm_factor = 0.85 / max_amp
    
    interleaved = bytearray()
    for i in range(total_samples):
        l = max(-1.0, min(1.0, left_channel[i] * norm_factor))
        r = max(-1.0, min(1.0, right_channel[i] * norm_factor))
        
        l_int = int(l * 32767)
        r_int = int(r * 32767)
        
        interleaved.extend(struct.pack('<hh', l_int, r_int))
        
    return interleaved

def save_wav(filename, audio_data):
    with wave.open(filename, 'wb') as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(SAMPLE_RATE)
        wav.writeframes(audio_data)

def generate_penjaga_hati():
    events = []
    # Key of C Major / A Minor: Romantic warm acoustic ballad
    # Cmaj7 -> Am7 -> Fmaj7 -> G7
    chords = [
        # Chord 1: Cmaj7 (C3, G3, B3, E4)
        [130.81, 196.00, 246.94, 329.63, 523.25],
        # Chord 2: Am7 (A2, E3, G3, C4, E4)
        [110.00, 164.81, 196.00, 261.63, 329.63],
        # Chord 3: Fmaj7 (F2, C3, E3, A3, C4)
        [87.31, 130.81, 164.81, 220.00, 261.63],
        # Chord 4: G7 (G2, D3, F3, B3, D4)
        [98.00, 146.83, 174.61, 246.94, 293.66],
    ]
    
    # Melody line
    melody = [
        # Bar 1 (Cmaj7)
        (0.0, 523.25, 0.8, 0.7), (0.6, 587.33, 0.8, 0.7), (1.2, 659.25, 1.4, 0.8), (2.4, 523.25, 1.2, 0.7),
        # Bar 2 (Am7)
        (3.6, 440.00, 0.8, 0.7), (4.2, 523.25, 0.8, 0.7), (4.8, 587.33, 1.4, 0.8), (6.0, 440.00, 1.2, 0.7),
        # Bar 3 (Fmaj7)
        (7.2, 349.23, 0.8, 0.7), (7.8, 440.00, 0.8, 0.7), (8.4, 523.25, 1.4, 0.8), (9.6, 493.88, 1.2, 0.7),
        # Bar 4 (G7)
        (10.8, 392.00, 0.8, 0.7), (11.4, 440.00, 0.8, 0.7), (12.0, 493.88, 1.6, 0.8), (13.4, 523.25, 2.0, 0.85)
    ]
    
    # Repeat for ~45 seconds loop
    t_offset = 0.0
    for loop in range(3):
        for c_idx, chord in enumerate(chords):
            c_start = t_offset + c_idx * 3.6
            # Arpeggiate chord notes
            for n_idx, freq in enumerate(chord):
                pan = ((n_idx / len(chord)) * 1.6) - 0.8
                events.append((c_start + n_idx * 0.18, freq, 3.2, 0.65, pan))
                events.append((c_start + 1.8 + n_idx * 0.15, freq, 2.0, 0.5, pan))
                
        for m_start, m_freq, m_dur, m_vel in melody:
            events.append((t_offset + m_start, m_freq, m_dur, m_vel, 0.1))
            
        t_offset += 14.4
        
    return mix_track(events, t_offset + 2.0)

def generate_promise_laufey():
    events = []
    # Dm9 -> G13 -> Cmaj7 -> A7b9
    chords = [
        [146.83, 220.00, 293.66, 349.23, 440.00],
        [98.00, 174.61, 246.94, 329.63, 392.00],
        [130.81, 196.00, 246.94, 329.63, 493.88],
        [110.00, 164.81, 233.08, 277.18, 370.00],
    ]
    
    t_offset = 0.0
    for loop in range(3):
        for c_idx, chord in enumerate(chords):
            c_start = t_offset + c_idx * 3.5
            for n_idx, freq in enumerate(chord):
                pan = ((n_idx / len(chord)) * 1.4) - 0.7
                events.append((c_start + n_idx * 0.15, freq, 3.0, 0.6, pan))
                events.append((c_start + 1.6 + n_idx * 0.12, freq, 1.8, 0.45, pan))
        t_offset += 14.0
        
    return mix_track(events, t_offset + 2.0)

def generate_birthday_serenade():
    events = []
    # C4 -> G4 -> C5 Happy birthday piano serenade
    bday_notes = [
        (0.0, 261.63, 0.4, 0.7), (0.4, 261.63, 0.4, 0.7), (0.8, 293.66, 0.8, 0.75), (1.6, 261.63, 0.8, 0.75),
        (2.4, 349.23, 0.8, 0.8), (3.2, 329.63, 1.6, 0.85),
        
        (4.8, 261.63, 0.4, 0.7), (5.2, 261.63, 0.4, 0.7), (5.6, 293.66, 0.8, 0.75), (6.4, 261.63, 0.8, 0.75),
        (7.2, 392.00, 0.8, 0.8), (8.0, 349.23, 1.6, 0.85),
        
        (9.6, 261.63, 0.4, 0.7), (10.0, 261.63, 0.4, 0.7), (10.4, 523.25, 0.8, 0.85), (11.2, 440.00, 0.8, 0.8),
        (12.0, 349.23, 0.8, 0.8), (12.8, 329.63, 0.8, 0.75), (13.6, 293.66, 1.6, 0.8),
        
        (15.2, 466.16, 0.4, 0.75), (15.6, 466.16, 0.4, 0.75), (16.0, 440.00, 0.8, 0.8), (16.8, 349.23, 0.8, 0.8),
        (17.6, 392.00, 0.8, 0.85), (18.4, 349.23, 2.4, 0.9),
    ]
    
    # Left hand accompaniment chords
    accomp = [
        (0.0, 130.81, 3.5), (0.0, 196.00, 3.5), (0.0, 246.94, 3.5),
        (4.8, 98.00, 3.5), (4.8, 146.83, 3.5), (4.8, 246.94, 3.5),
        (9.6, 130.81, 3.5), (9.6, 174.61, 3.5), (9.6, 220.00, 3.5),
        (15.2, 130.81, 4.0), (15.2, 196.00, 4.0), (15.2, 261.63, 4.0)
    ]
    
    for t, f, d in accomp:
        events.append((t, f, d, 0.55, -0.4))
        events.append((t + 1.6, f * 1.5, d * 0.6, 0.45, -0.2))
        
    for t, f, d, v in bday_notes:
        events.append((t, f, d, v, 0.3))
        
    return mix_track(events, 22.0)

print("Synthesizing audio files...")
save_wav("D:/Visual Studio code/ucapan/ultah-sayang/public/audio/penjaga-hati.wav", generate_penjaga_hati())
save_wav("D:/Visual Studio code/ucapan/ultah-sayang/public/audio/promise.wav", generate_promise_laufey())
save_wav("D:/Visual Studio code/ucapan/ultah-sayang/public/audio/birthday-piano.wav", generate_birthday_serenade())
print("Audio generation complete!")
