import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Star,
  Target,
  Lightbulb,
  Heart,
  Handshake,
  Globe,
  Sparkles,
  Award,
  Shield,
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
} from 'lucide-react';

import aboutHeroTeam from '../assets/about-hero-meeting.png';
import aboutStoryIllustration from '../assets/about-story-illustration.png';
import teamJohn from '../assets/team-john-doe.png';
import teamSarah from '../assets/team-sarah-johnson.png';
import teamMichael from '../assets/team-michael-chen.png';
import teamAmina from '../assets/team-amina-hassan.png';
import JoinMovementCTA from '../components/JoinMovementCTA';

const AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
];

const AboutHero: React.FC = () => (
  <section className="section about-hero-section">
    <div className="container about-hero-grid">
      <div className="about-hero-content">
        <div className="hero-tag-pill">ABOUT TUMBO EYE 2.0</div>
        <h1 className="about-hero-title">
          Connecting People to Opportunities That{' '}
          <span className="highlight-blue">Transform Lives</span>
        </h1>
        <p className="about-hero-desc">
          Tumbo Eye 2.0 connects students, job seekers, entrepreneurs, and communities with jobs, scholarships, internships, mentorships, funding, and resources — all in one powerful ecosystem.
        </p>
        <div className="hero-btn-group">
          <Link to="/#opportunities" className="btn btn-primary">
            Explore Opportunities <ArrowRight size={16} />
          </Link>
          <Link to="/#contact" className="btn btn-outline">
            Contact Us <Phone size={14} />
          </Link>
        </div>
        <div className="about-hero-trust">
          <div className="hero-avatar-stack">
            {AVATARS.map((src, i) => (
              <img key={i} className="hero-avatar-img" src={src} alt="" />
            ))}
          </div>
          <div className="about-hero-trust-text">
            <Star size={16} fill="#f59e0b" strokeWidth={0} className="about-hero-star" />
            Trusted by <strong>120,000+</strong> Community Members
          </div>
        </div>
      </div>
      <div className="about-hero-visual-wrap">
        <img src={aboutHeroTeam} alt="Team collaborating around a project plan" className="about-hero-main-img" />
      </div>
    </div>
  </section>
);

const MissionVision: React.FC = () => (
  <section id="purpose" className="section about-purpose-section">
    <div className="container text-center">
      <div className="section-tag">OUR PURPOSE</div>
      <h2 className="about-section-title">
        Driven by Purpose. Guided by <span className="highlight-blue">Vision.</span>
      </h2>
      <p className="about-section-subtitle">
        We exist to close the opportunity gap and help people unlock their potential through one connected digital ecosystem.
      </p>
      <div className="about-mv-grid">
        <article className="about-mv-card">
          <div className="about-mv-icon"><Target size={24} strokeWidth={1.75} /></div>
          <h3>Our Mission</h3>
          <p>
            To connect people with meaningful opportunities in education, careers, funding, and community support — making growth accessible for everyone.
          </p>
        </article>
        <article className="about-mv-card">
          <div className="about-mv-icon"><Lightbulb size={24} strokeWidth={1.75} /></div>
          <h3>Our Vision</h3>
          <p>
            A world where every student, professional, and entrepreneur can discover and pursue opportunities that transform their future.
          </p>
        </article>
      </div>
    </div>
  </section>
);

