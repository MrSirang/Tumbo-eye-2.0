import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Building2,
  User,
  UserRound,
  Search,
  MapPin,
  Calendar,
  Clock,
  Shield,
  DollarSign,
  Laptop,
  Globe,
  Home,
  Bookmark,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Handshake,
  FolderCheck,
  ShieldCheck,
  IdCard,
  Award,
} from 'lucide-react';

import opportunitiesHero from '../assets/opportunities-hero.png';
import opportunitiesDevices from '../assets/opportunities-devices.png';
import opportunitiesCta from '../assets/opportunities-cta-illustration.png';
import opportunitiesRobot from '../assets/opportunities-ai-robot.png';
import logoGoogle from '../assets/partner-google.png';
import logoMicrosoft from '../assets/opp-logo-microsoft.png';
import logoUct from '../assets/opp-logo-uct.png';
import logoUndp from '../assets/opp-logo-undp.png';
import logoUnesco from '../assets/opp-logo-unesco.png';
import logoWorldBank from '../assets/partner-world-bank.png';

type Category = 'Jobs' | 'Scholarships' | 'Internships' | 'Grants' | 'Events';
type SortKey = 'Latest' | 'Most Popular' | 'Shortlist' | 'Recommended';

/* ==========================================================================
   HERO
   ========================================================================== */
const OpportunitiesHero: React.FC = () => (
  <section className="section section-blue-bg opp-page-hero">
    <div className="container opp-page-hero-grid">
      <div className="opp-page-hero-content">
        <div className="hero-tag-pill">DISCOVER OPPORTUNITIES</div>
        <h1 className="opp-page-hero-title">
          Your Gateway to Jobs, Scholarships &{' '}
          <span className="highlight-blue">Career Growth</span>
        </h1>
        <p className="opp-page-hero-desc">
          Browse thousands of verified jobs, internships, scholarships, grants, and events from trusted organizations. Find the right opportunity that matches your skills, interests, and career goals—all in one platform.
        </p>
        <div className="hero-btn-group">
          <a href="#featured" className="btn btn-primary">
            Explore Opportunities <ArrowRight size={16} />
          </a>
          <button className="btn btn-outline" onClick={() => alert('Create Free Account')}>
            <UserRound size={15} /> Create Free Account
          </button>
        </div>
      </div>
      <div className="opp-page-hero-visual">
        <img
          src={opportunitiesHero}
          alt="Students discovering opportunities on Tumbo Eye 2.0"
          className="opp-page-hero-img"
        />
      </div>
    </div>
  </section>
);

/* ==========================================================================
   STATS PILL
   ========================================================================== */
