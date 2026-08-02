import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Network,
  Landmark,
  Rocket,
  Search,
  Target,
  Sparkles,
  User,
  Share2,
  Home,
  Globe,
  Eye,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { AnimatedStat } from '../components/AnimatedStat';

import ecoHeroPhoto from '../assets/eco-hero-event.png';
import ecoJourneyStage from '../assets/eco-journey-stage.png';
import ecoJoinPhoto from '../assets/eco-join-photo.png';
import ecosystemCitySkyline from '../assets/ecosystem-city-skyline.png';
import ecoBannerMountains from '../assets/eco-src-20.png';
import ecoBannerGlobe from '../assets/eco-src-21.png';

import icTumboApp from '../assets/eco-src-19.png';
import icTumboBiz from '../assets/eco-src-18.png';
import icTumboGov from '../assets/eco-src-17.png';
import icTumboEye from '../assets/eco-src-16.png';
import icTumboYe2 from '../assets/eco-src-03.png';
import icVerified from '../assets/eco-src-04.png';
import icCommunity from '../assets/eco-src-02.png';
import icMatching from '../assets/eco-src-12.png';

import ilTumboApp from '../assets/eco-src-19.png';
import ilTumboBiz from '../assets/eco-src-11.png';
import ilTumboGov from '../assets/eco-src-09.png';
import ilTumboEye from '../assets/eco-src-07.png';
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
        <Reveal className="eco2-hero-left">
          <p className="eco2-hero-brand">Tumbo</p>
          <div className="hero-tag-pill">TUMBO DIGITAL ECOSYSTEM</div>
          <h1 className="eco2-hero-title">
            One Ecosystem. Multiple Solutions.{' '}
            <span className="eco2-title-accent">Unlimited Opportunity.</span>
          </h1>
          <p className="eco2-hero-desc">
            A unified digital ecosystem enabling trusted data collection, digital identity,
            artificial intelligence and community-driven services. Tumbo connects communities,
            businesses, governments and development partners through verified data—built in
            South Africa for African communities.
          </p>
          <div className="hero-btn-group">
            <a href="#eco-products" className="btn btn-primary">
              Explore the Ecosystem <ArrowRight size={16} />
            </a>
            <Link to="/opportunities" className="btn btn-outline">
              View Opportunities <ArrowRight size={16} />
            </Link>
          </div>
          <p className="eco2-coming-soon-note">Product demo video — Coming Soon</p>
        </Reveal>
        <Reveal className="eco2-hero-right" delay={0.1}>
          <img
            src={ecoHeroPhoto}
            alt="Community members connecting at a Tumbo ecosystem event"
            className="eco2-hero-photo"
          />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   SUB-COMPONENT: CONNECTED ECOSYSTEM CARDS
   ========================================================================== */
