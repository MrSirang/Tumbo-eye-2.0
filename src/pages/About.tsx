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
  TrendingUp,
} from 'lucide-react';

const LinkedInIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.96v14H.02V8zM8.5 8h4.75v1.92h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.31 5.96 7.62V22h-4.96v-6.28c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V22H8.5V8z" />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.5h7.6l5.24 6.93L18.9 1.5zm-1.29 18.8h2.04L6.48 3.6H4.29l13.32 16.7z" />
  </svg>
);

import aboutHeroCircle1 from '../assets/about-hero-circle-1.png';
import aboutHeroCircle2 from '../assets/about-hero-circle-2.png';
import aboutJourneyPhoto from '../assets/about-journey-photo.png';
import teamMember1 from '../assets/team-member-1.png';
import teamMember2 from '../assets/team-member-2.png';
import teamMember3 from '../assets/team-member-3.png';
import teamMember4 from '../assets/team-member-4.png';
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
          <span className="about-hero-title-accent">Transform Lives</span>
        </h1>
        <p className="about-hero-desc">
          Tumbo is South Africa's Digital Inclusion Ecosystem, connecting verified individuals, businesses, communities and government institutions through intelligent opportunity matching. Our mission is to ensure that opportunities reach the right people while creating measurable social and economic impact across South Africa.
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
        <div className="about-hero-collage">
          <div className="about-hero-circle about-hero-circle-lg">
            <img src={aboutHeroCircle1} alt="Community member presenting the Tumbo app at an EMA event" />
          </div>
          <div className="about-hero-circle about-hero-circle-sm">
            <img src={aboutHeroCircle2} alt="Community members attending a Tumbo engagement session" />
          </div>
          <span className="about-hero-dots" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

const MissionVision: React.FC = () => (
  <section id="purpose" className="section about-purpose-section">
    <span className="about-purpose-dots" aria-hidden="true" />
    <div className="container text-center">
      <div className="section-tag">OUR PURPOSE</div>
      <h2 className="about-section-title">
        Driven by Purpose. Inspired by <span className="highlight-blue">Impact.</span>
      </h2>
      <p className="about-section-subtitle">
        At Tumbo, we believe that opportunity changes lives. Our platform empowers individuals, strengthens communities and enables organisations to connect with verified people through one trusted digital ecosystem.
      </p>
      <div className="about-mv-grid">
        <article className="about-mv-card">
          <div className="about-mv-head">
            <div className="about-mv-icon"><Target size={24} strokeWidth={1.75} /></div>
            <h3>Our <span className="highlight-blue">Mission</span></h3>
          </div>
          <p>
            To connect verified individuals, communities, businesses and government institutions through digital innovation, creating equal access to employment, education, funding, entrepreneurship and community development opportunities.
          </p>
        </article>
        <article className="about-mv-card">
          <div className="about-mv-head">
            <div className="about-mv-icon"><Lightbulb size={24} strokeWidth={1.75} /></div>
            <h3>Our <span className="highlight-blue">Vision</span></h3>
          </div>
          <p>
            To become Africa's leading Digital Inclusion Ecosystem where every individual has access to opportunities that improve lives, strengthen communities and drive sustainable economic growth.
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
      title: 'The Beginning',
      desc: 'Tumbo began as a platform focused on connecting persons and communities to opportunities.',
      icon: <Rocket size={16} />,
    },
    {
      title: 'Growth',
      desc: 'It expanded into a broader ecosystem of education, careers, funding, and community engagement.',
      icon: <TrendingUp size={16} />,
    },
    {
      title: 'Today',
      desc: 'Building a growing digital ecosystem, Tumbo connects people with meaningful opportunities and community intelligence.',
      icon: <Sparkles size={16} />,
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
        <div className="about-story-card">
          <div className="about-story-split">
            <div className="about-story-left">
              <div className="section-tag">OUR STORY</div>
              <h2 className="about-section-title about-story-heading">
                Our Journey Towards Empowering <span className="highlight-blue">Communities</span>
              </h2>
              <p className="about-story-intro">
                Tumbo was established to bridge the gap between opportunity providers and communities by using technology, verified identity, and community intelligence. Today, Tumbo continues to build an ecosystem that creates meaningful opportunities for everyone.
              </p>
              <div className="about-story-timeline">
                {steps.map((step, i) => (
                  <div key={i} className="about-story-step">
                    <div className={`about-story-step-icon step-${i + 1}`}>
                      {step.icon}
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
                src={aboutJourneyPhoto}
                alt="Community member showcasing local heritage at a Tumbo event"
                className="about-story-illus"
              />
            </div>
          </div>
        </div>

        <div className="about-focus-heading">
          <h2 className="about-section-title">
            Impact <span className="highlight-blue">Areas</span>
          </h2>
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
        <div className="about-milestones-footer">
          <h3 className="about-milestones-footer-title">Building the Future Together</h3>
          <p className="about-milestones-footer-desc">
            Every milestone reflects our commitment to empowering people, strengthening communities, and creating opportunities for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'David Mokoena',
      role: 'Founder & CEO',
      bio: 'Leads the vision and strategy of Tumbo, driving digital inclusion and lasting community impact.',
      img: teamMember1,
    },
    {
      name: 'Naledi Dlamini',
      role: 'Community Engagement Lead',
      bio: 'Builds and nurtures the community, connecting members with opportunities that change lives.',
      img: teamMember2,
    },
    {
      name: 'Michael Brown',
      role: 'Head of Operations',
      bio: 'Oversees day-to-day operations, ensuring the ecosystem runs smoothly and reaches more people.',
      img: teamMember3,
    },
    {
      name: 'Amara Okafor',
      role: 'Head of Product & Design',
      bio: 'Shapes the product experience, making opportunity accessible through thoughtful design.',
      img: teamMember4,
    },
  ];

  return (
    <section className="section about-team-section">
      <div className="container text-center">
        <div className="section-tag">OUR LEADERSHIP</div>
        <h2 className="about-section-title">
          Meet the Team Behind <span className="highlight-blue">Tumbo</span>
        </h2>
        <p className="about-section-subtitle">
          Our leadership team is committed to building innovative digital solutions that connect communities, businesses and institutions while creating lasting social impact.
        </p>
        <div className="about-team-grid">
          {team.map((member) => (
            <article className="about-team-card" key={member.name}>
              <img
                src={member.img}
                alt={member.name}
                className="about-team-photo"
              />
              <h3>{member.name}</h3>
              <p className="about-team-role">{member.role}</p>
              <p className="about-team-quote">{member.bio}</p>
              <div className="about-team-social">
                <a href="#" aria-label={`${member.name} on LinkedIn`} className="about-team-social-link">
                  <LinkedInIcon />
                </a>
                <a href="#" aria-label={`${member.name} on Twitter`} className="about-team-social-link">
                  <TwitterIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="about-team-banner">
          <h3 className="about-team-banner-title">Together We Create Opportunities</h3>
          <p className="about-team-banner-desc">
            Our shared team of experts works together to build a stronger, more connected ecosystem — driving growth, collaboration, and success for everyone.
          </p>
          <button className="btn btn-primary" onClick={() => alert('Join the Team')}>
            Join the Team <ArrowRight size={16} />
          </button>
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
          Every opportunity shared through Tumbo Eye 2.0 contributes to stronger communities, better education, meaningful careers, and sustainable growth across Africa and beyond.
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
            Join South Africa's Digital Inclusion Ecosystem and discover opportunities designed to match your potential, skills and aspirations.
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
  </>
);

export default About;
