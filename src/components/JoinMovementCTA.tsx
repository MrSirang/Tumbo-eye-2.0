import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Globe,
  Play,
  User,
} from 'lucide-react';

import teamFloatingCards from '../assets/team-floating-cards.png';

const JoinMovementCTA: React.FC = () => {
  const stats = [
    { icon: <User size={18} />, value: '120K+', label: 'Active User' },
    { icon: <Briefcase size={18} />, value: '8.5K+', label: 'Job Opportunities' },
    { icon: <GraduationCap size={18} />, value: '8k+', label: 'Scholarship' },
    { icon: <Globe size={18} />, value: '50+', label: 'Countries Reached' },
  ];

  return (
    <section id="contact" className="section about-join-section">
      <div className="container">
        <div className="about-join-layout">
          <div className="about-join-content">
            <div className="section-tag">JOIN THE MOVEMENT</div>
            <h2 className="about-join-title">Your Next Opportunity Starts Here</h2>
            <p className="about-join-desc">
              Whether you&apos;re a student, job seeker, entrepreneur, or partner, Tumbo Eye 2.0 is here to help you discover opportunities, grow your skills, and create a brighter future. Join thousands of people already making an impact.
            </p>
            <div className="about-join-actions">
              <Link to="/#opportunities" className="btn btn-primary">
                Explore Opportunities <ArrowRight size={16} />
              </Link>
              <button className="btn btn-outline" onClick={() => alert('Watch Video')}>
                Watch Video <Play size={12} fill="currentColor" style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>
          <div className="about-join-visual">
            <img
              src={teamFloatingCards}
              alt="People collaborating with Tumbo Eye ecosystem"
              className="about-join-img"
            />
          </div>
        </div>

        <div className="about-join-stats-pill">
          {stats.map((stat, i) => (
            <div key={i} className="about-join-stat-item">
              <span className="about-join-stat-icon">{stat.icon}</span>
              <div className="about-join-stat-text">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
              {i < stats.length - 1 && <span className="about-join-stat-divider" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinMovementCTA;
