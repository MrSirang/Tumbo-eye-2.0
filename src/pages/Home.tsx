import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import heroWoman from '../assets/hero-woman-new.png';
import heroCommunity from '../assets/hero-community.png';
import heroPhone from '../assets/hero-phone-cut.png';
import heroConsent from '../assets/hero-consent-card-cut.png';
import heroCloud from '../assets/hero-cloud-cut.png';
import featuredOppDsv from '../assets/featured-opp-dsv.png';
import oppCardScholarship from '../assets/opp-card-scholarship.png';
import oppCardGrants from '../assets/opp-card-grants.png';
import ssPersonCareer from '../assets/ss-person-career-woman.png';
import ssPersonGraduate from '../assets/ss-person-graduate.png';
import ssPersonLeader from '../assets/ss-person-leader.png';
import ssPersonYellow from '../assets/ss-person-yellow-bg.png';
import ecoBannerMan from '../assets/eco-banner-man.png';
import ecoBannerWoman from '../assets/eco-banner-woman.png';
import successStoryFeatured from '../assets/success-story-featured.png';
import successStoryCta from '../assets/success-story-cta.png';
import partnerCta from '../assets/partner-cta.png';
import partnerMinistry from '../assets/partner-ministry.png';
import partnerWorldBank from '../assets/partner-world-bank.png';
import partnerUnesco from '../assets/partner-unesco.png';
import partnerUndp from '../assets/partner-undp.png';
import partnerGoogle from '../assets/partner-google.png';
import partnerMicrosoft from '../assets/partner-microsoft.png';
import partnerStanford from '../assets/partner-stanford.png';
import partnerUct from '../assets/partner-uct.png';
import partnerMastercard from '../assets/partner-mastercard.png';
import partnerAws from '../assets/partner-aws.png';
import partnerDell from '../assets/partner-dell.png';
import partnerBritishCouncil from '../assets/partner-british-council.png';
import { Reveal } from '../components/Reveal';
import {
  ArrowRight,
  Briefcase,
  Bookmark,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Star,
  Sparkles,
  Award,
  Users,
  Globe,
  Landmark,
  ShieldCheck,
  Eye,
  Store,
  Settings2,
  Trophy,
  HeartHandshake,
  PersonStanding,
  Cog,
  User,
  Play,
  Lock,
  Cloud,
  Smartphone,
  ShoppingCart,
  Wallet,
} from 'lucide-react';

/* ==========================================================================
   SUB-COMPONENT: HERO SECTION
   ========================================================================== */
const HeroSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const audiences = [
    { icon: <User size={28} strokeWidth={1.6} />, line1: 'For', line2: 'Citizens' },
    { icon: <Briefcase size={28} strokeWidth={1.6} />, line1: 'For', line2: 'Businesses' },
    { icon: <Landmark size={28} strokeWidth={1.6} />, line1: 'For', line2: 'Government' },
    { icon: <HeartHandshake size={28} strokeWidth={1.6} />, line1: 'For', line2: 'Partners' },
  ];

  const trustItems = [
    { icon: <ShieldCheck size={26} strokeWidth={1.7} />, line1: 'Verified', line2: '& trusted' },
    { icon: <Lock size={26} strokeWidth={1.7} />, line1: 'Privacy by', line2: 'design' },
    { icon: <Cloud size={26} strokeWidth={1.7} />, line1: 'Hosted in', line2: 'South Africa' },
    { icon: <Smartphone size={26} strokeWidth={1.7} />, line1: 'Works offline.', line2: 'Works for all.' },
  ];

  const products = [
    {
      title: 'Tumbo Eye',
      kicker: 'The hub & AI brain',
      desc: 'Data intelligence and insights that power better decisions for everyone.',
      color: '#2E6BFF',
      icon: <Eye size={22} strokeWidth={2} />,
    },
    {
      title: 'Tumbo App',
      kicker: 'My Community',
      desc: 'Register once. Verify once. Access services, opportunities and information.',
      color: '#E8447C',
      icon: <Users size={22} strokeWidth={2} />,
    },
    {
      title: 'Tumbo Biz',
      kicker: 'Business Engagement',
      desc: 'Verified data for CSI, supplier development and inclusive economic growth.',
      color: '#F5821F',
      icon: <Briefcase size={22} strokeWidth={2} />,
    },
    {
      title: 'Tumbo Gov',
      kicker: 'Government Services',
      desc: 'Real-time community data for planning, service delivery and policy.',
      color: '#2FA84F',
      icon: <Landmark size={22} strokeWidth={2} />,
    },
    {
      title: 'Tumbo Ye2',
      kicker: 'Marketplace',
      desc: 'The informal-business marketplace. Buy. Sell. Grow together.',
      color: '#7B4FE0',
      icon: <ShoppingCart size={22} strokeWidth={2} />,
    },
  ];

  return (
    <section className="th">
      <div className="th-hero">
        <div className="th-photo" aria-hidden="true">
          <img src={heroCommunity} alt="" className="th-photo-bg" />
          <div className="th-photo-fade" />
        </div>

        <div className="th-wrap th-hero-grid">
          <motion.div
            className="th-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="th-title">
              One community.
              <br />
              One data layer.
              <br />
              <span className="th-unlimited">Unlimited impact.</span>
            </h1>
            <p className="th-subtitle">
              Tumbo connects African communities, businesses, government and partners
              through verified data, powerful tools and shared opportunities.
            </p>
            <div className="th-audiences">
              {audiences.map((item) => (
                <div className="th-audience" key={item.line2}>
                  <span className="th-audience-icon">{item.icon}</span>
                  <span>
                    {item.line1}
                    <br />
                    {item.line2}
                  </span>
                </div>
              ))}
            </div>
            <div className="th-actions">
              <Link to="/contact" className="th-btn-primary">
                Join the Movement
              </Link>
              <Link to="/ecosystem" className="th-btn-outline">
                <Play size={12} fill="currentColor" />
                Watch how it works
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="th-visual"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="th-glow" aria-hidden="true" />

            <p className="th-proof">
              <b>Verified data.</b>
              <br />
             <b>Real impact.</b> 
              <br />
              <span>Stronger communities.</span>
            </p>

            <img src={heroPhone} alt="Tumbo app home screen" className="th-phone-lg" />
            <img src={heroConsent} alt="Your data. Your consent. Your power." className="th-consent" />

            <div className="th-stats-block">
              <div className="th-stats-row">
                <div className="th-bubble">
                  <span className="th-bubble-icon" style={{ background: '#2E6BFF' }}>
                    <Users size={16} color="#fff" />
                  </span>
                  <div>
                    <strong>2.4M+</strong>
                    <em>Community Members</em>
                  </div>
                </div>
                <div className="th-bubble">
                  <span className="th-bubble-icon" style={{ background: '#2FA84F' }}>
                    <ShieldCheck size={16} color="#fff" />
                  </span>
                  <div>
                    <strong>1.8M+</strong>
                    <em>Verified Profiles</em>
                  </div>
                </div>
                <div className="th-bubble">
                  <span className="th-bubble-icon" style={{ background: '#F5821F' }}>
                    <Landmark size={16} color="#fff" />
                  </span>
                  <div>
                    <strong>980+</strong>
                    <em>Active Partners</em>
                  </div>
                </div>
              </div>
              <svg className="th-stats-dashes" viewBox="0 0 320 70" fill="none" aria-hidden="true">
                <path d="M52 0 C52 28, 160 20, 160 70" stroke="#9ec0ff" strokeWidth="2" strokeDasharray="4 6" />
                <path d="M160 0 C160 18, 160 40, 160 70" stroke="#9ec0ff" strokeWidth="2" strokeDasharray="4 6" />
                <path d="M268 0 C268 28, 160 20, 160 70" stroke="#9ec0ff" strokeWidth="2" strokeDasharray="4 6" />
              </svg>
              <img src={heroCloud} alt="" className="th-cloud" />
            </div>
          </motion.div>
        </div>

        <div className="th-woman-wrap">
          <img src={heroWoman} alt="Community member smiling" className="th-woman" />
        </div>

        <svg className="th-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,78 C220,20 420,118 720,72 C1020,26 1240,108 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="th-trustbar">
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

      <div className="th-products-band">
        <div className="th-wrap th-products">
          {products.map((product) => (
            <Link to="/ecosystem" className="th-product" key={product.title}>
              <span className="th-product-icon" style={{ backgroundColor: product.color }}>
                {product.icon}
              </span>
              <h3 style={{ color: product.color }}>{product.title}</h3>
              <p className="th-product-kicker">{product.kicker}</p>
              <p className="th-product-desc">{product.desc}</p>
              <span className="th-product-link" style={{ color: product.color }}>
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: FEATURED OPPORTUNITIES
   ========================================================================== */
type FeaturedOppTheme = 'job' | 'scholarship' | 'internship' | 'grant';

type FeaturedOppCard = {
  theme: FeaturedOppTheme;
  badge: string;
  image: string;
  imageAlt: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  funding: string;
  deadline: string;
  cta: string;
};

const FeaturedOpportunities: React.FC = () => {
  const cards: FeaturedOppCard[] = [
    {
      theme: 'job',
      badge: 'Job',
      image: ssPersonCareer,
      imageAlt: 'Digital marketing professional',
      title: 'Digital Marketing Specialist',
      organization: 'Tumbo Partner Network',
      location: 'Cape Town, South Africa',
      type: 'Full-time · Remote',
      funding: 'R18,000 – R25,000 / mo',
      deadline: 'Apply by 30 Sep 2026',
      cta: 'Apply Now',
    },
    {
      theme: 'scholarship',
      badge: 'Scholarship',
      image: oppCardScholarship,
      imageAlt: 'Scholarship funding and graduation',
      title: 'Undergraduate Scholarship Programme',
      organization: 'Global Education Fund',
      location: 'Africa-wide',
      type: 'Undergraduate',
      funding: 'Full tuition + stipend',
      deadline: 'Apply by 15 Oct 2026',
      cta: 'View Details',
    },
    {
      theme: 'internship',
      badge: 'Internship',
      image: featuredOppDsv,
      imageAlt: 'Youth development internship',
      title: 'Youth Development Internship',
      organization: 'Tumbo Community',
      location: 'Johannesburg, South Africa',
      type: '3–6 months · Hybrid',
      funding: 'Stipend provided',
      deadline: 'Apply by 5 Oct 2026',
      cta: 'Apply Now',
    },
    {
      theme: 'grant',
      badge: 'Grant',
      image: oppCardGrants,
      imageAlt: 'Community impact grants',
      title: 'Community Impact Grant',
      organization: 'Tumbo Foundation',
      location: 'Southern Africa',
      type: 'Community projects',
      funding: 'Up to R50,000',
      deadline: 'Apply by 20 Nov 2026',
      cta: 'View Details',
    },
  ];

  const avatars = [ssPersonCareer, ssPersonGraduate, ssPersonLeader, ssPersonYellow];
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth <= 640) setPerPage(1);
      else if (window.innerWidth <= 1024) setPerPage(2);
      else setPerPage(4);
    };
    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, []);

  const pageCount = Math.max(1, Math.ceil(cards.length / perPage));

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const visible = cards.slice(page * perPage, page * perPage + perPage);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section id="opportunities" className="section fo-section">
      <div className="fo-bg-blob fo-bg-blob-tl" aria-hidden="true" />
      <div className="fo-bg-blob fo-bg-blob-br" aria-hidden="true" />
      <div className="fo-bg-dots" aria-hidden="true" />

      <div className="container fo-inner">
        <div className="fo-header">
          <div className="fo-social-proof">
            <div className="fo-avatars">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="" className="fo-avatar" style={{ zIndex: avatars.length - i }} />
              ))}
              <span className="fo-avatar fo-avatar-plus" aria-hidden="true">
                +
              </span>
            </div>
            <p className="fo-social-text">Join thousands who are building a better tomorrow with Tumbo.</p>
          </div>

          <Reveal className="fo-header-center text-center">
            <div className="fo-eyebrow">OPPORTUNITIES FOR A BRIGHTER TOMORROW</div>
            <h2 className="fo-title">
              Featured <span className="fo-title-gradient">Opportunities</span>
            </h2>
            <p className="fo-subtitle">
              Discover handpicked opportunities from trusted organizations. Take the next step towards your goals and
              make a real impact.
            </p>
          </Reveal>

          <p className="fo-handwrite fo-handwrite-tr" aria-hidden="true">
            Real Opportunities
            <br />
            Brighter Futures
          </p>
        </div>

        <div className="fo-carousel">
          <button type="button" className="fo-nav fo-nav-prev" onClick={goPrev} aria-label="Previous opportunities">
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>

          <div className="fo-track" key={`${page}-${perPage}`}>
            {visible.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="fo-card-wrap">
                <article className={`fo-card fo-card-${item.theme}`}>
                  <div className="fo-card-media">
                    <img src={item.image} alt={item.imageAlt} className="fo-card-image" />
                    <button type="button" className="fo-bookmark" aria-label={`Save ${item.title}`}>
                      <Bookmark size={16} strokeWidth={1.8} />
                    </button>
                    <span className="fo-badge">{item.badge}</span>
                  </div>

                  <div className="fo-card-body">
                    <h3 className="fo-card-title">{item.title}</h3>
                    <ul className="fo-card-meta">
                      <li>
                        <Building2 size={15} strokeWidth={1.8} />
                        <span>{item.organization}</span>
                      </li>
                      <li>
                        <MapPin size={15} strokeWidth={1.8} />
                        <span>{item.location}</span>
                      </li>
                      <li>
                        <Briefcase size={15} strokeWidth={1.8} />
                        <span>{item.type}</span>
                      </li>
                      <li>
                        <Wallet size={15} strokeWidth={1.8} />
                        <span>{item.funding}</span>
                      </li>
                      <li>
                        <CalendarDays size={15} strokeWidth={1.8} />
                        <span>{item.deadline}</span>
                      </li>
                    </ul>
                    <Link to="/opportunities" className="fo-card-cta">
                      {item.cta} <ArrowRight size={15} strokeWidth={2.2} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <button type="button" className="fo-nav fo-nav-next" onClick={goNext} aria-label="Next opportunities">
            <ChevronRight size={22} strokeWidth={2.2} />
          </button>
        </div>

        <div className="fo-dots" role="tablist" aria-label="Opportunity slides">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`fo-dot${i === page ? ' is-active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === page}
            />
          ))}
        </div>

        <div className="fo-footer">
          <p className="fo-handwrite fo-handwrite-bl" aria-hidden="true">
            Explore. Apply. Create Impact.
            <svg className="fo-hand-arrow" viewBox="0 0 120 40" fill="none" aria-hidden="true">
              <path
                d="M4 28C28 8 58 4 92 12"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path d="M84 6l12 8-14 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>

          <Link to="/opportunities" className="fo-view-more">
            View More Opportunities <ArrowRight size={18} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: ECOSYSTEM OVERVIEW
   ========================================================================== */
const EcosystemOverview: React.FC = () => {
  const products = [
    {
      title: 'Tumbo Eye',
      desc: 'The hub and AI brain — a single sign-on discovery layer that guides users into the right services.',
      link: 'Explore Eye',
      to: '/ecosystem',
      icon: <Eye size={26} strokeWidth={1.6} />,
      color: '#2E6BFF',
    },
    {
      title: 'Tumbo App',
      desc: 'Register once, verify once. Community data collection with field agent tools for secure access.',
      link: 'Learn More',
      to: '/ecosystem',
      icon: <ShieldCheck size={26} strokeWidth={1.6} />,
      color: '#10B981',
    },
    {
      title: 'Tumbo Biz',
      desc: 'Business engagement with CSI tracking and a data marketplace for verified local insight.',
      link: 'Explore Biz',
      to: '/ecosystem',
      icon: <Settings2 size={26} strokeWidth={1.6} />,
      color: '#F59E0B',
    },
    {
      title: 'Tumbo Gov',
      desc: 'Service delivery tracking and policy dashboards for government-community engagement.',
      link: 'Explore Gov',
      to: '/ecosystem',
      icon: <Landmark size={26} strokeWidth={1.6} />,
      color: '#8B5CF6',
    },
    {
      title: 'Tumbo Ye²',
      desc: 'An informal marketplace for stock pooling, bulk buying and township digital storefronts.',
      link: 'Join Community',
      to: '/ecosystem',
      icon: <Store size={26} strokeWidth={1.6} />,
      color: '#EC4899',
    },
  ];

  return (
    <section id="ecosystem" className="section eco-ov">
      {/* Background decorations */}
      <div className="eco-ov-bg" aria-hidden="true">
        <div className="eco-ov-glow eco-ov-glow-1" />
        <div className="eco-ov-glow eco-ov-glow-2" />
        <svg className="eco-ov-network" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="80" r="3" fill="#2E6BFF" opacity="0.15" />
          <circle cx="340" cy="50" r="2.5" fill="#2E6BFF" opacity="0.12" />
          <circle cx="560" cy="120" r="3" fill="#2E6BFF" opacity="0.15" />
          <circle cx="680" cy="60" r="2" fill="#2E6BFF" opacity="0.1" />
          <circle cx="200" cy="300" r="2.5" fill="#2E6BFF" opacity="0.1" />
          <circle cx="600" cy="340" r="3" fill="#2E6BFF" opacity="0.12" />
          <circle cx="450" cy="200" r="2" fill="#2E6BFF" opacity="0.08" />
          <path d="M120 80 Q230 40 340 50" stroke="#2E6BFF" strokeWidth="0.8" opacity="0.08" />
          <path d="M340 50 Q450 85 560 120" stroke="#2E6BFF" strokeWidth="0.8" opacity="0.08" />
          <path d="M560 120 Q620 90 680 60" stroke="#2E6BFF" strokeWidth="0.8" opacity="0.06" />
          <path d="M200 300 Q400 260 600 340" stroke="#2E6BFF" strokeWidth="0.8" opacity="0.06" />
          <path d="M120 80 Q160 190 200 300" stroke="#2E6BFF" strokeWidth="0.6" opacity="0.05" />
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <Reveal className="eco-ov-header text-center">
          <span className="eco-ov-pill">
            <span className="eco-ov-pill-dot" />
            One Platform. Endless Impact.
          </span>
          <h2 className="eco-ov-title">
            One Ecosystem.<br />
            Multiple Solutions.<br />
            <span className="eco-ov-title-accent">Unlimited Opportunity.</span>
          </h2>
          <p className="eco-ov-subtitle">
            A unified digital ecosystem enabling trusted data collection, digital identity,
            artificial intelligence and community-driven services — built for African communities.
          </p>
        </Reveal>

        {/* What Makes Tumbo Unique */}
        <Reveal className="eco-ov-unique text-center">
          <div className="eco-ov-unique-divider">
            <span className="eco-ov-unique-line" />
            <h3 className="eco-ov-unique-title">What Makes Tumbo Unique</h3>
            <span className="eco-ov-unique-line" />
          </div>
          <p className="eco-ov-unique-desc">
            Tumbo addresses fragmented and unverified community data by letting citizens register
            once, verify once, and securely access multiple services across one trusted platform.
          </p>
        </Reveal>

        {/* Product Cards with connection line */}
        <div className="eco-ov-cards-wrap">
          <div className="eco-ov-connector" aria-hidden="true" />
          <div className="eco-ov-grid">
            {products.map((product, index) => (
              <Reveal key={product.title} delay={index * 0.07}>
                <Link to={product.to} className="eco-ov-card">
                  <div className="eco-ov-card-accent" style={{ background: product.color }} />
                  <div className="eco-ov-card-icon" style={{ background: `${product.color}12`, color: product.color }}>
                    {product.icon}
                  </div>
                  <h3 className="eco-ov-card-name">{product.title}</h3>
                  <p className="eco-ov-card-desc">{product.desc}</p>
                  <span className="eco-ov-card-cta" style={{ color: product.color }}>
                    {product.link} <ArrowRight size={14} />
                  </span>
                  <div className="eco-ov-card-node" style={{ background: product.color }} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Impact Banner */}
        <Reveal>
          <div className="eco-impact-banner">
            <div className="eco-impact-banner-media">
              <img src={ecoBannerMan} alt="Tumbo community event presenter" className="eco-impact-banner-img" />
            </div>
            <div className="eco-impact-banner-content">
              <h3 className="eco-impact-banner-title">
                Empowering Opportunity. Igniting Hope.{' '}
                <span className="eco-ov-title-accent">Inspiring Greatness.</span>
              </h3>
              <div className="eco-impact-banner-actions">
                <Link to="/ecosystem" className="btn btn-primary">
                  Explore the Ecosystem <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  About Tumbo <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="eco-impact-banner-media">
              <img
                src={ecoBannerWoman}
                alt="Tumbo Digital Community Engagement App launch"
                className="eco-impact-banner-img"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: COMMUNITIES
   ========================================================================== */
const EmpoweringCommunities: React.FC = () => {
  const communities = [
    {
      title: 'Push iPASSION',
      desc: 'Helping young people discover careers that match their strengths and passions.',
      icon: <PersonStanding size={24} strokeWidth={1.75} />,
    },
    {
      title: 'Business Showers',
      desc: 'Supporting entrepreneurs through networking, mentorship and business development.',
      icon: <Briefcase size={24} strokeWidth={1.75} />,
    },
    {
      title: 'Tumbo Leadership Academy',
      desc: 'Developing future leaders through mentorship and community engagement.',
      icon: (
        <span className="communities-icon-stack" aria-hidden="true">
          <GraduationCap size={18} strokeWidth={1.75} />
          <Cog size={14} strokeWidth={1.75} className="communities-icon-cog" />
        </span>
      ),
    },
    {
      title: 'Tumbo Sports Tournament',
      desc: 'Bringing communities together through sport while identifying talent.',
      icon: <Trophy size={24} strokeWidth={1.75} />,
    },
    {
      title: 'Protec Sponsorship',
      desc: 'Supporting education and youth development initiatives.',
      icon: <HeartHandshake size={24} strokeWidth={1.75} />,
    },
  ];

  return (
    <section id="communities" className="section communities-section">
      <div className="container">
        <Reveal className="communities-header text-center">
          <div className="section-tag">COMMUNITIES</div>
          <h2 className="communities-title">
            Matching Opportunities with{' '}
            <span className="communities-title-blue">
              Targeted Potential
              <span className="communities-title-underline" aria-hidden="true" />
            </span>
          </h2>
        </Reveal>

        <div className="communities-grid">
          {communities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="communities-card">
                <div className="communities-card-icon">{item.icon}</div>
                <h3 className="communities-card-title">{item.title}</h3>
                <div className="communities-card-divider" aria-hidden="true" />
                <p className="communities-card-desc">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: TESTIMONIALS & IMPACT
   ========================================================================== */
const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'David M.',
      quote:
        'Supporting grassroots sport by providing sponsorship to young athletes and promoting youth participation.',
      role: 'MP Mpumalanga UFC Netball Sponsorship',
      roleIcon: <Trophy size={14} strokeWidth={2} />,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    },
    {
      name: 'Amina K.',
      quote: 'I discovered funding opportunities that helped me launch my small business.',
      role: 'Community Athletics',
      roleIcon: <Award size={14} strokeWidth={2} />,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    },
    {
      name: 'James P.',
      quote:
        'Partnering with annual sporting events that unite communities while identifying and nurturing emerging talent.',
      role: 'School of Excellence (SoE) Social Club',
      roleIcon: <Users size={14} strokeWidth={2} />,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    },
  ];

  const stats = [
    { icon: <User size={18} />, value: '120K+', label: 'Active User' },
    { icon: <Briefcase size={18} />, value: '25K+', label: 'Job Opportunities' },
    { icon: <GraduationCap size={18} />, value: '8k+', label: 'Scholarship' },
    { icon: <Globe size={18} />, value: '50+', label: 'Countries Reached' },
  ];

  return (
    <section id="testimonials" className="section success-stories-section">
      <div className="container">
        <div className="success-stories-header text-center">
          <div className="section-tag">SUCCESS STORIES</div>
          <h2 className="success-stories-title">
            Real People. Real <span className="highlight-blue">Impact.</span>
          </h2>
          <p className="success-stories-subtitle">
            Discover how Tumbo Eye 2.0 has helped students, professionals, entrepreneurs, and communities achieve their goals through life-changing opportunities.
          </p>
        </div>

        <article className="featured-story-layout">
          <div className="featured-story-photo-wrap">
            <img
              src={successStoryFeatured}
              alt="Sarah Johnson presenting at a Tumbo community event"
              className="featured-story-photo"
            />
          </div>

          <div className="featured-story-body">
            <p className="featured-story-name">Sarah Johnson</p>
            <h3 className="featured-story-headline">PCB Power Valves &amp; Nkangala TVET Bursaries</h3>
            <p className="featured-story-text">
              Through strategic partnerships, deserving students received bursary support, creating pathways toward education and long-term employment.
            </p>
            <button type="button" className="btn btn-primary" onClick={() => alert('Read Full Story')}>
              Read Full Story <ArrowRight size={16} />
            </button>
          </div>
        </article>

        <div className="success-reviews-grid">
          {reviews.map((review) => (
            <div key={review.name} className="success-review-card">
              <div className="success-review-top">
                <img src={review.avatar} alt={review.name} className="success-review-avatar" />
                <div className="success-review-user">
                  <h4 className="success-review-name">{review.name}</h4>
                  <div className="success-review-stars">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="success-review-quote">&ldquo;{review.quote}&rdquo;</p>
              <div className="success-review-footer">
                <span className="success-review-footer-icon">{review.roleIcon}</span>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="success-cta-banner">
          <div className="success-cta-copy">
            <h3 className="success-cta-title">Start Your Success Story Today</h3>
            <p className="success-cta-desc">
              Hear inspiring journeys from students, professionals, and entrepreneurs who transformed their futures with Tumbo Eye 2.0.
            </p>
            <div className="success-cta-actions">
              <Link to="/success-stories" className="btn btn-white">
                View Success Stories <ArrowRight size={15} />
              </Link>
              <Link to="/opportunities" className="btn success-cta-outline">
                Explore Opportunities <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="success-cta-media">
            <img
              src={successStoryCta}
              alt="Tumbo community awards and engagement event"
              className="success-cta-img"
            />
          </div>
        </div>

        <div className="success-stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="success-stat-item">
              <span className="success-stat-icon">{stat.icon}</span>
              <p className="success-stat-text">
                <strong>{stat.value}</strong> {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: TRUSTED PARTNERS
   ========================================================================== */
const TrustedPartners: React.FC = () => {
  const partnershipTypes = [
    { icon: <Landmark size={21} />, title: 'Government', desc: 'Working with public institutions to expand access to opportunities.' },
    { icon: <GraduationCap size={21} />, title: 'Universities', desc: 'Partnering with universities to support student success.' },
    { icon: <Globe size={21} />, title: 'NGOs', desc: 'Strengthening communities and creating meaningful impact.' },
    { icon: <Briefcase size={21} />, title: 'Companies', desc: 'Connecting talent with employers and industry leaders.' },
  ];

  const logos = [
    { src: partnerMinistry, alt: 'Ministry of Education South Africa' },
    { src: partnerWorldBank, alt: 'World Bank' },
    { src: partnerUnesco, alt: 'UNESCO' },
    { src: partnerUndp, alt: 'UNDP' },
    { src: partnerGoogle, alt: 'Google' },
    { src: partnerMicrosoft, alt: 'Microsoft' },
    { src: partnerStanford, alt: 'Stanford University' },
    { src: partnerUct, alt: 'University of Cape Town' },
    { src: partnerMastercard, alt: 'Mastercard' },
    { src: partnerAws, alt: 'AWS' },
    { src: partnerDell, alt: 'Dell' },
    { src: partnerBritishCouncil, alt: 'British Council' },
  ];

  const impactAreas = [
    { icon: <Globe size={20} />, title: 'Global Network', desc: 'Connecting partners and communities across the world.' },
    { icon: <Briefcase size={20} />, title: 'Career Opportunities', desc: 'Creating pathways to jobs, internships, and growth.' },
    { icon: <Sparkles size={20} />, title: 'Innovation', desc: 'Supporting ideas that shape a stronger future.' },
    { icon: <Users size={20} />, title: 'Community Growth', desc: 'Building inclusive communities that thrive together.' },
  ];

  return (
    <section id="partners" className="section partners-section">
      <div className="container">
        <header className="partners-heading">
          <div className="section-tag">OUR PARTNERS</div>
          <h2 className="partners-title">
            Trusted by Leading Organizations <span className="highlight-blue">Worldwide</span>
          </h2>
          <p className="partners-intro">
            We collaborate with governments, universities, NGOs, companies, and community organizations to create meaningful opportunities for students, professionals, entrepreneurs, and communities.
          </p>
        </header>

        <div className="partnership-types-grid">
          {partnershipTypes.map((type) => (
            <article className="partnership-type-card" key={type.title}>
              <span className="partnership-type-icon">{type.icon}</span>
              <h3>{type.title}</h3>
              <p>{type.desc}</p>
            </article>
          ))}
        </div>

        <div className="partners-logos-panel" aria-label="Partner organizations">
          {logos.map((logo) => (
            <div className="partner-logo-item" key={logo.alt}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        <div className="partner-impact-grid">
          {impactAreas.map((area) => (
            <article className="partner-impact-card" key={area.title}>
              <span className="partner-impact-icon">{area.icon}</span>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </article>
          ))}
        </div>

        <div className="partner-cta-banner">
          <div className="partner-cta-content">
            <h3 className="partner-cta-title">Become a Partner</h3>
            <p className="partner-cta-desc">
              Join Tumbo Eye 2.0 and help create more opportunities for students, professionals, entrepreneurs, and communities across Africa and beyond.
            </p>
            <div className="partner-cta-buttons">
              <Link to="/partners" className="btn btn-white">
                Become a Partner <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn partner-cta-outline">
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="partner-cta-media">
            <img
              src={partnerCta}
              alt="Tumbo community engagement performance event"
              className="partner-cta-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN COMPONENT: HOME PAGE
   ========================================================================== */
export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedOpportunities />
      <EcosystemOverview />
      <EmpoweringCommunities />
      <Testimonials />
      <TrustedPartners />
    </>
  );
};
export default Home;
