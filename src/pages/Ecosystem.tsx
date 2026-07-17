import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Network,
  FileText,
  Bot,
  BookOpen,
  Users,
  Trophy,
  Play,
  Compass,
  Search,
  Sparkles,
  Handshake,
  Globe,
  User,
  Plus,
  Rocket,
  Landmark,
  MessageSquare,
} from 'lucide-react';

import ecosystemHeroDevices from '../assets/ecosystem-hero-devices.png';
import ecosystemGlobalNetwork from '../assets/ecosystem-global-network.png';
import ecosystemPathMountains from '../assets/ecosystem-path-mountains.png';
import ecosystemCtaIllustration from '../assets/ecosystem-cta-illustration.png';
import ecosystemCitySkyline from '../assets/ecosystem-city-skyline.png';
import iconEducation from '../assets/icon-education.png';
import iconCareers from '../assets/icon-careers.png';
import iconFunding from '../assets/icon-funding.png';
import iconAnalytics from '../assets/icon-analytics.png';
import platformAiRobot from '../assets/platform-ai-robot.png';
import iconResources from '../assets/icon-resources.png';
import iconCommunity from '../assets/icon-community.png';
import iconEvents from '../assets/icon-events.png';

/* ==========================================================================
   SUB-COMPONENT: ECOSYSTEM HERO
   ========================================================================== */