const ConnectedEcosystem: React.FC = () => {
  const products = [
    {
      title: 'Tumbo Eye',
      desc: 'The single sign-on hub and AI brain of the ecosystem—landing, discovery and progressive activation in one place.',
      points: ['Single sign-on hub / AI brain', 'Landing & discovery layer', 'Progressive activation engine'],
      icon: icTumboEye,
      illustration: ilTumboEye,
    },
    {
      title: 'Tumbo App',
      desc: 'Community data collection with field tools that help citizens register once, verify once and access multiple services.',
      points: ['Community data collection', '10 category forms', 'Field agent tools'],
      icon: icTumboApp,
      illustration: ilTumboApp,
    },
    {
      title: 'Tumbo Biz',
      desc: 'Business engagement infrastructure for CSI, B-BBEE tracking and a community data marketplace.',
      points: ['Business engagement', 'CSI & B-BBEE tracking', 'Community data marketplace'],
      icon: icTumboBiz,
      illustration: ilTumboBiz,
    },
    {
      title: 'Tumbo Gov',
      desc: 'Municipal integration that supports service delivery tracking and policy insight dashboards.',
      points: ['Municipal integration', 'Service delivery tracking', 'Policy insight dashboards'],
      icon: icTumboGov,
      illustration: ilTumboGov,
    },
    {
      title: 'Tumbo Ye²',
      desc: 'An informal marketplace supporting stock pooling, bulk buying and digital storefronts for township commerce.',
      points: ['Informal marketplace', 'Stock pooling & bulk buying', 'Digital storefronts'],
      icon: icTumboYe2,
      illustration: ilTumboYe2,
    },
  ];

  const layers = [
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
    <section id="eco-products" className="section eco2-cards-section">
      <div className="container">
        <Reveal className="eco2-cards-header text-center">
          <div className="section-tag">OUR ECOSYSTEM</div>
          <h2 className="eco2-cards-title">
            Everything You Need in One <span className="highlight-blue">Connected Ecosystem</span>
          </h2>
          <p className="eco2-cards-subtitle">
            Tumbo combines multiple digital solutions into one integrated platform—so communities,
            businesses and government can collaborate using verified data, in their own languages
            and on their own terms.
          </p>
        </Reveal>

        <div className="eco2-cards-grid eco2-cards-grid-products">
          {products.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <article className="eco2-card eco2-card-product">
                <div className="eco2-card-icon">
                  <img src={card.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="eco2-card-title">{card.title}</h3>
                <p className="eco2-card-desc">{card.desc}</p>
                <ul className="eco2-card-points">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="eco2-card-bottom">
                  <Link
                    to="/contact"
                    className="eco2-card-arrow"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                  <img
                    src={card.illustration}
                    alt=""
                    className="eco2-card-illus"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="eco2-layers-heading text-center">
          <h3 className="eco2-layers-title">
            Shared Foundations Across the <span className="highlight-blue">Platform</span>
          </h3>
        </Reveal>

        <div className="eco2-cards-grid eco2-cards-grid-layers">
          {layers.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <article className="eco2-card">
                <div className="eco2-card-icon">
                  <img src={card.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="eco2-card-title">{card.title}</h3>
                <p className="eco2-card-desc">{card.desc}</p>
                <div className="eco2-card-bottom">
                  <Link
                    to="/about"
                    className="eco2-card-arrow"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                  <img
                    src={card.illustration}
                    alt=""
                    className="eco2-card-illus"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="eco2-banner">
            <img src={ecoBannerGlobe} alt="" aria-hidden="true" className="eco2-banner-globe" />
            <div className="eco2-banner-content">
              <h3 className="eco2-banner-title">One Ecosystem. Unlimited Possibilities.</h3>
              <p className="eco2-banner-desc">
                Everything you need to learn, work, grow, connect and create impact—available
                through one intelligent digital ecosystem.
              </p>
              <Link to="/opportunities" className="btn btn-primary">
                Explore Opportunities <ArrowRight size={16} />
              </Link>
            </div>
            <img src={ecoBannerMountains} alt="" aria-hidden="true" className="eco2-banner-mountains" />
          </div>
        </Reveal>
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
      desc: 'Business networking, CSI tracking, suppliers, customers and Tumbo Biz solutions.',
      icon: <Network size={20} strokeWidth={1.75} />,
    },
    {
      title: 'Public Services',
      desc: 'Municipal programmes, service delivery insights and Tumbo Gov collaboration.',
      icon: <Landmark size={20} strokeWidth={1.75} />,
    },
  ];

  return (
    <section className="section eco-journey-section">
      <div className="container">
        <Reveal className="eco-journey-header text-center">
          <div className="section-tag">OUR SERVICES</div>
          <h2 className="eco-journey-title">
            Powering Every Stage of <span className="highlight-blue">Your Journey</span>
          </h2>
          <p className="eco-journey-subtitle">
            From education and employment to entrepreneurship and public services, Tumbo provides
            integrated digital solutions that empower individuals, organisations and communities.
          </p>
        </Reveal>

        <div className="eco-journey-split">
          <Reveal className="eco-journey-visual">
            <img
              src={ecoJourneyStage}
              alt="Tumbo digital community engagement app presented at an EMA event"
              className="eco-journey-devices-img"
            />
          </Reveal>

          <div className="eco-journey-services">
            {serviceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <div className="eco-journey-service-card">
                  <div className="eco-journey-service-icon">{card.icon}</div>
                  <div>
                    <h3 className="eco-journey-service-title">{card.title}</h3>
                    <p className="eco-journey-service-desc">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="eco-journey-cta-banner">
            <div className="eco-journey-cta-icon-wrap">
              <Rocket size={26} strokeWidth={1.75} />
            </div>
            <div className="eco-journey-cta-content">
              <h3 className="eco-journey-cta-title">One Platform. Unlimited Possibilities.</h3>
              <p className="eco-journey-cta-desc">
                Everything you need to learn, grow, connect, and succeed is available in one
                connected ecosystem.
              </p>
              <a href="#eco-products" className="btn btn-primary">
                Explore All Products <ArrowRight size={16} />
              </a>
            </div>
            <div className="eco-journey-cta-visual">
              <img
                src={ecosystemCitySkyline}
                alt="Connected city ecosystem illustration"
                className="eco-journey-city-img"
              />
            </div>
          </div>
        </Reveal>
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
    { icon: <Eye size={18} strokeWidth={2} />, label: 'Tumbo Eye Discovery Layer' },
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
        <Reveal>
          <div className="eco-join-card">
            <div className="eco-join-top">
              <div className="eco-join-left">
                <div className="eco-join-badge">JOIN THE ECOSYSTEM</div>
                <h2 className="eco-join-title">Start Your Journey with Tumbo Today</h2>
                <p className="eco-join-desc">
                  Become part of South Africa&apos;s digital community empowerment platform and unlock
                  verified opportunities, trusted partnerships and AI-powered support designed to
                  help communities succeed.
                </p>
                <div className="eco-join-features">
                  {features.map((f) => (
                    <div key={f.label} className="eco-join-feature">
                      <span className="eco-join-feature-icon">{f.icon}</span>
                      <span className="eco-join-feature-label">{f.label}</span>
                    </div>
                  ))}
                </div>
                <div className="eco-join-btns">
                  <Link to="/opportunities" className="btn eco-join-btn-primary">
                    Explore Opportunities <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn eco-join-btn-outline">
                    Contact Tumbo
                  </Link>
                </div>
                <p className="eco2-coming-soon-note">Account registration &amp; login — Coming Soon</p>
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
              {stats.map((s) => (
                <div key={s.label} className="eco-join-stat">
                  <span className="eco-join-stat-icon">{s.icon}</span>
                  <div>
                    <div className="eco-join-stat-value">
                      <AnimatedStat value={s.value} />
                    </div>
                    <div className="eco-join-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN COMPONENT: ECOSYSTEM PAGE
   ========================================================================== */
export const Ecosystem: React.FC = () => (
  <>
    <EcosystemHero />
    <ConnectedEcosystem />
    <PoweringJourney />
    <JoinEcosystem />
  </>
);

export default Ecosystem;
