import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroGirl from '../assets/Hero girl image.png';
import platformEndless from '../assets/platform-endless.png';
import circleLogo from '../assets/circle-logo.png';
import communityGrowing from '../assets/community-growing.png';
import successStorySarah from '../assets/success-story-sarah.png';
import partnerHandshake from '../assets/partners-handshake.png';
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
import newsletterIllustration from '../assets/newsletter-illustration.png';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  DollarSign,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  Star,
  Play,
  Sparkles,
  Award,
  Users,
  Rocket,
  Bot,
  Globe,
  Network,
  MapPin,
  Landmark,
  IdCard,
  MessageCircle,
  UserRound,
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
            Your Gateway to <span className="hero-title-blue">Opportunities<span className="hero-title-underline"></span></span>
          </h1>
          <p className="hero-subtitle-text">
            Tumbo Eye 2.0 connects students, job seekers, entrepreneurs, businesses, and communities with jobs, internships, scholarships, grants, events, and valuable resources—all in one powerful ecosystem.
          </p>
          
          <div className="hero-btn-group">
            <Link to="/opportunities" className="btn btn-primary hero-btn-primary">
              Explore Opportunities <ArrowRight size={16} />
            </Link>
            <button className="btn btn-outline hero-btn-outline" onClick={() => {
              document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Ecosystem <Play size={12} fill="currentColor" style={{ marginLeft: '4px' }} />
            </button>
          </div>

          <div className="hero-trust-row">
            <div className="hero-avatar-stack">
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="User Avatar" />
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="User Avatar" />
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="User Avatar" />
              <img className="hero-avatar-img" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="User Avatar" />
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
            {/* Soft concentric background rings */}
            <div className="hero-circle-bg"></div>
            <div className="hero-ring-1"></div>
            <div className="hero-ring-2"></div>

            {/* Orbit container (holds rotating satellite elements) */}
            <div className="orbit-container">
              {/* Yellow Star satellite at top */}
              <div className="satellite-star-wrapper">
                <svg viewBox="0 0 24 24" fill="#eab308" className="satellite-star">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
                </svg>
              </div>
              {/* Yellow Dot satellite at bottom */}
              <div className="satellite-dot-wrapper">
                <div className="satellite-dot"></div>
              </div>
            </div>

            {/* Static decorative elements */}
            {/* Blue Star at bottom-left */}
            <div className="static-star-blue-wrap">
              <svg viewBox="0 0 24 24" fill="#2563eb" className="static-star-blue">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
              </svg>
            </div>
            {/* Blue Dot at middle-right */}
            <div className="static-dot-blue"></div>

            {/* Layered Hero Image */}
            <div className="hero-image-wrapper">
              <div className="hero-outer-oval"></div>
              <div className="hero-middle-circle"></div>
              <div className="hero-accent-circle"></div>
              <img src={heroGirl} alt="Student holding books" className="hero-photo" />
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
                  <div className="card-info-desc">Find your next career opportunity.</div>
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
                  <div className="card-info-desc">Discover scholarships for your education.</div>
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
                  <div className="card-info-desc">Join workshops, networking, and community events.</div>
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
                  <div className="card-info-desc">Gain real-world experience.</div>
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
  const categories = [
    {
      title: 'Jobs',
      desc: 'Find exciting career opportunities with trusted employers across multiple industries.',
      count: '2,450+ Openings',
      linkText: 'View Jobs',
      icon: <Briefcase size={26} strokeWidth={1.75} />,
      theme: 'jobs',
      solid: true,
    },
    {
      title: 'Scholarships',
      desc: 'Discover local and international scholarships to support your educational journey.',
      count: '1,250+ Scholarships',
      linkText: 'View Scholarships',
      icon: <GraduationCap size={26} strokeWidth={1.75} />,
      theme: 'scholarships',
      solid: false,
    },
    {
      title: 'Internships',
      desc: 'Gain practical experience and build your career through internship programs.',
      count: '1,850+ Internships',
      linkText: 'Browse Internships',
      icon: <IdCard size={26} strokeWidth={1.75} />,
      theme: 'internships',
      solid: false,
    },
    {
      title: 'Grants & Funding',
      desc: 'Access funding opportunities to bring your ideas and community projects to life.',
      count: '320+ Grants',
      linkText: 'Explore Grants',
      icon: <Network size={26} strokeWidth={1.75} />,
      theme: 'grants',
      solid: false,
    },
    {
      title: 'Events',
      desc: 'Join workshops, conferences, networking sessions, and community events.',
      count: '980+ Events',
      linkText: 'View Events',
      icon: <CalendarCheck size={26} strokeWidth={1.75} />,
      theme: 'events',
      solid: false,
    },
  ];

  return (
    <section id="opportunities" className="section section-bg featured-opportunities-section">
      <div className="container">
        <div className="featured-opp-header text-center">
          <h2 className="section-title">
            Featured <span className="highlight-blue">Opportunities</span>
          </h2>
          <p className="section-subtitle featured-opp-subtitle">
            Explore jobs, scholarships, internships, grants, and events designed to help you grow your career, education, and future.
          </p>
        </div>

        <div className="opportunity-grid">
          {categories.map((cat) => (
            <div key={cat.theme} className={`opp-card opp-card-${cat.theme}`}>
              <div className="opp-card-icon">{cat.icon}</div>
              <h3 className="opp-card-title">{cat.title}</h3>
              <p className="opp-card-desc">{cat.desc}</p>
              <div className="opp-card-count">
                <UserRound size={15} strokeWidth={2} />
                <span>{cat.count}</span>
              </div>
              <button
                type="button"
                className={`opp-card-btn ${cat.solid ? 'opp-card-btn-solid' : 'opp-card-btn-outline'}`}
                onClick={() => alert(`Navigating to ${cat.title}`)}
              >
                {cat.linkText} <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        <div className="ai-reco-banner">
          <div className="ai-reco-visual" aria-hidden="true">
            <span className="ai-reco-bubble ai-reco-bubble-1">
              <MessageCircle size={16} fill="currentColor" strokeWidth={0} />
            </span>
            <span className="ai-reco-bubble ai-reco-bubble-2">
              <MessageCircle size={12} fill="currentColor" strokeWidth={0} />
            </span>
            <div className="ai-reco-robot">
              <Bot size={36} strokeWidth={1.6} />
            </div>
          </div>

          <div className="ai-reco-content">
            <h3 className="ai-reco-title">Need Personalized Recommendations?</h3>
            <p className="ai-reco-desc">
              Let our AI Assistant recommend the best opportunities based on your profile, interests, and career goals.
            </p>
          </div>

          <div className="ai-reco-action">
            <button
              type="button"
              className="btn btn-primary ai-reco-btn"
              onClick={() => alert('Opening AI Assistant')}
            >
              <Sparkles size={16} /> Ask AI Assistant
            </button>
            <p className="ai-reco-meta">Smart • Fast • Personalized</p>
          </div>
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
      title: 'Education',
      desc: 'Access courses, scholarships, and learning resources tailored to your goals.',
      link: 'Learn More',
      icon: <GraduationCap size={20} strokeWidth={1.75} />,
      theme: 'education',
    },
    {
      title: 'Careers',
      desc: 'Discover jobs, internships, and career tools to accelerate your growth.',
      link: 'View Careers',
      icon: <Briefcase size={20} strokeWidth={1.75} />,
      theme: 'careers',
    },
    {
      title: 'Entrepreneurship',
      desc: 'Build your business with funding, mentorship, and startup resources.',
      link: 'Explore Business',
      icon: <Rocket size={20} strokeWidth={1.75} />,
      theme: 'entrepreneurship',
    },
    {
      title: 'Community',
      desc: 'Connect with peers, mentors, and support groups in your field.',
      link: 'Join Community',
      icon: <Users size={20} strokeWidth={1.75} />,
      theme: 'community',
    },
    {
      title: 'AI Assistant',
      desc: 'Get personalized guidance and recommendations powered by AI.',
      link: 'Chat with AI',
      icon: <Bot size={20} strokeWidth={1.75} />,
      theme: 'ai',
    },
  ];

  return (
    <section id="ecosystem" className="section eco-overview-section">
      <div className="container">
        <div className="eco-overview-header text-center">
          <h2 className="eco-overview-title">
            Everything You Need in One <span className="eco-overview-title-blue">Ecosystem</span>
          </h2>
          <p className="eco-overview-subtitle">
            Tumbo Eye 2.0 connects education, careers, funding, business, and community support into one powerful platform—helping individuals discover opportunities, build skills, and achieve long-term success.
          </p>
        </div>

        <div className="eco-overview-grid">
          {features.map((feature, i) => (
            <div key={i} className={`eco-overview-card eco-overview-card-${feature.theme}`}>
              <div className="eco-overview-card-icon">{feature.icon}</div>
              <h3 className="eco-overview-card-title">{feature.title}</h3>
              <p className="eco-overview-card-desc">{feature.desc}</p>
              <button
                className="eco-overview-card-link"
                onClick={() => alert(feature.link)}
              >
                {feature.link} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="eco-overview-banner">
          <div className="eco-overview-banner-visual">
            <img
              src={platformEndless}
              alt="Tumbo Eye platform dashboard illustration"
              className="eco-overview-banner-img"
            />
          </div>

          <div className="eco-overview-banner-content">
            <h3 className="eco-overview-banner-title">One Platform. Endless Opportunities.</h3>
            <p className="eco-overview-banner-desc">
              Whether you&apos;re a student, job seeker, entrepreneur, or community member, Tumbo Eye 2.0 provides the tools, resources, and connections you need to succeed.
            </p>
            <div className="eco-overview-banner-actions">
              <Link to="/ecosystem" className="btn btn-primary">
                Explore the Ecosystem <ArrowRight size={16} />
              </Link>
              <button className="btn btn-secondary" onClick={() => alert('Get Started')}>
                Get Started
              </button>
            </div>
          </div>

          <div className="eco-overview-banner-orbit" aria-hidden="true">
            <img src={circleLogo} alt="" className="eco-overview-orbit-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: EMPOWERING COMMUNITIES
   ========================================================================== */
const EmpoweringCommunities: React.FC = () => {
  const stats = [
    {
      title: 'Active Users',
      stat: '120K+',
      desc: 'Thousands of students, professionals, and community members actively use Tumbo Eye 2.0.',
      icon: <Users size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Job Opportunities',
      stat: '25K+',
      desc: 'Verified job opportunities from trusted employers and partners.',
      icon: <Briefcase size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Scholarships',
      stat: '8K+',
      desc: 'Scholarships available from local and international institutions.',
      icon: <GraduationCap size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Partner Organizations',
      stat: '500+',
      desc: 'Government agencies, universities, NGOs, and companies working together.',
      icon: <Network size={22} strokeWidth={1.75} />,
    },
    {
      title: 'Countries Reached',
      stat: '50+',
      desc: 'Supporting users and communities across multiple countries.',
      icon: <Globe size={22} strokeWidth={1.75} />,
    },
  ];

  return (
    <section className="section empower-section section-blue-bg">
      <div className="container">
        <div className="empower-header text-center">
          <h2 className="empower-title">
            Empowering Communities Through <span className="highlight-blue">Opportunities</span>
          </h2>
          <p className="empower-subtitle">
            Our growing ecosystem connects people, organizations, and institutions to create meaningful opportunities and lasting impact.
          </p>
        </div>

        <div className="empower-stats-grid">
          {stats.map((item, i) => (
            <div key={i} className="empower-stat-card">
              <div className="empower-stat-icon">{item.icon}</div>
              <h3 className="empower-stat-title">{item.title}</h3>
              <p className="empower-stat-number">{item.stat}</p>
              <p className="empower-stat-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="empower-community-banner">
          <div className="empower-community-visual">
            <img
              src={communityGrowing}
              alt="Diverse community members connected through Tumbo Eye"
              className="empower-community-img"
            />
          </div>
          <div className="empower-community-content">
            <h3 className="empower-community-title">Join Our Growing Community</h3>
            <p className="empower-community-desc">
              Become part of a platform that empowers learning, careers, innovation, and community development.
            </p>
            <button className="btn btn-primary" onClick={() => alert('Get Started Today')}>
              Get Started Today <ArrowRight size={16} />
            </button>
          </div>
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
      quote: 'The AI Assistant recommended the perfect internship for me. The application process was simple and fast.',
      role: 'Computer Science Student',
      roleIcon: <GraduationCap size={14} strokeWidth={2} />,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    },
    {
      name: 'Amina K.',
      quote: 'I discovered funding opportunities that helped me launch my small business.',
      role: 'Entrepreneur',
      roleIcon: <Rocket size={14} strokeWidth={2} />,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    },
    {
      name: 'James P.',
      quote: 'The platform connected me with employers and I found a full-time job within weeks.',
      role: 'Job Seeker',
      roleIcon: <Briefcase size={14} strokeWidth={2} />,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    },
  ];

  return (
    <section id="testimonials" className="section success-stories-section section-blue-bg">
      <div className="container">
        <div className="success-stories-header text-center">
          <h2 className="success-stories-title">
            Real People. Real <span className="highlight-blue">Success.</span>
          </h2>
          <p className="success-stories-subtitle">
            Discover how Tumbo Eye 2.0 has helped students, professionals, entrepreneurs, and communities achieve their goals through life-changing opportunities.
          </p>
        </div>

        <div className="featured-story-layout">
          <div className="featured-story-photo-wrap">
            <img
              src={successStorySarah}
              alt="Sarah Johnson, scholarship recipient and software engineer"
              className="featured-story-photo"
            />
          </div>

          <div className="featured-story-body">
            <p className="featured-story-name">Sarah Johnson</p>
            <h3 className="featured-story-headline">From Student to Software Engineer</h3>
            <p className="featured-story-text">
              Sarah used Tumbo Eye 2.0 to discover a fully funded scholarship and later secured an internship that led to a full-time software engineering role.
            </p>
            <div className="featured-story-meta">
              <span className="featured-story-meta-item">
                <MapPin size={14} />
                South Africa
              </span>
              <span className="featured-story-meta-item">
                <GraduationCap size={14} />
                Scholarship Recipient
              </span>
              <span className="featured-story-meta-item">
                <Briefcase size={14} />
                Software Engineer
              </span>
            </div>
            <button className="btn btn-primary" onClick={() => alert('Read Full Story')}>
              Read Full Story <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="success-reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="success-review-card">
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
          <img className="partner-cta-image" src={partnerHandshake} alt="" aria-hidden="true" />
          <div className="partner-cta-content">
            <h3 className="partner-cta-title">Become a Partner</h3>
            <p className="partner-cta-desc">
              Join Tumbo Eye 2.0 and help create more opportunities for students, professionals, entrepreneurs, and communities across Africa and beyond.
            </p>
            <div className="partner-cta-buttons">
              <Link to="/partners" className="btn btn-white">
                Become a Partner <ArrowRight size={15} />
              </Link>
              <button className="btn btn-white-outline" onClick={() => alert('Contact Us')}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SUB-COMPONENT: ARTICLES AND NEWSLETTER
   ========================================================================== */
const LatestNews: React.FC = () => {
  const articles = [
    {
      icon: <GraduationCap size={22} />,
      title: 'New scholarship program 2026',
      desc: 'Applications are now open for international students pursuing higher education.',
    },
    {
      icon: <Briefcase size={22} />,
      title: 'Career Fair 2026',
      desc: 'Meet top employers, attend workshops, and discover exciting career opportunities.',
    },
    {
      icon: <Sparkles size={22} />,
      title: 'AI career assistant launch',
      desc: 'Get personalized recommendations and career guidance powered by AI.',
    },
    {
      icon: <Users size={22} />,
      title: 'Community development grant',
      desc: 'Funding opportunities are now available for community projects.',
    }
  ];

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section id="resources" className="section home-updates-section">
      <div className="container">
        <div className="updates-heading">
          <h2 className="updates-title">Stay Updated with the Latest <span className="highlight-blue">Opportunities</span></h2>
          <p className="updates-subtitle">
            Explore the latest news, scholarships, jobs, events, articles, and platform updates to stay informed and never miss an opportunity.
          </p>
        </div>

        <div className="updates-grid">
          {articles.map((article) => (
            <article className="update-card" key={article.title}>
              <span className="update-card-icon">{article.icon}</span>
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
              <button className="update-card-link" onClick={() => alert(`Reading: ${article.title}`)}>
                Read More <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>

        <div className="newsletter-box">
          <div className="newsletter-illustration-wrap">
            <img src={newsletterIllustration} alt="Newsletter and opportunity updates" className="newsletter-illustration" />
          </div>
          <div className="newsletter-content">
            <h3 className="newsletter-title">Never miss an opportunity</h3>
            <p className="newsletter-desc">Subscribe to receive the latest jobs, scholarships, grants, events, and platform updates directly in your inbox.</p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary newsletter-submit">
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="newsletter-success">
                <CheckCircle2 size={18} />
                <span>Thank you! You have successfully subscribed to alerts.</span>
              </div>
            )}
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
      <LatestNews />
    </>
  );
};
export default Home;
