import React, { useState } from 'react';
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
  ShieldCheck,
  Handshake,
  FolderCheck,
  IdCard,
  Award,
  RotateCcw,
  LayoutGrid,
  List,
  Tag,
  Layers,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Flame,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';

import oppHeroSpeaker from '../assets/opp-hero-speaker.png';
import oppFindGroup from '../assets/opp-find-group.png';
import oppAiRobot from '../assets/opp-ai-robot-new.png';
import oppReadyBooth from '../assets/opp-ready-booth.png';

type Category = 'Employment' | 'Scholarships' | 'Internships' | 'Grants' | 'Events';
type SortKey = 'Latest' | 'Most Popular' | 'Near Me' | 'Recommended';

/* ==========================================================================
   HERO
   ========================================================================== */
const OpportunitiesHero: React.FC = () => (
  <section className="section section-blue-bg opp-page-hero">
    <div className="container opp-page-hero-grid">
      <div className="opp-page-hero-content">
        <div className="hero-tag-pill">DISCOVER OPPORTUNITIES</div>
        <h1 className="opp-page-hero-title">
          Matching Opportunities with{' '}
          <span className="eco2-title-accent">Targeted Potential</span>
        </h1>
        <p className="opp-page-hero-desc">
          Tumbo intelligently connects verified individuals with employment, education, funding, entrepreneurship and community programmes. Discover opportunities that match your location, skills, qualifications and aspirations.
        </p>
        <div className="hero-btn-group">
          <a href="#search" className="btn btn-primary">
            Explore Opportunities <ArrowRight size={16} />
          </a>
          <button className="btn btn-outline" onClick={() => alert('Create Your Profile')}>
            <UserRound size={15} /> Create Your Profile
          </button>
        </div>
      </div>
      <div className="opp-page-hero-visual">
        <img
          src={oppHeroSpeaker}
          alt="Community leader presenting the Tumbo digital engagement app"
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
    { icon: <User size={18} />, value: '120K+', label: 'Verified Users' },
    { icon: <Search size={18} />, value: '25K+', label: 'Opportunities Shared' },
    { icon: <GraduationCap size={18} />, value: '5K+', label: 'Strategic Partners' },
    { icon: <Building2 size={18} />, value: '500+', label: 'Community Organizations' },
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
  const [activeCategory, setActiveCategory] = useState<Category>('Employment');
  const [sortBy, setSortBy] = useState<SortKey>('Latest');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'Employment', icon: <Briefcase size={16} /> },
    { name: 'Scholarships', icon: <GraduationCap size={16} /> },
    { name: 'Internships', icon: <IdCard size={16} /> },
    { name: 'Grants', icon: <Award size={16} /> },
    { name: 'Events', icon: <Calendar size={16} /> },
  ];

  const filters = [
    { icon: <MapPin size={15} />, label: 'Location' },
    { icon: <Layers size={15} />, label: 'Category' },
    { icon: <GraduationCap size={15} />, label: 'Level of Study' },
    { icon: <Clock size={15} />, label: 'Date Posted' },
    { icon: <Tag size={15} />, label: 'Opportunity Type' },
  ];

  const sorts: SortKey[] = ['Latest', 'Most Popular', 'Near Me', 'Recommended'];

  return (
    <section id="search" className="section opp-find-section">
      <div className="container">
        <div className="opp-find-intro">
          <div className="opp-find-copy">
            <div className="hero-tag-pill">FIND OPPORTUNITIES</div>
            <h2 className="opp-page-section-title">
              Find Opportunities That Match <span className="eco2-title-accent">Your Potential</span>
            </h2>
            <p className="opp-find-desc">
              Search verified employment, bursaries, scholarships, grants, internships and community programmes tailored to your profile and career goals.
            </p>
          </div>
          <div className="opp-find-visual">
            <img
              src={oppFindGroup}
              alt="Community members connecting at a Tumbo opportunity event"
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
              placeholder="Search opportunities, organizations, programmes and keywords..."
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
        </div>

        <div className="opp-filters-panel">
          <div className="opp-filters-row">
            {filters.map((filter) => (
              <button key={filter.label} type="button" className="opp-filter-select">
                {filter.icon}
                <span>{filter.label}</span>
                <ChevronDown size={14} />
              </button>
            ))}
          </div>
          <button type="button" className="opp-reset-filters" onClick={() => alert('Filters reset')}>
            <RotateCcw size={14} /> Reset Filter
          </button>
        </div>

        <div className="opp-results-bar">
          <p className="opp-results-count">
            <ShieldCheck size={16} /> Showing 1–20 matching opportunities
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
            <div className="opp-view-toggles">
              <button
                type="button"
                className={`opp-view-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
                aria-label="Grid view"
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                type="button"
                className={`opp-view-btn ${viewMode === 'list' ? 'is-active' : ''}`}
                aria-label="List view"
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </button>
            </div>
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
      icon: <Briefcase size={20} strokeWidth={1.75} />,
      title: 'DSV Recruitment Drive',
      desc: 'Drivers, security guards, cleaners, administration clerks and general workers across South Africa.',
      cta: 'View Details',
    },
    {
      icon: <Search size={20} strokeWidth={1.75} />,
      title: 'Mr D Driver Recruitment',
      desc: 'Vehicle and motorcycle delivery opportunities available in Middelburg.',
      cta: 'Apply Now',
    },
    {
      icon: <Lightbulb size={20} strokeWidth={1.75} />,
      title: 'Government Skills Programme',
      desc: 'Training and employment opportunities for unemployed youth.',
      cta: 'Learn More',
    },
    {
      icon: <Users size={20} strokeWidth={1.75} />,
      title: 'Community Development Programme',
      desc: 'Supporting local community growth through education and entrepreneurship.',
      cta: 'Join Programme',
    },
    {
      icon: <TrendingUp size={20} strokeWidth={1.75} />,
      title: 'Business Growth Initiative',
      desc: 'Helping entrepreneurs grow through mentorship and networking.',
      cta: 'Explore',
    },
    {
      icon: <Flame size={20} strokeWidth={1.75} />,
      title: 'Youth Leadership Programme',
      desc: 'Leadership development opportunities for future community leaders.',
      cta: 'Register',
    },
  ];

  return (
    <section id="featured" className="section opp-featured-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">FEATURED OPPORTUNITIES</div>
          <h2 className="opp-page-section-title">
            Verified <span className="eco2-title-accent">Opportunities</span>
          </h2>
          <p className="opp-page-subtitle">
            Browse verified opportunities from trusted businesses, educational institutions, municipalities and development partners.
          </p>
        </div>

        <div className="opp-listings-grid">
          {listings.map((item) => (
            <article key={item.title} className="opp-feat-card">
              <div className="opp-feat-card-head">
                <span className="opp-feat-card-icon">{item.icon}</span>
                <h3 className="opp-feat-card-title">{item.title}</h3>
              </div>
              <p className="opp-feat-card-desc">{item.desc}</p>
              <button
                type="button"
                className="opp-feat-card-btn"
                onClick={() => alert(`${item.cta}: ${item.title}`)}
              >
                {item.cta} <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>

        <div className="opp-ai-banner">
          <img
            src={oppAiRobot}
            alt=""
            className="opp-ai-robot"
            aria-hidden="true"
          />
          <div className="opp-ai-copy">
            <h3 className="opp-ai-title">Looking for the Right Opportunity?</h3>
            <p className="opp-ai-desc">
              Let our AI-powered system match you with the right options based on your verified skills, certifications and interests.
            </p>
          </div>
          <div className="opp-ai-actions">
            <button className="btn btn-primary" onClick={() => alert('Get Personalized Matches')}>
              Get Personalized Matches <ArrowRight size={14} />
            </button>
            <a href="#search" className="btn btn-outline">
              Browse All Opportunities
            </a>
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
      desc: 'Every opportunity is screened and verified carefully.',
    },
    {
      icon: <Target size={22} />,
      title: 'Direct Matching',
      desc: 'Personalised matches based on your profile and skills.',
    },
    {
      icon: <Handshake size={22} />,
      title: 'Trusted Organizations',
      desc: 'Connect with businesses, NGOs and government institutions.',
    },
    {
      icon: <FolderCheck size={22} />,
      title: 'Easy Applications',
      desc: 'Apply quickly using your verified Tumbo profile.',
    },
  ];

  const stats = [
    { icon: <User size={18} />, value: '120K+', label: 'Verified Users' },
    { icon: <RefreshCw size={18} />, value: '25K+', label: 'Opportunities Shared' },
    { icon: <GraduationCap size={18} />, value: '8.5K+', label: 'Strategic Partners' },
    { icon: <Handshake size={18} />, value: '50+', label: 'Partnerships' },
  ];

  return (
    <section className="section opp-why-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">WHY CHOOSE TUMBO</div>
          <h2 className="opp-page-section-title">
            Why Thousands Trust the Tumbo{' '}
            <span className="eco2-title-accent">Digital Ecosystem</span>
          </h2>
          <p className="opp-page-subtitle">
            Our intelligent platform connects verified individuals, communities, businesses and government institutions through secure digital identity and smart opportunity matching.
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
              Join the Tumbo Digital Ecosystem and unlock endless opportunities for growth that match your skills, interests and career goals.
            </p>
            <div className="opp-ready-actions">
              <a href="#search" className="btn btn-white">
                Explore Opportunities
              </a>
              <button className="btn opp-ready-outline" onClick={() => alert('Create Your Profile')}>
                Create Your Profile
              </button>
            </div>
          </div>
          <div className="opp-ready-visual">
            <img
              src={oppReadyBooth}
              alt="Tumbo community engagement booth at an outdoor event"
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
