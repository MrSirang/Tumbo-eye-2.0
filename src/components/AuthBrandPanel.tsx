import React from 'react';
import { Link } from 'react-router-dom';
import logoMark from '../assets/tumbo-logo-mark.png';

/** Shared left branding panel for auth pages — animated network visual (UI only). */
export const AuthBrandPanel: React.FC = () => (
  <aside className="signup-left" aria-label="Tumbo Eye branding">
    <div className="signup-left-glow signup-left-glow-a" aria-hidden="true" />
    <div className="signup-left-glow signup-left-glow-b" aria-hidden="true" />

    <div className="signup-particles" aria-hidden="true">
      <span className="signup-particle p1" />
      <span className="signup-particle p2" />
      <span className="signup-particle p3" />
      <span className="signup-particle p4" />
      <span className="signup-particle p5" />
      <span className="signup-particle p6" />
    </div>

    <svg className="signup-network" viewBox="0 0 640 900" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="authLineGrad" x1="0" y1="0" x2="640" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A8FF" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#1688FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#006EFF" stopOpacity="0.2" />
        </linearGradient>
        <filter id="authNodeGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="authFlowA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A8FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#1688FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00A8FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Soft radar rings */}
      <circle className="signup-radar r1" cx="220" cy="520" r="90" />
      <circle className="signup-radar r2" cx="220" cy="520" r="140" />
      <circle className="signup-radar r3" cx="220" cy="520" r="190" />

      {/* Base network curves */}
      <path className="signup-net-base" d="M40 180 C120 120, 200 140, 280 90 C360 40, 420 80, 500 60" />
      <path className="signup-net-base" d="M60 320 C150 280, 210 340, 300 300 C390 260, 450 320, 560 280" />
      <path className="signup-net-base" d="M30 480 C110 430, 190 500, 270 460 C350 420, 430 500, 520 470" />
      <path className="signup-net-base" d="M80 640 C160 600, 220 680, 320 640 C420 600, 480 680, 580 650" />
      <path className="signup-net-base" d="M120 90 C140 220, 180 360, 210 520 C240 660, 280 760, 340 840" />
      <path className="signup-net-base" d="M280 90 C300 250, 340 380, 380 520 C420 660, 460 760, 500 840" />
      <path className="signup-net-base" d="M40 720 C160 700, 240 760, 340 740 C440 720, 520 780, 600 760" />

      {/* Flowing light packets */}
      <path className="signup-net-flow flow-a" d="M40 180 C120 120, 200 140, 280 90 C360 40, 420 80, 500 60" />
      <path className="signup-net-flow flow-b" d="M60 320 C150 280, 210 340, 300 300 C390 260, 450 320, 560 280" />
      <path className="signup-net-flow flow-c" d="M30 480 C110 430, 190 500, 270 460 C350 420, 430 500, 520 470" />
      <path className="signup-net-flow flow-d" d="M120 90 C140 220, 180 360, 210 520 C240 660, 280 760, 340 840" />
      <path className="signup-net-flow flow-e" d="M80 640 C160 600, 220 680, 320 640 C420 600, 480 680, 580 650" />

      {/* Digital globe near bottom-left */}
      <g className="signup-globe-group" opacity="0.55">
        <ellipse cx="180" cy="700" rx="110" ry="108" stroke="url(#authLineGrad)" strokeWidth="1.1" />
        <ellipse cx="180" cy="700" rx="110" ry="48" stroke="url(#authLineGrad)" strokeWidth="0.9" opacity="0.7" />
        <ellipse cx="180" cy="700" rx="48" ry="108" stroke="url(#authLineGrad)" strokeWidth="0.9" opacity="0.7" />
        <path d="M70 700 H290" stroke="url(#authLineGrad)" strokeWidth="0.8" opacity="0.55" />
        <path d="M180 592 V808" stroke="url(#authLineGrad)" strokeWidth="0.8" opacity="0.55" />
      </g>

      {/* Nodes */}
      <circle className="signup-node n1" cx="120" cy="150" r="4.5" filter="url(#authNodeGlow)" />
      <circle className="signup-node n2" cx="280" cy="90" r="5.5" filter="url(#authNodeGlow)" />
      <circle className="signup-node n3" cx="460" cy="70" r="4" filter="url(#authNodeGlow)" />
      <circle className="signup-node n4" cx="300" cy="300" r="5" filter="url(#authNodeGlow)" />
      <circle className="signup-node n5" cx="520" cy="290" r="4.5" filter="url(#authNodeGlow)" />
      <circle className="signup-node n6" cx="270" cy="460" r="6" filter="url(#authNodeGlow)" />
      <circle className="signup-node n7" cx="210" cy="520" r="7" filter="url(#authNodeGlow)" />
      <circle className="signup-node n8" cx="320" cy="640" r="5" filter="url(#authNodeGlow)" />
      <circle className="signup-node n9" cx="140" cy="640" r="4" filter="url(#authNodeGlow)" />
      <circle className="signup-node n10" cx="500" cy="650" r="4.5" filter="url(#authNodeGlow)" />
    </svg>

    <div className="signup-left-inner">
      <Link to="/" className="signup-brand">
        <img src={logoMark} alt="" className="signup-brand-mark" />
        <div>
          <strong>TUMBO EYE 2.0</strong>
          <span>See the World Clearly</span>
        </div>
      </Link>

      <div className="signup-left-copy">
        <h1>
          Connect.
          <br />
          Discover.
          <br />
          <span>Grow.</span>
        </h1>
        <p>Join Tumbo Eye and be part of a smarter, more connected world.</p>
      </div>
    </div>

    <div className="signup-curve" aria-hidden="true" />
  </aside>
);

export default AuthBrandPanel;
