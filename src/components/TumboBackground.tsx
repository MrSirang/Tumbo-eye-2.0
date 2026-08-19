import React from 'react';

export const TumboBackground: React.FC = () => (
  <div className="tumbo-bg" aria-hidden="true">
    {/* Atmospheric glows */}
    <div className="tumbo-bg-glow tumbo-bg-glow-1" />
    <div className="tumbo-bg-glow tumbo-bg-glow-2" />
    <div className="tumbo-bg-glow tumbo-bg-glow-3" />

    {/* Network pattern */}
    <svg className="tumbo-bg-network" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Nodes */}
      <circle cx="180" cy="120" r="2.5" fill="#2E6BFF" opacity="0.12" />
      <circle cx="420" cy="80" r="2" fill="#2E6BFF" opacity="0.1" />
      <circle cx="720" cy="160" r="3" fill="#2E6BFF" opacity="0.1" />
      <circle cx="960" cy="90" r="2" fill="#2E6BFF" opacity="0.08" />
      <circle cx="1200" cy="200" r="2.5" fill="#2E6BFF" opacity="0.1" />
      <circle cx="300" cy="400" r="2" fill="#2E6BFF" opacity="0.07" />
      <circle cx="600" cy="500" r="2.5" fill="#2E6BFF" opacity="0.08" />
      <circle cx="1000" cy="450" r="2" fill="#2E6BFF" opacity="0.06" />
      <circle cx="1300" cy="550" r="2.5" fill="#2E6BFF" opacity="0.08" />
      <circle cx="150" cy="700" r="2" fill="#2E6BFF" opacity="0.06" />
      <circle cx="500" cy="750" r="3" fill="#2E6BFF" opacity="0.07" />
      <circle cx="850" cy="680" r="2" fill="#2E6BFF" opacity="0.06" />
      <circle cx="1100" cy="800" r="2.5" fill="#2E6BFF" opacity="0.07" />

      {/* Connection lines */}
      <path d="M180 120 Q300 60 420 80" stroke="#2E6BFF" strokeWidth="0.6" opacity="0.06" />
      <path d="M420 80 Q570 120 720 160" stroke="#2E6BFF" strokeWidth="0.6" opacity="0.05" />
      <path d="M720 160 Q840 125 960 90" stroke="#2E6BFF" strokeWidth="0.6" opacity="0.05" />
      <path d="M960 90 Q1080 145 1200 200" stroke="#2E6BFF" strokeWidth="0.6" opacity="0.04" />
      <path d="M300 400 Q450 450 600 500" stroke="#2E6BFF" strokeWidth="0.5" opacity="0.04" />
      <path d="M600 500 Q800 475 1000 450" stroke="#2E6BFF" strokeWidth="0.5" opacity="0.04" />
      <path d="M180 120 Q240 260 300 400" stroke="#2E6BFF" strokeWidth="0.5" opacity="0.03" />
      <path d="M1200 200 Q1250 375 1300 550" stroke="#2E6BFF" strokeWidth="0.5" opacity="0.03" />

      {/* Subtle Africa outline — abstract dots only */}
      <circle cx="1050" cy="320" r="1.5" fill="#2E6BFF" opacity="0.05" />
      <circle cx="1070" cy="350" r="1.5" fill="#2E6BFF" opacity="0.05" />
      <circle cx="1060" cy="380" r="1.5" fill="#2E6BFF" opacity="0.04" />
      <circle cx="1080" cy="410" r="1.5" fill="#2E6BFF" opacity="0.04" />
      <circle cx="1070" cy="440" r="1.5" fill="#2E6BFF" opacity="0.03" />
      <circle cx="1040" cy="460" r="1.5" fill="#2E6BFF" opacity="0.03" />
      <circle cx="1090" cy="300" r="1.5" fill="#2E6BFF" opacity="0.04" />
      <circle cx="1110" cy="340" r="1.5" fill="#2E6BFF" opacity="0.04" />
    </svg>
  </div>
);

export default TumboBackground;
