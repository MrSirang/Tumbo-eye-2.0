import React from 'react';
import { Cloud, Lock, ShieldCheck, Smartphone } from 'lucide-react';

const trustItems = [
  { icon: <ShieldCheck size={26} strokeWidth={1.7} />, line1: 'Verified', line2: '& trusted' },
  { icon: <Lock size={26} strokeWidth={1.7} />, line1: 'Privacy by', line2: 'design' },
  { icon: <Cloud size={26} strokeWidth={1.7} />, line1: 'Hosted in', line2: 'South Africa' },
  { icon: <Smartphone size={26} strokeWidth={1.7} />, line1: 'Works offline.', line2: 'Works for all.' },
];

export const TrustBar: React.FC = () => (
  <div className="page-trustbar">
    <svg className="page-trustbar-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,78 C220,20 420,118 720,72 C1020,26 1240,108 1440,64 L1440,120 L0,120 Z" />
    </svg>
    <div className="th-trustbar page-trustbar-inner">
      <div className="th-wrap th-trust-grid">
        {trustItems.map((item) => (
          <div className="th-trust" key={item.line1}>
            {item.icon}
            <span>
              <b>{item.line1}</b>
              {item.line2}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
