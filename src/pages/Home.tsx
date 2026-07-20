import React from 'react';
import { Link } from 'react-router-dom';
import heroStudent from '../assets/hero-student.png';
import featuredOppDsv from '../assets/featured-opp-dsv.png';
import featuredOppMrd from '../assets/featured-opp-mrd.png';
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
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  DollarSign,
  Calendar,
  Star,
  Sparkles,
  Award,
  Users,
  Globe,
  Landmark,
  ShieldCheck,
  Cpu,
  Store,
  Settings2,
  Trophy,
  HeartHandshake,
  PersonStanding,
  Cog,
  User,
} from 'lucide-react';

/* ==========================================================================
   SUB-COMPONENT: HERO SECTION
   ========================================================================== */
const HeroSection: React.FC = () => {
  return (
    <section className="section section-blue-bg hero-outer-section">
      <div className="container hero-grid">
        {/* Left Content Column */}
        <div className="hero-left-col">
          <div className="hero-tag-pill">
            EMPOWERING PEOPLE. CONNECTING OPPORTUNITIES.
          </div>
          <h1 className="hero-title">
          Matching
            <span className="hero-title-blue"> Opportunities with Targeted </span>
            <span className="hero-title-blue hero-title-potential">
              Potential
              <span className="hero-title-underline"></span>
            </span>
          </h1>
          <p className="hero-subtitle-text">
            Tumbo is South Africa&apos;s Digital Inclusion Ecosystem, intelligently connecting verified individuals, businesses, communities and government institutions with opportunities that create measurable impact. Whether you&apos;re searching for employment, funding, skills development, business opportunities or community programmes, Tumbo ensures opportunities reach the right people at the right time.
          </p>
          
          <div className="hero-btn-group">
            <Link to="/opportunities" className="btn btn-primary hero-btn-primary">
              Explore Opportunities <ArrowRight size={16} />
            </Link>
            <button
              className="btn btn-outline hero-btn-outline"
              onClick={() => {
                document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Ecosystem <ArrowRight size={16} />
            </button>
          </div>

          <div className="hero-trust-row">
            <div className="hero-avatar-stack">
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
              <div className="hero-avatar-plus">+15K</div>
            </div>
            <div className="hero-trust-text">
              Trusted by thousands of students, professionals, and partners worldwide.
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-right-col">
          <div className="hero-visual-wrapper">
            {/* Soft halo circle behind the portrait */}
            <div className="hero-circle-bg"></div>

            {/* Elliptical orbit ring */}
            <div className="hero-orbit-ring"></div>

            {/* Dots travelling along the orbit */}
            <div className="orbit-dot orbit-dot-blue"></div>
            <div className="orbit-dot orbit-dot-yellow"></div>

            {/* Static decorative sparkles */}
            <div className="hero-star hero-star-yellow">
              <svg viewBox="0 0 24 24" fill="#facc15">
                <path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" />
              </svg>
            </div>
            <div className="hero-star hero-star-blue">
              <svg viewBox="0 0 24 24" fill="#2563eb">
                <path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" />
              </svg>
            </div>

            {/* Circle with portrait breaking out of the top */}
            <div className="hero-image-wrapper">
              <div className="hero-outer-oval"></div>
              <div className="hero-middle-circle"></div>
              <img src={heroStudent} alt="Student holding books" className="hero-photo" />
            </div>

            {/* Floating Info Cards */}
            {/* 1. Jobs (Top-Left) */}
            <div className="hero-card-position jobs-pos">
              <div className="hero-floating-card card-stagger-1">
                <div className="card-icon-wrap" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                  <Briefcase size={16} />
                </div>
                <div className="card-info-content">
                  <div className="card-info-title">Jobs</div>
                  <div className="card-info-desc">Get your next career opportunity.</div>
                </div>
                <div className="card-info-arrow">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            {/* 2. Grants & Funding (Top-Right) */}
            <div className="hero-card-position grants-pos">
              <div className="hero-floating-card card-stagger-2">
                <div className="card-icon-wrap" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                  <DollarSign size={16} />
                </div>
                <div className="card-info-content">
                  <div className="card-info-title">Grants & Funding</div>
                  <div className="card-info-desc">Support your ideas and projects.</div>
                </div>
                <div className="card-info-arrow">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            {/* 3. Scholarships (Middle-Left) */}
            <div className="hero-card-position scholarships-pos">
              <div className="hero-floating-card card-stagger-3">
                <div className="card-icon-wrap" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                  <GraduationCap size={16} />
                </div>
                <div className="card-info-content">
                  <div className="card-info-title">Scholarships</div>
                  <div className="card-info-desc">Unlock your future with education.</div>
                </div>
                <div className="card-info-arrow">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            {/* 4. Events (Bottom-Right) */}
            <div className="hero-card-position events-pos">
              <div className="hero-floating-card card-stagger-4">
                <div className="card-icon-wrap" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                  <Calendar size={16} />
                </div>
                <div className="card-info-content">
                  <div className="card-info-title">Events</div>
                  <div className="card-info-desc">Join conferences, networking and mentorship events.</div>
                </div>
                <div className="card-info-arrow">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

            {/* 5. Internships (Lower-Left) */}
            <div className="hero-card-position internships-pos">
              <div className="hero-floating-card card-stagger-5">
                <div className="card-icon-wrap" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                  <Award size={16} />
                </div>
                <div className="card-info-content">
                  <div className="card-info-title">Internships</div>
                  <div className="card-info-desc">Gain valuable experience.</div>
                </div>
                <div className="card-info-arrow">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: STATS COUNTER ROW
   ========================================================================== */
const StatsRow: React.FC = () => {
  const stats = [
    {
      num: '120K+',
      label: 'Active User',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      num: '25K+',
      label: 'Job Opportunities',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      num: '8k+',
      label: 'Scholarship',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      num: '500+',
      label: 'Partner Institution',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      num: '50+',
      label: 'Countries Reached',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="stats-pill-wrapper">
      <div className="container stats-pill-container">
        <div className="stats-pill-card">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stats-pill-item">
                <div className="stats-pill-icon">{stat.icon}</div>
                <div className="stats-pill-text">
                  <span className="stats-pill-num">{stat.num}</span>
                  <span className="stats-pill-label">{stat.label}</span>
                </div>
              </div>
              {i < stats.length - 1 && <div className="stats-pill-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   SUB-COMPONENT: FEATURED OPPORTUNITIES
   ========================================================================== */
const FeaturedOpportunities: React.FC = () => {
  const listings = [
    {
      image: featuredOppDsv,
      imageAlt: 'Tumbo community engagement event outdoors',
      title: 'DSV Recruitment Drive',
      location: 'South Africa',
      category: 'Employment',
      desc: 'DSV is recruiting for multiple positions across South Africa, including drivers, security guards, general workers, cleaners, data capturers and administration clerks.',
    },
    {
      image: featuredOppMrd,
      imageAlt: 'Community workshop and recruitment session',
      title: 'Mr D Driver Recruitment',
      location: 'South Africa',
      category: 'Driver Opportunities',
      desc: 'Mr D is recruiting vehicle and motorcycle delivery drivers in Middelburg. Applicants require a reliable vehicle or motorcycle, valid documentation and the relevant licence.',
    },
  ];

  return (
    <section id="opportunities" className="section featured-opportunities-section">
      <div className="container">
        <div className="featured-opp-header text-center">
          <div className="section-tag">DISCOVER OPPORTUNITIES</div>
          <h2 className="section-title">
            Featured <span className="highlight-blue">Opportunities</span>
          </h2>
          <p className="section-subtitle featured-opp-subtitle">
            Every opportunity published through Tumbo is designed to reach verified individuals based on location, skills, qualifications and community data. Rather than relying on mass applications, Tumbo intelligently connects opportunities with people who meet the required criteria—creating better outcomes for both applicants and organisations.
          </p>
        </div>

        <div className="featured-listing-grid">
          {listings.map((item) => (
            <article key={item.title} className="featured-listing-card">
              <div className="featured-listing-image-wrap">
                <img src={item.image} alt={item.imageAlt} className="featured-listing-image" />
              </div>
              <div className="featured-listing-body">
                <h3 className="featured-listing-title">{item.title}</h3>
                <p className="featured-listing-meta">
                  <strong>Location :</strong> {item.location}
                  <span className="featured-listing-meta-sep">|</span>
                  <strong>Category :</strong> {item.category}
                </p>
                <p className="featured-listing-desc">{item.desc}</p>
                <button
                  type="button"
                  className="btn btn-primary featured-listing-btn"
                  onClick={() => alert(`Apply: ${item.title}`)}
                >
                  Apply Now <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: ECOSYSTEM OVERVIEW
   ========================================================================== */
const EcosystemOverview: React.FC = () => {
  const features = [
    {
      title: 'Tumbo App',
      desc: 'The community-facing platform where individuals register, verify their identity and gain access to employment, training, funding, bursaries and community programmes.',
      link: 'Learn More',
      icon: <ShieldCheck size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Tumbo Biz',
      desc: 'Helping businesses discover customers, suppliers, community partners and verified local talent while measuring social investment and impact.',
      link: 'Explore Biz',
      icon: <Settings2 size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Tumbo Gov',
      desc: 'Helping municipalities and government departments engage communities, verify beneficiaries and improve service delivery.',
      link: 'Explore Gov',
      icon: <Landmark size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Tumbo AI',
      desc: 'An intelligent assistant providing guidance, information and support across the ecosystem.',
      link: 'Chat with AI',
      icon: <Cpu size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Tumbo Ye2',
      desc: 'A community participation platform supporting township commerce and trusted community engagement.',
      link: 'Join Community',
      icon: <Store size={22} strokeWidth={1.75} />,
    },
  ];

  return (
    <section id="ecosystem" className="section eco-overview-section">
      <div className="container">
        <div className="eco-overview-header text-center">
          <div className="section-tag">OUR ECOSYSTEM</div>
          <h2 className="eco-overview-title">
            One Ecosystem. Multiple Solutions.{' '}
            <span className="eco-overview-title-blue">Unlimited Opportunity.</span>
          </h2>
          <p className="eco-overview-subtitle">
            To digitally connect every community with opportunities that improve livelihoods while enabling businesses and government to make informed, data-driven decisions.
          </p>
          <h3 className="eco-overview-unique-title">What Makes Tumbo Unique</h3>
          <p className="eco-overview-unique-desc">
            Unlike traditional recruitment or business platforms, Tumbo combines verified identity, community intelligence and digital services into one integrated ecosystem.
          </p>
        </div>

        <div className="eco-overview-grid">
          {features.map((feature) => (
            <div key={feature.title} className="eco-overview-card">
              <div className="eco-overview-card-icon">{feature.icon}</div>
              <h3 className="eco-overview-card-title">{feature.title}</h3>
              <p className="eco-overview-card-desc">{feature.desc}</p>
              <button
                type="button"
                className="eco-overview-card-link"
                onClick={() => alert(feature.link)}
              >
                {feature.link} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="eco-impact-banner">
          <div className="eco-impact-banner-media">
            <img src={ecoBannerMan} alt="Tumbo community event presenter" className="eco-impact-banner-img" />
          </div>
          <div className="eco-impact-banner-content">
            <h3 className="eco-impact-banner-title">
              Empowering Opportunity. Igniting Hope.{' '}
              <span className="eco-overview-title-blue">Inspiring Greatness.</span>
            </h3>
            <div className="eco-impact-banner-actions">
              <Link to="/ecosystem" className="btn btn-primary">
                Explore the Ecosystem <ArrowRight size={16} />
              </Link>
              <button type="button" className="btn btn-outline" onClick={() => alert('Get Started')}>
                Get Started <ArrowRight size={16} />
              </button>
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
        <div className="communities-header text-center">
          <div className="section-tag">COMMUNITIES</div>
          <h2 className="communities-title">
            Matching Opportunities with{' '}
            <span className="communities-title-blue">
              Targeted Potential
              <span className="communities-title-underline" aria-hidden="true" />
            </span>
          </h2>
        </div>

        <div className="communities-grid">
          {communities.map((item) => (
            <article key={item.title} className="communities-card">
              <div className="communities-card-icon">{item.icon}</div>
              <h3 className="communities-card-title">{item.title}</h3>
              <div className="communities-card-divider" aria-hidden="true" />
              <p className="communities-card-desc">{item.desc}</p>
            </article>
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
              <button type="button" className="btn btn-white" onClick={() => alert('Join Now')}>
                Join Now <ArrowRight size={15} />
              </button>
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
              <button className="btn partner-cta-outline" onClick={() => alert('Contact Us')}>
                Contact Us <ArrowRight size={15} />
              </button>
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
      <StatsRow />
      <FeaturedOpportunities />
      <EcosystemOverview />
      <EmpoweringCommunities />
      <Testimonials />
      <TrustedPartners />
    </>
  );
};
export default Home;