const EcosystemHero: React.FC = () => {
  const stats = [
    { icon: <Users size={18} strokeWidth={2} />, value: '120k+', label: 'Active Users' },
    { icon: (
      <span className="eco-hero-stat-icon-combo">
        <Briefcase size={16} strokeWidth={2} />
        <Plus size={8} strokeWidth={3} className="eco-hero-stat-plus" />
      </span>
    ), value: '8.5k+', label: 'Scholarships' },
    { icon: <Network size={18} strokeWidth={2} />, value: '25k+', label: 'Opportunities' },
    { icon: <Handshake size={18} strokeWidth={2} />, value: '500+', label: 'Partners' },
  ];

  return (
    <section className="section section-blue-bg eco-page-hero-wrap">
      <div className="container">
        <div className="eco-page-hero-grid">
          <div className="eco-page-hero-left">
            <div className="hero-tag-pill">ECOSYSTEM EXPLORER</div>
            <h1 className="eco-page-hero-title">
              Explore a Connected Ecosystem of{' '}
              <span className="hero-title-blue">
                Endless Opportunities<span className="hero-title-underline"></span>
              </span>
            </h1>
            <p className="eco-page-hero-desc">
              Discover a powerful digital ecosystem that brings together education, careers, funding, business support, AI-powered guidance, and community resources—all designed to help you learn, grow, and succeed in one platform.
            </p>
            <div className="hero-btn-group">
              <Link to="/#opportunities" className="btn btn-primary">
                Explore Opportunities <ArrowRight size={16} />
              </Link>
              <button className="btn btn-outline" onClick={() => alert('Watch Demo')}>
                Watch Demo <Play size={12} fill="currentColor" style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>
          <div className="eco-page-hero-right">
            <img
              src={ecosystemHeroDevices}
              alt="Tumbo Eye ecosystem on laptop and mobile"
              className="eco-page-hero-devices-img"
            />
          </div>
        </div>

        <div className="eco-hero-stats-pill">
          {stats.map((stat, i) => (
            <div key={i} className="eco-hero-stat-item">
              <span className="eco-hero-stat-icon">{stat.icon}</span>
              <div className="eco-hero-stat-text">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
              {i < stats.length - 1 && <span className="eco-hero-stat-divider" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: CONNECTED PLATFORM SERVICES
   ========================================================================== */
const ConnectedPlatform: React.FC = () => {
  const services = [
    {
      title: 'Education',
      desc: 'Access courses, certifications, and scholarships to advance your learning journey.',
      icon: <GraduationCap size={22} strokeWidth={1.75} />,
      illustration: iconEducation,
    },
    {
      title: 'Jobs & Careers',
      desc: 'Discover jobs, internships, and career tools to grow professionally.',
      icon: <Briefcase size={22} strokeWidth={1.75} />,
      illustration: iconCareers,
    },
    {
      title: 'Grants & Funding',
      desc: 'Find grants, scholarships, and financial support for your goals.',
      icon: <Network size={22} strokeWidth={1.75} />,
      illustration: iconFunding,
    },
    {
      title: 'Business Support',
      desc: 'Get mentorship, resources, and tools to start and grow your business.',
      icon: <FileText size={22} strokeWidth={1.75} />,
      illustration: iconAnalytics,
    },
    {
      title: 'AI Assistant',
      desc: 'Receive personalized recommendations and guidance powered by AI.',
      icon: <Bot size={22} strokeWidth={1.75} />,
      illustration: platformAiRobot,
    },
    {
      title: 'Resources',
      desc: 'Explore articles, guides, and learning materials to support your growth.',
      icon: <BookOpen size={22} strokeWidth={1.75} />,
      illustration: iconResources,
    },
    {
      title: 'Community',
      desc: 'Connect with mentors, peers, and professionals in your field.',
      icon: <Users size={22} strokeWidth={1.75} />,
      illustration: iconCommunity,
    },
    {
      title: 'Events',
      desc: 'Join workshops, webinars, and networking events to expand your network.',
      icon: <Trophy size={22} strokeWidth={1.75} />,
      illustration: iconEvents,
    },
  ];

  return (
    <section className="section eco-connected-section">
      <div className="container">
        <div className="eco-connected-header text-center">
          <div className="section-tag">OUR ECOSYSTEM</div>
          <h2 className="eco-connected-title">
            Everything You Need in One <span className="highlight-blue">Connected Platform</span>
          </h2>
          <p className="eco-connected-subtitle">
            Explore powerful services designed to support your education, career, business, and personal growth through one integrated ecosystem.
          </p>
        </div>

        <div className="eco-platform-cards-grid">
          {services.map((service, i) => (
            <div key={i} className="eco-platform-card">
              <div className="eco-platform-card-icon">{service.icon}</div>
              <h3 className="eco-platform-card-title">{service.title}</h3>
              <p className="eco-platform-card-desc">{service.desc}</p>
              <div className="eco-platform-card-bottom">
                <button
                  className="eco-platform-card-arrow"
                  onClick={() => alert(`Explore ${service.title}`)}
                  aria-label={`Explore ${service.title}`}
                >
                  <ArrowUpRight size={16} />
                </button>
                <img
                  src={service.illustration}
                  alt=""
                  className="eco-platform-card-illus"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="eco-choose-path-banner">
          <div className="eco-choose-path-left">
            <div className="eco-choose-path-compass">
              <Compass size={28} strokeWidth={1.75} />
            </div>
          </div>
          <div className="eco-choose-path-content">
            <h3 className="eco-choose-path-title">Choose Your Path</h3>
            <p className="eco-choose-path-desc">
              Select a category and start exploring opportunities tailored to your goals.
            </p>
            <button className="btn btn-primary" onClick={() => alert('Explore All Services')}>
              Explore All Services <ArrowRight size={16} />
            </button>
          </div>
          <div className="eco-choose-path-visual">
            <img
              src={ecosystemPathMountains}
              alt="Path to success illustration"
              className="eco-choose-path-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: POWERING YOUR JOURNEY
   ========================================================================== */
const PoweringJourney: React.FC = () => {
  const serviceCards = [
    {
      title: 'Education Services',
      desc: 'Find scholarships, online courses, certifications, and learning resources.',
      icon: <GraduationCap size={20} strokeWidth={1.75} />,
    },
    {
      title: 'Career Services',
      desc: 'Discover verified jobs, internships, graduate programs, and career support.',
      icon: <Landmark size={20} strokeWidth={1.75} />,
    },
    {
      title: 'Funding Services',
      desc: 'Explore grants, business funding, startup support, and financial opportunities.',
      icon: <Network size={20} strokeWidth={1.75} />,
    },
    {
      title: 'AI-Powered Guidance',
      desc: 'Receive personalized recommendations and smart assistance based on your goals.',
      icon: <MessageSquare size={20} strokeWidth={1.75} />,
    },
  ];

  return (
    <section className="section eco-journey-section">
      <div className="container">
        <div className="eco-journey-header text-center">
          <div className="section-tag">OUR SERVICES</div>
          <h2 className="eco-journey-title">
            Powering Every Stage of <span className="highlight-blue">Your Journey</span>
          </h2>
          <p className="eco-journey-subtitle">
            From education and career development to entrepreneurship and community engagement, Tumbo Eye 2.0 provides a complete suite of digital services designed to help you achieve your goals.
          </p>
        </div>

        <div className="eco-journey-split">
          <div className="eco-journey-visual">
            <img
              src={ecosystemGlobalNetwork}
              alt="Tumbo Eye platform on laptop and mobile with global network"
              className="eco-journey-devices-img"
            />
          </div>

          <div className="eco-journey-services">
            {serviceCards.map((card, i) => (
              <div key={i} className="eco-journey-service-card">
                <div className="eco-journey-service-icon">{card.icon}</div>
                <div>
                  <h3 className="eco-journey-service-title">{card.title}</h3>
                  <p className="eco-journey-service-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="eco-journey-cta-banner">
          <div className="eco-journey-cta-icon-wrap">
            <Rocket size={26} strokeWidth={1.75} />
          </div>
          <div className="eco-journey-cta-content">
            <h3 className="eco-journey-cta-title">One Platform. Unlimited Possibilities.</h3>
            <p className="eco-journey-cta-desc">
              Everything you need to learn, grow, connect, and succeed is available in one connected ecosystem.
            </p>
            <button className="btn btn-primary" onClick={() => alert('Explore All Services')}>
              Explore All Services <ArrowRight size={16} />
            </button>
          </div>
          <div className="eco-journey-cta-visual">
            <img
              src={ecosystemCitySkyline}
              alt="Connected city ecosystem illustration"
              className="eco-journey-city-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: EXPLORE FUTURE CTA
   ========================================================================== */
const ExploreFutureCTA: React.FC = () => {
  const features = [
    {
      icon: <Search size={18} strokeWidth={2} />,
      title: 'Discover Opportunities',
      desc: 'Jobs, Scholarships, Grants, Internship & Funds',
    },
    {
      icon: <Network size={18} strokeWidth={2} />,
      title: 'Connect with Partners',
      desc: 'Universities, NGOs, Government & Companies',
    },
    {
      icon: <Sparkles size={18} strokeWidth={2} />,
      title: 'AI Smart Recommendations',
      desc: 'Personalized opportunities based on your profile',
    },
  ];

  const bottomStats = [
    { icon: <User size={18} />, value: '120K+', label: 'Active User' },
    { icon: <Briefcase size={18} />, value: '8.5K+', label: 'Job Opportunities' },
    { icon: <GraduationCap size={18} />, value: '8k+', label: 'Scholarship' },
    { icon: <Globe size={18} />, value: '50+', label: 'Countries Reached' },
  ];

  return (
    <section className="section eco-future-cta-section">
      <div className="container">
        <div className="eco-future-cta-card">
          <div className="eco-future-cta-grid">
            <div className="eco-future-cta-content">
              <div className="eco-future-cta-badge">GET STARTED</div>
              <h2 className="eco-future-cta-title">Start Exploring Your Future Today</h2>
              <p className="eco-future-cta-desc">
                Join thousands of students, professionals, entrepreneurs, and organizations already using Tumbo Eye 2.0 to discover opportunities, build connections, and achieve their goals.
              </p>

              <ul className="eco-future-features">
                {features.map((feature, i) => (
                  <li key={i} className="eco-future-feature-item">
                    <span className="eco-future-feature-icon">{feature.icon}</span>
                    <div>
                      <strong>{feature.title}</strong>
                      <span>{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="eco-future-cta-actions">
                <Link to="/#opportunities" className="btn btn-primary">
                  Explore Opportunities <ArrowRight size={16} />
                </Link>
                <button className="btn btn-outline-light" onClick={() => alert('Create Free Account')}>
                  Create Free Account
                </button>
              </div>
            </div>

            <div className="eco-future-cta-visual">
              <img
                src={ecosystemCtaIllustration}
                alt="Students and professionals using Tumbo Eye platform"
                className="eco-future-cta-img"
              />
            </div>
          </div>

          <div className="eco-future-stats-bar">
            {bottomStats.map((stat, i) => (
              <div key={i} className="eco-future-stat">
                <span className="eco-future-stat-icon">{stat.icon}</span>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
                {i < bottomStats.length - 1 && <span className="eco-future-stat-divider" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN COMPONENT: ECOSYSTEM PAGE
   ========================================================================== */
export const Ecosystem: React.FC = () => {
  return (
    <>
      <EcosystemHero />
      <ConnectedPlatform />
      <PoweringJourney />
      <ExploreFutureCTA />
    </>
  );
};

export default Ecosystem;
