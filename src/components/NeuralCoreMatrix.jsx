import React, { useState, useEffect } from 'react';
import { subscribeAudioState } from '../utils/audio';

export default function NeuralCoreMatrix() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicPulse, setMusicPulse] = useState(1);
  const [timeState, setTimeState] = useState(0);

  // Subscribe to Audio Playback State
  useEffect(() => {
    const unsubscribe = subscribeAudioState((playing) => {
      setIsMusicPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  // Continuous Dynamic Motion & Slower Lofi Beat Pulse Loop
  useEffect(() => {
    let animFrame;
    const animateNeuralCore = () => {
      const time = Date.now() / 1000;
      setTimeState(time);

      // Relaxed Lofi Beat Pulse (~60 BPM)
      if (isMusicPlaying) {
        const pulse = 1 + Math.sin(time * 3.6) * 0.05 + Math.cos(time * 1.8) * 0.025;
        setMusicPulse(pulse);
      } else {
        const subtlePulse = 1 + Math.sin(time * 1.5) * 0.015;
        setMusicPulse(subtlePulse);
      }

      animFrame = requestAnimationFrame(animateNeuralCore);
    };

    animFrame = requestAnimationFrame(animateNeuralCore);
    return () => cancelAnimationFrame(animFrame);
  }, [isMusicPlaying]);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / (window.innerHeight * 1.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Transform calculations combined with Slower Chill Beat Pulse
  const baseScale = 1 + scrollProgress * 1.15;
  const scale = baseScale * musicPulse;
  const translateY = scrollProgress * 160;
  const rotateZ = scrollProgress * 45;
  const opacity = 1 - Math.max((scrollProgress - 0.8) * 5, 0);

  // Dynamic Traveling Motion for Cyan & Red Neural Signals along Synaptic Axons
  const speedMult = isMusicPlaying ? 1.6 : 1.0;
  const t = timeState * speedMult;

  // Synaptic Particle 1 (Cyan Orbit Inner)
  const p1x = 400 + Math.cos(t * 1.2) * 260;
  const p1y = 400 + Math.sin(t * 1.2) * 260;

  // Synaptic Particle 2 (Red Orbit Inner Reverse)
  const p2x = 400 + Math.cos(-t * 1.4 + 1) * 260;
  const p2y = 400 + Math.sin(-t * 1.4 + 1) * 260;

  // Synaptic Particle 3 (Cyan Outer Flow)
  const p3x = 400 + Math.cos(t * 0.8 + 2) * 350;
  const p3y = 400 + Math.sin(t * 0.8 + 2) * 350;

  // Synaptic Particle 4 (Red Outer Flow)
  const p4x = 400 + Math.cos(-t * 0.9 + 4) * 350;
  const p4y = 400 + Math.sin(-t * 0.9 + 4) * 350;

  // Synaptic Particle 5 (Cyan Inward Radial Impulse)
  const radDist5 = 140 + (Math.sin(t * 2.5) + 1) * 110;
  const p5x = 400 + Math.cos(Math.PI / 4) * radDist5;
  const p5y = 400 + Math.sin(Math.PI / 4) * radDist5;

  // Synaptic Particle 6 (Red Outward Radial Impulse)
  const radDist6 = 140 + (Math.cos(t * 2.2) + 1) * 110;
  const p6x = 400 + Math.cos((3 * Math.PI) / 4) * radDist6;
  const p6y = 400 + Math.sin((3 * Math.PI) / 4) * radDist6;

  return (
    <div className="relative w-full max-w-5xl h-[380px] sm:h-[460px] my-2 z-10 flex items-center justify-center overflow-visible">
      
      {/* HUD RADIAL SCANNER BACKGROUND WITH SLOW RHYTHM */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: 1 - scrollProgress * 0.85 }}
      >
        <div 
          className={`w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-cyan-400/40 flex items-center justify-center ${isMusicPlaying ? 'animate-[spin_35s_linear_infinite]' : 'animate-[spin_60s_linear_infinite]'}`}
          style={{ transform: `scale(${musicPulse})` }}
        >
          <div className={`w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full border border-rose-500/30 ${isMusicPlaying ? 'animate-[spin_25s_linear_infinite_reverse]' : 'animate-[spin_40s_linear_infinite_reverse]'}`}></div>
        </div>
      </div>

      {/* DYNAMIC TRAVELING SYNAPTIC NEURAL CORE CONTAINER */}
      <div 
        className="relative transition-transform duration-75 ease-out flex items-center justify-center"
        style={{
          transform: `perspective(1000px) translateY(${translateY}px) scale(${scale}) rotate(${rotateZ}deg)`,
          opacity: opacity
        }}
      >
        {/* AMBIENT GLOW AURA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-44 h-44 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-400 via-blue-500 to-rose-500 rounded-full blur-2xl opacity-60 cyber-cyan-glow ${isMusicPlaying ? 'animate-pulse' : 'opacity-40'}`}></div>
        </div>

        {/* ORGANIC NEURAL NETWORK & TRAVELING SIGNAL DOTS VECTOR SVG */}
        <svg 
          viewBox="0 0 800 800" 
          className="w-[300px] sm:w-[420px] md:w-[500px] h-auto drop-shadow-[0_0_35px_rgba(0,163,255,0.4)] z-10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Core Radial & Linear Gradients */}
            <radialGradient id="neuralCoreGrad" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#00f0ff" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="90%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            <radialGradient id="synapseGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff0055" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#00a3ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <linearGradient id="ringCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#00a3ff" />
              <stop offset="100%" stopColor="#ff0055" />
            </linearGradient>

            <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* OUTERMOST DENDRITE TECH RING */}
          <circle cx="400" cy="400" r="370" stroke="url(#ringCyanGrad)" strokeWidth="2" strokeDasharray="16, 12" opacity="0.6" />
          <circle cx="400" cy="400" r="350" stroke="#00a3ff" strokeWidth="1" strokeDasharray="4, 8" opacity="0.4" />

          {/* INTERCONNECTED AXON PATHWAYS */}
          <g opacity="0.75">
            <path d="M 400,400 Q 250,200 150,150" stroke="#00f0ff" strokeWidth="2" strokeDasharray="10, 15" fill="none" />
            <path d="M 400,400 Q 550,200 650,150" stroke="#ff0055" strokeWidth="2" strokeDasharray="10, 15" fill="none" />
            <path d="M 400,400 Q 600,550 650,650" stroke="#00f0ff" strokeWidth="2" strokeDasharray="10, 15" fill="none" />
            <path d="M 400,400 Q 200,550 150,650" stroke="#ff0055" strokeWidth="2" strokeDasharray="10, 15" fill="none" />
            <path d="M 400,400 Q 400,100 400,50" stroke="#00a3ff" strokeWidth="2.5" strokeDasharray="8, 12" fill="none" />
            <path d="M 400,400 Q 400,700 400,750" stroke="#00a3ff" strokeWidth="2.5" strokeDasharray="8, 12" fill="none" />
          </g>

          {/* INNER SYNAPSE RINGS */}
          <circle cx="400" cy="400" r="290" stroke="#00a3ff" strokeWidth="2" strokeDasharray="30, 15" opacity="0.7" />
          <ellipse cx="400" cy="400" rx="290" ry="120" stroke="#00f0ff" strokeWidth="1.5" opacity="0.5" strokeDasharray="8, 6" />
          <ellipse cx="400" cy="400" rx="120" ry="290" stroke="#ff0055" strokeWidth="1.5" opacity="0.5" strokeDasharray="8, 6" />

          {/* STATIC BASE SYNAPSE NODES */}
          <g filter="url(#coreGlow)" opacity="0.7">
            <circle cx="150" cy="150" r="8" fill="#00f0ff" />
            <circle cx="650" cy="150" r="8" fill="#ff0055" />
            <circle cx="650" cy="650" r="8" fill="#00f0ff" />
            <circle cx="150" cy="650" r="8" fill="#ff0055" />
            <circle cx="400" cy="50" r="10" fill="#00f0ff" />
            <circle cx="400" cy="750" r="10" fill="#00a3ff" />
            <circle cx="50" cy="400" r="10" fill="#ff0055" />
            <circle cx="750" cy="400" r="10" fill="#00f0ff" />
          </g>

          {/* DYNAMICALLY MOVING & TRAVELING CYAN AND RED NEURAL SIGNAL DOTS */}
          <g filter="url(#coreGlow)">
            {/* Moving Cyan Signal Dot 1 */}
            <circle cx={p1x} cy={p1y} r="9" fill="#00f0ff" className="animate-pulse" />
            <circle cx={p1x} cy={p1y} r="4" fill="#ffffff" />

            {/* Moving Red Signal Dot 2 */}
            <circle cx={p2x} cy={p2y} r="9" fill="#ff0055" className="animate-pulse" />
            <circle cx={p2x} cy={p2y} r="4" fill="#ffffff" />

            {/* Moving Cyan Outer Signal Dot 3 */}
            <circle cx={p3x} cy={p3y} r="11" fill="#00f0ff" />
            <circle cx={p3x} cy={p3y} r="5" fill="#ffffff" />

            {/* Moving Red Outer Signal Dot 4 */}
            <circle cx={p4x} cy={p4y} r="11" fill="#ff0055" />
            <circle cx={p4x} cy={p4y} r="5" fill="#ffffff" />

            {/* Moving Inward Radial Cyan Signal Dot 5 */}
            <circle cx={p5x} cy={p5y} r="8" fill="#00f0ff" />

            {/* Moving Outward Radial Red Signal Dot 6 */}
            <circle cx={p6x} cy={p6y} r="8" fill="#ff0055" />
          </g>

          {/* INNER BIO-PLASMA NEURAL SOMATIC RING */}
          <circle cx="400" cy="400" r={190 * musicPulse} stroke="url(#ringCyanGrad)" strokeWidth="4" filter="url(#coreGlow)" />
          <circle cx="400" cy="400" r={160 * musicPulse} fill="url(#synapseGlowGrad)" />

          {/* CENTRAL BRAIN NUCLEUS SPHERE */}
          <circle cx="400" cy="400" r={125 * musicPulse} fill="url(#neuralCoreGrad)" filter="url(#coreGlow)" />

          {/* INNER NEURAL CENTER & SYNAPTIC FLASH */}
          <circle cx="400" cy="400" r={55 * musicPulse} fill="#ffffff" filter="url(#coreGlow)" />
          <circle cx="400" cy="400" r="30" fill="#00f0ff" />
          <circle cx="390" cy="390" r="12" fill="#ffffff" opacity="0.9" />

          {/* HOLOGRAPHIC OVERLAY TEXT: BINH PHAN & BACK-END DEVELOPER */}
          <text x="400" y="325" textAnchor="middle" fill="#00f0ff" fontSize="18" fontFamily="Orbitron" fontWeight="bold" letterSpacing="4">
            BINH PHAN
          </text>
          <text x="400" y="485" textAnchor="middle" fill="#ff0055" fontSize="14" fontFamily="Orbitron" fontWeight="bold" letterSpacing="3">
            BACK-END DEVELOPER
          </text>
        </svg>
      </div>

    </div>
  );
}