const OpportunitiesStats: React.FC = () => {
  const stats = [
    { icon: <User size={18} />, value: '120K+', label: 'Active User' },
    { icon: <Briefcase size={18} />, value: '25K+', label: 'Job Opportunities' },
    { icon: <GraduationCap size={18} />, value: '8K+', label: 'Scholarship' },
    { icon: <Building2 size={18} />, value: '500+', label: 'Partner Institution' },
  ];

  return (
    <div className="opp-page-stats-wrap">
      <div className="container">
        <div className="opp-page-stats-pill">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="opp-page-stat-item">
                <span className="opp-page-stat-icon">{stat.icon}</span>
                <div>
                  <p className="opp-page-stat-value">{stat.value}</p>
                  <p className="opp-page-stat-label">{stat.label}</p>
                </div>
              </div>
              {i < stats.length - 1 && <span className="opp-page-stat-divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   FIND / SEARCH
   ========================================================================== */
const FindOpportunities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Jobs');
  const [sortBy, setSortBy] = useState<SortKey>('Latest');
  const [query, setQuery] = useState('');

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'Jobs', icon: <Briefcase size={16} /> },
    { name: 'Scholarships', icon: <GraduationCap size={16} /> },
    { name: 'Internships', icon: <IdCard size={16} /> },
    { name: 'Grants', icon: <Award size={16} /> },
    { name: 'Events', icon: <Calendar size={16} /> },
  ];

  const filters = [
    { icon: <MapPin size={15} />, label: 'All locations' },
    { icon: <Building2 size={15} />, label: 'All Organizations' },
    { icon: <Laptop size={15} />, label: 'All Options' },
    { icon: <Calendar size={15} />, label: 'Any Time' },
    { icon: <UserRound size={15} />, label: 'All Levels' },
  ];

  const sorts: SortKey[] = ['Latest', 'Most Popular', 'Shortlist', 'Recommended'];

  return (
    <section id="search" className="section opp-find-section">
      <div className="container">
        <div className="opp-find-intro">
          <div className="opp-find-copy">
            <div className="hero-tag-pill">FIND OPPORTUNITIES</div>
            <h2 className="opp-page-section-title">
              Search Opportunities That <span className="highlight-blue">Match Your Goals</span>
            </h2>
            <p className="opp-find-desc">
              Use powerful search and smart filters to quickly discover jobs, internships, scholarships, grants, and events that fit your interests and career aspirations.
            </p>
          </div>
          <div className="opp-find-visual">
            <img
              src={opportunitiesDevices}
              alt="Tumbo Eye opportunities dashboard on laptop and phone"
              className="opp-find-devices-img"
            />
          </div>
        </div>

        <div className="opp-search-panel">
          <form
            className="opp-search-bar"
            onSubmit={(e) => {
              e.preventDefault();
              alert(query ? `Searching for: ${query}` : 'Searching all opportunities');
            }}
          >
            <Search size={18} className="opp-search-icon" />
            <input
              type="search"
              className="opp-search-input"
              placeholder="Search Opportunities, Companies, Universities, or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary opp-search-btn">
              Search
            </button>
          </form>

          <div className="opp-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                className={`opp-category-tab ${activeCategory === cat.name ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          <div className="opp-filters-box">
            <div className="opp-filters-row">
              {filters.map((filter) => (
                <button key={filter.label} type="button" className="opp-filter-select">
                  {filter.icon}
                  <span>{filter.label}</span>
                  <ChevronDown size={14} />
                </button>
              ))}
            </div>
            <button type="button" className="opp-more-filters" onClick={() => alert('More Filters')}>
              <SlidersHorizontal size={14} /> More Filters
            </button>
          </div>
        </div>

        <div className="opp-results-bar">
          <p className="opp-results-count">
            <ShieldCheck size={16} /> Showing 1,245 verified opportunities
          </p>
          <div className="opp-sort-row">
            <span className="opp-sort-label">Sort By:</span>
            {sorts.map((sort) => (
              <button
                key={sort}
                type="button"
                className={`opp-sort-btn ${sortBy === sort ? 'is-active' : ''}`}
                onClick={() => setSortBy(sort)}
              >
                {sort}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   FEATURED OPPORTUNITIES
   ========================================================================== */
const FeaturedListings: React.FC = () => {
  const listings = [
    {
      logo: logoGoogle,
      logoAlt: 'Google',
      tag: 'JOB',
      tagTone: 'job',
      title: 'Software Engineer',
      org: 'Google',
      details: [
        { icon: <MapPin size={14} />, text: 'Cape Town, South Africa' },
        { icon: <Briefcase size={14} />, text: 'Full-time' },
        { icon: <Calendar size={14} />, text: 'Apply Before: Aug 30, 2025' },
      ],
      cta: 'Apply Now',
      solid: true,
    },
    {
      logo: logoUct,
      logoAlt: 'University of Cape Town',
      tag: 'SCHOLARSHIP',
      tagTone: 'scholarship',
      title: "Master's Scholarship",
      org: 'University of Cape Town',
      details: [
        { icon: <Shield size={14} />, text: 'Fully Funded' },
        { icon: <Calendar size={14} />, text: 'Intake: 2025' },
      ],
      cta: 'View Details',
      solid: false,
    },
    {
      logo: logoUndp,
      logoAlt: 'UNDP',
      tag: 'GRANT',
      tagTone: 'grant',
      title: 'Startup Innovation Grant',
      org: 'UNDP',
      details: [
        { icon: <DollarSign size={14} />, text: 'Funding: $10,000' },
        { icon: <Calendar size={14} />, text: 'Deadline: Sep 15, 2025' },
      ],
      cta: 'Apply Now',
      solid: true,
    },
    {
      logo: logoMicrosoft,
      logoAlt: 'Microsoft',
      tag: 'INTERNSHIP',
      tagTone: 'internship',
      title: 'UI/UX Design Internship',
      org: 'Microsoft',
      details: [
        { icon: <MapPin size={14} />, text: 'Johannesburg' },
        { icon: <Clock size={14} />, text: '6 Months' },
      ],
      cta: 'Apply Now',
      solid: true,
    },
    {
      logo: logoWorldBank,
      logoAlt: 'World Bank',
      tag: 'EVENT',
      tagTone: 'event',
      title: 'AI & Technology Summit',
      org: 'World Bank',
      details: [
        { icon: <Laptop size={14} />, text: 'Hybrid Event' },
        { icon: <Calendar size={14} />, text: 'Oct 12, 2025' },
      ],
      cta: 'Register',
      solid: false,
    },
    {
      logo: logoUnesco,
      logoAlt: 'UNESCO',
      tag: 'PROGRAM',
      tagTone: 'program',
      title: 'Community Leadership Program',
      org: 'UNESCO',
      details: [
        { icon: <Globe size={14} />, text: 'Online' },
        { icon: <Home size={14} />, text: 'Applications Open' },
      ],
      cta: 'Join Program',
      solid: true,
    },
  ];

  return (
    <section id="featured" className="section opp-featured-section">
      <div className="container">
        <div className="opp-featured-panel">
          <div className="text-center">
            <div className="section-tag">FEATURED OPPORTUNITIES</div>
            <h2 className="opp-page-section-title">
              Explore Verified <span className="highlight-blue">Opportunities</span>
            </h2>
            <p className="opp-page-subtitle">
              Browse hand-picked jobs, internships, scholarships, grants, and events from trusted organizations and institutions.
            </p>
          </div>

          <div className="opp-listings-grid">
            {listings.map((item) => (
              <article key={item.title} className="opp-listing-card">
                <div className="opp-listing-top">
                  <div className={`opp-listing-logo-wrap opp-listing-logo-${item.tagTone}`}>
                    <img src={item.logo} alt={item.logoAlt} className="opp-listing-logo" />
                  </div>
                  <button type="button" className="opp-listing-bookmark" aria-label="Bookmark">
                    <Bookmark size={18} />
                  </button>
                </div>

                <div className="opp-listing-meta">
                  <span className={`opp-listing-tag opp-listing-tag-${item.tagTone}`}>{item.tag}</span>
                </div>
                <h3 className="opp-listing-title">{item.title}</h3>
                <p className="opp-listing-org">{item.org}</p>

                <ul className="opp-listing-details">
                  {item.details.map((d) => (
                    <li key={d.text}>
                      {d.icon}
                      <span>{d.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`opp-listing-btn ${item.solid ? 'is-solid' : 'is-outline'}`}
                  onClick={() => alert(`${item.cta}: ${item.title}`)}
                >
                  {item.cta} <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>

          <div className="opp-ai-banner">
            <img
              src={opportunitiesRobot}
              alt=""
              className="opp-ai-robot"
              aria-hidden="true"
            />
            <div className="opp-ai-copy">
              <h3 className="opp-ai-title">Can&apos;t Find the Right Opportunity?</h3>
              <p className="opp-ai-desc">
                Use AI recommendations to discover personalized opportunities based on your skills and interests.
              </p>
            </div>
            <div className="opp-ai-actions">
              <button className="btn btn-primary" onClick={() => alert('Get AI Recommendations')}>
                <Sparkles size={16} /> Get AI Recommendations
              </button>
              <a href="#search" className="btn btn-outline">
                Browse All Opportunities <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   WHY CHOOSE
   ========================================================================== */
const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'Verified Opportunities',
      desc: 'Every opportunity is reviewed and verified before being published.',
    },
    {
      icon: <Sparkles size={22} />,
      title: 'AI Smart Recommendations',
      desc: 'Receive personalized jobs, scholarships, and grants based on your profile.',
    },
    {
      icon: <Handshake size={22} />,
      title: 'Trusted Partners',
      desc: 'Access opportunities from governments, universities, NGOs, and global companies.',
    },
    {
      icon: <FolderCheck size={22} />,
      title: 'Easy Applications',
      desc: 'Apply faster with a simple and user-friendly application process.',
    },
  ];

  const stats = [
    { icon: <User size={18} />, value: '120K+', label: 'Active User' },
    { icon: <Briefcase size={18} />, value: '25K+', label: 'Job Opportunities' },
    { icon: <GraduationCap size={18} />, value: '8.5k+', label: 'Scholarship' },
    { icon: <Handshake size={18} />, value: '50+', label: 'Partner Organizations' },
  ];

  return (
    <section className="section opp-why-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">WHY CHOOSE TUMBO EYE</div>
          <h2 className="opp-page-section-title">
            Why Millions Trust Tumbo <span className="highlight-blue">Eye 2.0</span>
          </h2>
          <p className="opp-page-subtitle">
            We connect students, professionals, entrepreneurs, and organizations through a trusted platform that delivers verified opportunities and AI-powered recommendations.
          </p>
        </div>

        <div className="opp-why-grid">
          {features.map((f) => (
            <article key={f.title} className="opp-why-card">
              <div className="opp-why-icon">{f.icon}</div>
              <h3 className="opp-why-title">{f.title}</h3>
              <p className="opp-why-desc">{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="opp-why-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="opp-why-stat-card">
              <span className="opp-why-stat-icon">{stat.icon}</span>
              <div>
                <p className="opp-why-stat-value">{stat.value}</p>
                <p className="opp-why-stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="opp-ready-banner">
          <div className="opp-ready-copy">
            <h3 className="opp-ready-title">Ready to Discover Your Next Opportunity?</h3>
            <p className="opp-ready-desc">
              Create a free account to save opportunities, get AI recommendations, and apply faster.
            </p>
            <div className="opp-ready-actions">
              <button className="btn btn-white" onClick={() => alert('Get Started')}>
                Get Started
              </button>
              <Link to="/about" className="btn opp-ready-outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="opp-ready-visual">
            <img
              src={opportunitiesCta}
              alt="Student exploring opportunities on a laptop"
              className="opp-ready-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   PAGE
   ========================================================================== */
export const Opportunities: React.FC = () => (
  <>
    <OpportunitiesHero />
    <OpportunitiesStats />
    <FindOpportunities />
    <FeaturedListings />
    <WhyChoose />
  </>
);

export default Opportunities;
