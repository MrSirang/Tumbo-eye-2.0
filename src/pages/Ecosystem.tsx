import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  GraduationCap,
  Briefcase,
  Network,
  MessageSquare,
  Rocket,
  Search,
  Target,
  Sparkles,
  User,
  Share2,
  Home,
  Globe,
} from 'lucide-react';

import ecoHeroPhoto from '../assets/eco-hero-event.png';
import ecoJourneyStage from '../assets/eco-journey-stage.png';
import ecoJoinPhoto from '../assets/eco-join-photo.png';
import ecosystemCitySkyline from '../assets/ecosystem-city-skyline.png';
import ecoBannerMountains from '../assets/eco-src-20.png';
import ecoBannerGlobe from '../assets/eco-src-21.png';

// Card icons (top) and illustrations (bottom-right)
import icTumboApp from '../assets/eco-src-19.png';
import icTumboBiz from '../assets/eco-src-18.png';
import icTumboGov from '../assets/eco-src-17.png';
import icTumboAi from '../assets/eco-src-16.png';
import icTumboYe2 from '../assets/eco-src-03.png';
import icVerified from '../assets/eco-src-04.png';
import icCommunity from '../assets/eco-src-02.png';
import icMatching from '../assets/eco-src-12.png';

import ilTumboApp from '../assets/eco-src-19.png';
import ilTumboBiz from '../assets/eco-src-11.png';
import ilTumboGov from '../assets/eco-src-09.png';
import ilTumboAi from '../assets/eco-src-07.png';
import ilTumboYe2 from '../assets/eco-src-10.png';
import ilVerified from '../assets/eco-src-06.png';
import ilCommunity from '../assets/eco-src-05.png';
import ilMatching from '../assets/eco-src-08.png';

/* ==========================================================================
   SUB-COMPONENT: ECOSYSTEM HERO
   ========================================================================== */