const CoreValues: React.FC = () => {
  const values = [
    { name: 'Empowerment', icon: <Heart size={22} strokeWidth={1.75} /> },
    { name: 'Collaboration', icon: <Handshake size={22} strokeWidth={1.75} /> },
    { name: 'Inclusion', icon: <Globe size={22} strokeWidth={1.75} /> },
    { name: 'Innovation', icon: <Sparkles size={22} strokeWidth={1.75} /> },
    { name: 'Excellence', icon: <Award size={22} strokeWidth={1.75} /> },
    { name: 'Integrity', icon: <Shield size={22} strokeWidth={1.75} /> },
  ];

  return (
    <section className="section about-values-section">
      <div className="container">
        <div className="about-values-heading">
          <span className="about-values-line" />
          <h2 className="about-values-title">Our Core Values</h2>
          <span className="about-values-line" />
        </div>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div key={i} className={`about-value-card ${i === 0 ? 'active' : ''}`}>
              <div className="about-value-icon">{v.icon}</div>
              <h4 className="about-value-name">{v.name}</h4>
              <span className="about-value-underline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurStory: React.FC = () => {
  const steps = [
    {
      title: 'Our Beginning',
      desc: 'Tumbo Eye started as a vision to bridge the opportunity gap for students and young professionals seeking scholarships and career pathways.',
    },
    {
      title: 'Our Growth',
      desc: 'We expanded partnerships with universities, employers, and NGOs — growing into a platform serving thousands across multiple regions.',
    },
    {
      title: 'Today',
      desc: 'Tumbo Eye 2.0 is a full digital ecosystem with AI guidance, funding tools, and community support empowering 120,000+ members.',
    },
  ];

  const focusAreas = [
    { icon: <GraduationCap size={18} />, title: 'Education', desc: 'Scholarships, courses, and learning pathways.' },
    { icon: <Briefcase size={18} />, title: 'Careers', desc: 'Jobs, internships, and professional growth.' },
    { icon: <Rocket size={18} />, title: 'Innovation', desc: 'Startup support and entrepreneurial tools.' },
    { icon: <Users size={18} />, title: 'Community', desc: 'Mentorship, networking, and peer support.' },
  ];

  return (
    <section className="section about-story-section">
      <div className="container">
        <div className="about-story-split">
          <div className="about-story-left">
            <div className="section-tag">OUR STORY</div>
            <h2 className="about-section-title" style={{ textAlign: 'left' }}>
              Our Journey Towards Empowering <span className="highlight-blue">Communities</span>
            </h2>
            <p className="about-story-intro">
              What started as a vision to bridge the opportunity divide has evolved into a thriving digital ecosystem connecting students, professionals, entrepreneurs, and organizations.
            </p>
            <div className="about-story-timeline">
              {steps.map((step, i) => (
                <div key={i} className="about-story-step">
                  <div className={`about-story-step-icon step-${i + 1}`}>
                    <span>{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="about-story-step-title">{step.title}</h4>
                    <p className="about-story-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-story-right">
            <img
              src={aboutStoryIllustration}
              alt="Our journey empowering communities worldwide"
              className="about-story-illus"
            />
          </div>
        </div>

        <div className="about-focus-grid">
          {focusAreas.map((area, i) => (
            <div key={i} className="about-focus-card">
              <div className="about-focus-icon">{area.icon}</div>
              <div>
                <h4 className="about-focus-title">{area.title}</h4>
                <p className="about-focus-desc">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Milestones: React.FC = () => {
  const milestones = [
    { year: '2021', title: 'The Beginning', desc: 'Platform launched with scholarships and early community partnerships.' },
    { year: '2022', title: 'Early Expansion', desc: 'Reached 10,000 users and added mentorship matching features.' },
    { year: '2023', title: 'Community Expansion', desc: 'Jobs and internships integrated; 50,000+ active users milestone.' },
    { year: '2024', title: 'Funding & Grants', desc: 'SME funding directory launched with 80+ partner organizations.' },
    { year: '2025', title: 'AI Integration', desc: 'Smart recommendations and collaborative workspaces released.' },
    { year: '2026', title: 'Tumbo Eye 2.0', desc: 'Full ecosystem relaunch serving 120,000+ members globally.' },
  ];

  return (
    <section className="section about-milestones-section">
      <div className="container text-center">
        <div className="section-tag">Our Journey</div>
        <h2 className="about-section-title">
          Milestones That Define <span className="highlight-blue">Our Growth</span>
        </h2>
        <p className="about-section-subtitle">
          From a simple scholarship directory to a multi-functional global ecosystem, Tumbo Eye 2.0 has continuously evolved to meet community needs.
        </p>
        <div className="about-milestones-track-wrap">
          <div className="about-milestones-line" aria-hidden="true" />
          <div className="about-milestones-grid">
            {milestones.map((m, i) => (
              <div key={i} className="about-milestone-card">
                <div className="about-milestone-dot" />
                <p className="about-milestone-year">{m.year}</p>
                <h4 className="about-milestone-title">{m.title}</h4>
                <p className="about-milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      quote: 'Opportunity should never be limited by location or connections.',
      img: teamJohn,
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Partnerships',
      quote: 'Strong partnerships turn individual ambition into collective progress.',
      img: teamSarah,
    },
    {
      name: 'Michael Chen',
      role: 'Product Lead',
      quote: 'Great products remove friction between people and opportunity.',
      img: teamMichael,
    },
    {
      name: 'Amina Hassan',
      role: 'Community Director',
      quote: 'Communities grow when every member feels seen and supported.',
      img: teamAmina,
    },
  ];

  return (
    <section className="section about-team-section">
      <div className="container text-center">
        <div className="section-tag">LEADERSHIP</div>
        <h2 className="about-section-title">
          Meet the People Behind <span className="highlight-blue">Tumbo Eye 2.0</span>
        </h2>
        <p className="about-section-subtitle">
          A dedicated team building tools, partnerships, and community systems that help people grow.
        </p>
        <div className="about-team-grid">
          {team.map((member) => (
            <article className="about-team-card" key={member.name}>
              <img src={member.img} alt={member.name} className="about-team-photo" />
              <h3>{member.name}</h3>
              <p className="about-team-role">{member.role}</p>
              <p className="about-team-quote">&ldquo;{member.quote}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurImpact: React.FC = () => {
  const stats = [
    { num: '120K+', label: 'Community Members', icon: <Users size={16} /> },
    { num: '8,500+', label: 'Scholarships Awarded', icon: <GraduationCap size={16} /> },
    { num: '25,000+', label: 'Jobs Connected', icon: <Briefcase size={16} /> },
    { num: '500+', label: 'Partner Organizations', icon: <Handshake size={16} /> },
    { num: '50+', label: 'Countries Reached', icon: <Globe size={16} /> },
    { num: '1,200+', label: 'Events Hosted', icon: <Award size={16} /> },
  ];

  return (
    <section className="section about-impact-section">
      <div className="container text-center">
        <div className="section-tag">OUR IMPACT</div>
        <h2 className="about-section-title">
          Creating Opportunities. <span className="highlight-blue">Transforming Communities.</span>
        </h2>
        <p className="about-section-subtitle">
          Every number represents real lives changed — students funded, careers launched, and communities strengthened through our ecosystem.
        </p>
        <div className="about-impact-grid">
          {stats.map((s, i) => (
            <div key={i} className="about-impact-card">
              <div className="about-impact-icon">{s.icon}</div>
              <p className="about-impact-num">{s.num}</p>
              <p className="about-impact-label">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="about-impact-cta-card">
          <h3 className="about-impact-cta-title">Be Part of Our Impact</h3>
          <p className="about-impact-cta-desc">
            Join our growing community of students, professionals, entrepreneurs, and partners making a difference together.
          </p>
          <div className="about-impact-cta-actions">
            <button className="btn btn-primary" onClick={() => alert('Join the Community')}>
              Join the Community <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => alert('Become a Partner')}>
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About: React.FC = () => (
  <>
    <AboutHero />
    <MissionVision />
    <CoreValues />
    <OurStory />
    <Milestones />
    <TeamSection />
    <OurImpact />
    <JoinMovementCTA />
  </>
);

export default About;