const EcosystemHero: React.FC = () => (
  <section className="section eco2-hero-section">
    <div className="container">
      <div className="eco2-hero-grid">
        <div className="eco2-hero-left">
          <div className="hero-tag-pill">TUMBO DIGITAL ECOSYSTEM</div>
          <h1 className="eco2-hero-title">
            One Ecosystem. Multiple Solutions.{' '}
            <span className="eco2-title-accent">Unlimited Opportunity.</span>
          </h1>
          <p className="eco2-hero-desc">
            Discover South Africa's Digital Inclusion Ecosystem where verified
            individuals, businesses, communities and government institutions
            connect through one intelligent platform. Access employment,
            education, funding, entrepreneurship, AI-powered support and
            community services—all designed to create measurable impact.
          </p>
          <div className="hero-btn-group">
            <Link to="/#opportunities" className="btn btn-primary">
              Explore the Ecosystem <ArrowRight size={16} />
            </Link>
            <button className="btn btn-outline" onClick={() => alert('Watch Demo')}>
              Watch Demo <Play size={12} fill="currentColor" style={{ marginLeft: '4px' }} />
            </button>
          </div>
        </div>
        <div className="eco2-hero-right">
          <img
            src={ecoHeroPhoto}
            alt="Community members connecting at a Tumbo ecosystem event"
            className="eco2-hero-photo"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   SUB-COMPONENT: CONNECTED ECOSYSTEM CARDS
   ========================================================================== */
const ConnectedEcosystem: React.FC = () => {
  const cards = [
    {
      title: 'Tumbo App',
      desc: 'A one-stop verified digital hub for individuals, communities and organisations to connect with opportunities.',
      icon: icTumboApp,
      illustration: ilTumboApp,
    },
    {
      title: 'Tumbo Biz',
      desc: 'A business ecosystem for SMEs and entrepreneurs to access support, resources and growth opportunities.',
      icon: icTumboBiz,
      illustration: ilTumboBiz,
    },
    {
      title: 'Tumbo Gov',
      desc: 'A trusted channel that connects government institutions and programmes with the people who need them.',
      icon: icTumboGov,
      illustration: ilTumboGov,
    },
    {
      title: 'Tumbo AI',
      desc: 'Smart, AI-powered guidance and recommendations that match people to the right opportunities.',
      icon: icTumboAi,
      illustration: ilTumboAi,
    },
    {
      title: 'Tumbo YE2',
      desc: 'A youth empowerment programme creating pathways to education, skills and employment.',
      icon: icTumboYe2,
      illustration: ilTumboYe2,
    },
    {
      title: 'Verified Identity',
      desc: 'A secure, verified identity layer that builds trust between individuals, businesses and institutions.',
      icon: icVerified,
      illustration: ilVerified,
    },
    {
      title: 'Community',
      desc: 'Connect with mentors, peers and communities to collaborate and make an impact together.',
      icon: icCommunity,
      illustration: ilCommunity,
    },
    {
      title: 'Opportunity Matching',
      desc: 'Intelligent matching that connects verified people with the right opportunities in the ecosystem.',
      icon: icMatching,
      illustration: ilMatching,
    },
  ];

  return (
    <section className="section eco2-cards-section">
      <div className="container">
        <div className="eco2-cards-header text-center">
          <div className="section-tag">OUR ECOSYSTEM</div>
          <h2 className="eco2-cards-title">
            Everything You Need in One <span className="highlight-blue">Connected Ecosystem</span>
          </h2>
          <p className="eco2-cards-subtitle">
            Tumbo combines multiple digital solutions into one integrated platform, making it easier to access opportunities, connect with communities and create measurable social impact.
          </p>
        </div>

        <div className="eco2-cards-grid">
          {cards.map((card, i) => (
            <div key={i} className="eco2-card">
              <div className="eco2-card-icon">
                <img src={card.icon} alt="" aria-hidden="true" />
              </div>
              <h3 className="eco2-card-title">{card.title}</h3>
              <p className="eco2-card-desc">{card.desc}</p>
              <div className="eco2-card-bottom">
                <button
                  className="eco2-card-arrow"
                  onClick={() => alert(`Explore ${card.title}`)}
                  aria-label={`Explore ${card.title}`}
                >
                  <ArrowUpRight size={16} />
                </button>
                <img
                  src={card.illustration}
                  alt=""
                  className="eco2-card-illus"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="eco2-banner">
          <img src={ecoBannerGlobe} alt="" aria-hidden="true" className="eco2-banner-globe" />
          <div className="eco2-banner-content">
            <h3 className="eco2-banner-title">One Ecosystem. Unlimited Possibilities.</h3>
            <p className="eco2-banner-desc">
              Everything you need to learn, work, grow, connect and create impact—available through one intelligent digital ecosystem.
            </p>
            <Link to="/#opportunities" className="btn btn-primary">
              Explore the Ecosystem <ArrowRight size={16} />
            </Link>
          </div>
          <img src={ecoBannerMountains} alt="" aria-hidden="true" className="eco2-banner-mountains" />
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: POWERING EVERY STAGE OF YOUR JOURNEY
   ========================================================================== */
const PoweringJourney: React.FC = () => {
  const serviceCards = [
    {
      title: 'Education Services',
      desc: 'Scholarships, bursaries, courses, certifications and learning opportunities.',
      icon: <GraduationCap size={20} strokeWidth={1.75} />,
    },
    {
      title: 'Employment Services',
      desc: 'Verified jobs, internships, apprenticeships and workforce development.',
      icon: <Briefcase size={20} strokeWidth={1.75} />,
    },
    {
      title: 'Business Growth',
      desc: 'Business networking, suppliers, customers and Tumbo Biz solutions.',
      icon: <Network size={20} strokeWidth={1.75} />,
    },
    {
      title: 'AI Assistant',
      desc: 'Smart recommendations, digital guidance and personalised support.',
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
            From education and employment to entrepreneurship and public services, Tumbo provides integrated digital solutions that empower individuals, organisations and communities.
          </p>
        </div>

        <div className="eco-journey-split">
          <div className="eco-journey-visual">
            <img
              src={ecoJourneyStage}
              alt="Tumbo digital community engagement app presented at an EMA event"
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
   SUB-COMPONENT: JOIN THE ECOSYSTEM CTA
   ========================================================================== */
const JoinEcosystem: React.FC = () => {
  const features = [
    { icon: <Search size={18} strokeWidth={2} />, label: 'Verified Digital Identity' },
    { icon: <Target size={18} strokeWidth={2} />, label: 'Smart Opportunity Matching' },
    { icon: <Sparkles size={18} strokeWidth={2} />, label: 'AI-Powered Guidance' },
  ];

  const stats = [
    { icon: <User size={20} strokeWidth={2} />, value: '120K+', label: 'Verified Users' },
    { icon: <Share2 size={20} strokeWidth={2} />, value: '25K+', label: 'Opportunities Shared' },
    { icon: <Home size={20} strokeWidth={2} />, value: '500+', label: 'Strategic Partners' },
    { icon: <Globe size={20} strokeWidth={2} />, value: '250K+', label: 'Community Beneficiaries' },
  ];

  return (
    <section className="section eco-join-section">
      <div className="container">
        <div className="eco-join-card">
          <div className="eco-join-top">
            <div className="eco-join-left">
              <div className="eco-join-badge">JOIN THE ECOSYSTEM</div>
              <h2 className="eco-join-title">Start Your Journey with Tumbo Today</h2>
              <p className="eco-join-desc">
                Become part of South Africa's Digital Inclusion Ecosystem and unlock verified opportunities, trusted partnerships and AI-powered support designed to help you succeed.
              </p>
              <div className="eco-join-features">
                {features.map((f, i) => (
                  <div key={i} className="eco-join-feature">
                    <span className="eco-join-feature-icon">{f.icon}</span>
                    <span className="eco-join-feature-label">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="eco-join-btns">
                <Link to="/#opportunities" className="btn eco-join-btn-primary">
                  Explore Opportunities <ArrowRight size={16} />
                </Link>
                <button className="btn eco-join-btn-outline" onClick={() => alert('Create Your Account')}>
                  Create Your Account
                </button>
              </div>
            </div>
            <div className="eco-join-media">
              <img
                src={ecoJoinPhoto}
                alt="Community members participating in a Tumbo ecosystem session"
                className="eco-join-photo"
              />
            </div>
          </div>

          <div className="eco-join-stats">
            {stats.map((s, i) => (
              <div key={i} className="eco-join-stat">
                <span className="eco-join-stat-icon">{s.icon}</span>
                <div>
                  <div className="eco-join-stat-value">{s.value}</div>
                  <div className="eco-join-stat-label">{s.label}</div>
                </div>
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
      <ConnectedEcosystem />
      <PoweringJourney />
      <JoinEcosystem />
    </>
  );
};

export default Ecosystem;
