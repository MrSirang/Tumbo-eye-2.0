import React, { useMemo, useState } from 'react';
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
  ShieldCheck,
  Handshake,
  FolderCheck,
  IdCard,
  Award,
  RotateCcw,
  LayoutGrid,
  List,
  ExternalLink,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Flame,
  RefreshCw,
  Info,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { AnimatedStat } from '../components/AnimatedStat';

import oppHeroSpeaker from '../assets/opp-hero-speaker.png';
import oppFindGroup from '../assets/opp-find-group.png';
import oppAiRobot from '../assets/opp-ai-robot-new.png';
import oppReadyBooth from '../assets/opp-ready-booth.png';

type Category = 'All' | 'Employment' | 'Scholarships' | 'Internships' | 'Grants' | 'Events';
type SortKey = 'Latest' | 'Most Popular' | 'Near Me' | 'Recommended';

type Opportunity = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  category: Exclude<Category, 'All'>;
  location: string;
  cta: string;
  externalUrl?: string;
  featured?: boolean;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    icon: <Briefcase size={20} strokeWidth={1.75} />,
    title: 'DSV Recruitment Drive',
    desc: 'Drivers, security guards, cleaners, administration clerks and general workers across South Africa.',
    category: 'Employment',
    location: 'South Africa',
    cta: 'Apply Externally',
    externalUrl: 'https://www.dsv.com/en-za/about-dsv/careers',
    featured: true,
  },
  {
    icon: <Search size={20} strokeWidth={1.75} />,
    title: 'Mr D Driver Recruitment',
    desc: 'Vehicle and motorcycle delivery opportunities available in Middelburg.',
    category: 'Employment',
    location: 'Middelburg',
    cta: 'Apply Externally',
    externalUrl: 'https://www.mrdfood.com/',
    featured: true,
  },
  {
    icon: <Lightbulb size={20} strokeWidth={1.75} />,
    title: 'Government Skills Programme',
    desc: 'Training and employment opportunities for unemployed youth.',
    category: 'Internships',
    location: 'South Africa',
    cta: 'Learn More',
    featured: true,
  },
  {
    icon: <Users size={20} strokeWidth={1.75} />,
    title: 'Community Development Programme',
    desc: 'Supporting local community growth through education and entrepreneurship.',
    category: 'Events',
    location: 'Mpumalanga',
    cta: 'View Details',
    featured: true,
  },
  {
    icon: <TrendingUp size={20} strokeWidth={1.75} />,
    title: 'Business Growth Initiative',
    desc: 'Helping entrepreneurs grow through mentorship and networking.',
    category: 'Grants',
    location: 'South Africa',
    cta: 'Explore',
    featured: true,
  },
  {
    icon: <Flame size={20} strokeWidth={1.75} />,
    title: 'Youth Leadership Programme',
    desc: 'Leadership development opportunities for future community leaders.',
    category: 'Scholarships',
    location: 'South Africa',
    cta: 'View Details',
    featured: true,
  },
];

const openExternalOpportunity = (title: string, url: string) => {
  const leave = window.confirm(
    `You are leaving the Tumbo platform to apply for "${title}" on the official provider website.\n\nContinue?`,
  );
  if (leave) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/* ==========================================================================
   HERO
   ========================================================================== */
const OpportunitiesHero: React.FC = () => (
  <section className="section section-blue-bg opp-page-hero">
    <div className="container opp-page-hero-grid">
      <Reveal className="opp-page-hero-content">
        <p className="opp-page-hero-brand">Tumbo</p>
        <div className="hero-tag-pill">DISCOVER OPPORTUNITIES</div>
        <h1 className="opp-page-hero-title">
          Matching Opportunities with{' '}
          <span className="eco2-title-accent">Targeted Potential</span>
        </h1>
        <p className="opp-page-hero-desc">
          Tumbo connects verified individuals with employment, education, funding, entrepreneurship
          and community programmes. Discover opportunities that match your location, skills,
          qualifications and aspirations.
        </p>
        <div className="hero-btn-group">
          <a href="#search" className="btn btn-primary">
            Explore Opportunities <ArrowRight size={16} />
          </a>
          <Link to="/contact" className="btn btn-outline">
            <UserRound size={15} /> Contact Tumbo
          </Link>
        </div>
        <p className="opp-coming-soon-note">Profile creation &amp; login — Coming Soon</p>
      </Reveal>
      <Reveal className="opp-page-hero-visual" delay={0.1}>
        <img
          src={oppHeroSpeaker}
          alt="Community leader presenting the Tumbo digital engagement app"
          className="opp-page-hero-img"
        />
      </Reveal>
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
        <Reveal className="opp-page-stats-pill">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="opp-page-stat-item">
                <span className="opp-page-stat-icon">{stat.icon}</span>
                <div>
                  <p className="opp-page-stat-value">
                    <AnimatedStat value={stat.value} />
                  </p>
                  <p className="opp-page-stat-label">{stat.label}</p>
                </div>
              </div>
              {i < stats.length - 1 && <span className="opp-page-stat-divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </Reveal>
      </div>
    </div>
  );
};

/* ==========================================================================
   FIND / SEARCH + LISTINGS
   ========================================================================== */
const FindOpportunities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<SortKey>('Latest');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'All', icon: <LayoutGrid size={16} /> },
    { name: 'Employment', icon: <Briefcase size={16} /> },
    { name: 'Scholarships', icon: <GraduationCap size={16} /> },
    { name: 'Internships', icon: <IdCard size={16} /> },
    { name: 'Grants', icon: <Award size={16} /> },
    { name: 'Events', icon: <Calendar size={16} /> },
  ];

  const sorts: SortKey[] = ['Latest', 'Most Popular', 'Near Me', 'Recommended'];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return OPPORTUNITIES.filter((item) => {
      const categoryOk = activeCategory === 'All' || item.category === activeCategory;
      const queryOk =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return categoryOk && queryOk;
    });
  }, [activeCategory, query]);

  const resetFilters = () => {
    setActiveCategory('All');
    setQuery('');
    setSortBy('Latest');
  };

  const handleApply = (item: Opportunity) => {
    if (item.externalUrl) {
      openExternalOpportunity(item.title, item.externalUrl);
      return;
    }
    alert(
      `"${item.title}" application details will be available soon. Tumbo redirects applicants to official provider portals when links are ready.`,
    );
  };

  return (
    <section id="search" className="section opp-find-section">
      <div className="container">
        <div className="opp-find-intro">
          <Reveal className="opp-find-copy">
            <div className="hero-tag-pill">FIND OPPORTUNITIES</div>
            <h2 className="opp-page-section-title">
              Find Opportunities That Match{' '}
              <span className="eco2-title-accent">Your Potential</span>
            </h2>
            <p className="opp-find-desc">
              Search verified employment, bursaries, scholarships, grants, internships and community
              programmes tailored to your goals. External applications open on the official provider
              site.
            </p>
          </Reveal>
          <Reveal className="opp-find-visual" delay={0.08}>
            <img
              src={oppFindGroup}
              alt="Community members connecting at a Tumbo opportunity event"
              className="opp-find-devices-img"
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="opp-search-panel">
            <form
              className="opp-search-bar"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Search size={18} className="opp-search-icon" />
              <input
                type="search"
                className="opp-search-input"
                placeholder="Search opportunities, organizations, programmes and keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search opportunities"
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
        </Reveal>

        <div className="opp-filters-panel">
          <p className="opp-filters-hint">
            <Info size={14} /> Frontend filters refine this list. Advanced matching &amp; profiles —
            Coming Soon.
          </p>
          <button type="button" className="opp-reset-filters" onClick={resetFilters}>
            <RotateCcw size={14} /> Reset Filters
          </button>
        </div>

        <div className="opp-results-bar">
          <p className="opp-results-count">
            <ShieldCheck size={16} /> Showing {filtered.length} matching{' '}
            {filtered.length === 1 ? 'opportunity' : 'opportunities'}
            {sortBy !== 'Latest' ? ` · Sorted: ${sortBy}` : ''}
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

        <div
          className={`opp-listings-grid ${viewMode === 'list' ? 'opp-listings-grid-list' : ''}`}
          id="featured"
        >
          {filtered.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className={`opp-feat-card ${viewMode === 'list' ? 'opp-feat-card-list' : ''}`}>
                <div className="opp-feat-card-head">
                  <span className="opp-feat-card-icon">{item.icon}</span>
                  <h3 className="opp-feat-card-title">{item.title}</h3>
                </div>
                <div className="opp-feat-card-meta">
                  <span>
                    <MapPin size={13} /> {item.location}
                  </span>
                  <span>
                    <Briefcase size={13} /> {item.category}
                  </span>
                </div>
                <p className="opp-feat-card-desc">{item.desc}</p>
                <button
                  type="button"
                  className="opp-feat-card-btn"
                  onClick={() => handleApply(item)}
                >
                  {item.cta}{' '}
                  {item.externalUrl ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                </button>
                {item.externalUrl && (
                  <p className="opp-external-note">Opens the official provider website</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="opp-empty-state">
            <p>No opportunities match your search. Try another keyword or reset filters.</p>
            <button type="button" className="btn btn-outline" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

/* ==========================================================================
   AI BANNER + DISCLAIMER
   ========================================================================== */
const OpportunityGuidance: React.FC = () => (
  <section className="section opp-featured-section">
    <div className="container">
      <Reveal>
        <div className="opp-ai-banner">
          <img src={oppAiRobot} alt="" className="opp-ai-robot" aria-hidden="true" />
          <div className="opp-ai-copy">
            <h3 className="opp-ai-title">Looking for the Right Opportunity?</h3>
            <p className="opp-ai-desc">
              Personalized AI matching based on verified skills and interests is coming soon. For
              now, browse verified listings and apply directly with opportunity providers.
            </p>
          </div>
          <div className="opp-ai-actions">
            <a href="#search" className="btn btn-primary">
              Browse Opportunities <ArrowRight size={14} />
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact Tumbo
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <aside className="opp-disclaimer" aria-label="Opportunity disclaimer">
          <div className="opp-disclaimer-icon">
            <Info size={22} />
          </div>
          <div>
            <h3 className="opp-disclaimer-title">Opportunity Disclaimer</h3>
            <p className="opp-disclaimer-text">
              The Tumbo platform connects users with verified employment, education, funding,
              internship, bursary and development opportunities. While every effort is made to ensure
              opportunities are accurate and current, Tumbo does not guarantee employment, funding,
              acceptance or selection by any organisation. All recruitment and selection decisions
              remain solely the responsibility of the respective opportunity providers. Tumbo&apos;s
              role is to simplify access to opportunities by connecting opportunity seekers with
              trusted organisations.
            </p>
          </div>
        </aside>
      </Reveal>
    </div>
  </section>
);

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
      title: 'Secure Redirection',
      desc: 'Apply on official provider portals when external links are available.',
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
        <Reveal className="text-center">
          <div className="section-tag">WHY CHOOSE TUMBO</div>
          <h2 className="opp-page-section-title">
            Why Thousands Trust the Tumbo{' '}
            <span className="eco2-title-accent">Digital Ecosystem</span>
          </h2>
          <p className="opp-page-subtitle">
            Our platform connects verified individuals, communities, businesses and government
            institutions through trusted opportunity discovery and secure redirection to official
            application portals.
          </p>
        </Reveal>

        <div className="opp-why-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <article className="opp-why-card">
                <div className="opp-why-icon">{f.icon}</div>
                <h3 className="opp-why-title">{f.title}</h3>
                <p className="opp-why-desc">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="opp-why-stats">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="opp-why-stat-card">
                <span className="opp-why-stat-icon">{stat.icon}</span>
                <div>
                  <p className="opp-why-stat-value">
                    <AnimatedStat value={stat.value} />
                  </p>
                  <p className="opp-why-stat-label">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="opp-ready-banner">
            <div className="opp-ready-copy">
              <h3 className="opp-ready-title">Ready to Discover Your Next Opportunity?</h3>
              <p className="opp-ready-desc">
                Explore verified opportunities across employment, education, funding and community
                programmes—then apply directly with trusted providers.
              </p>
              <div className="opp-ready-actions">
                <a href="#search" className="btn btn-white">
                  Explore Opportunities
                </a>
                <Link to="/contact" className="btn opp-ready-outline">
                  Contact Tumbo
                </Link>
              </div>
              <p className="opp-coming-soon-note opp-coming-soon-note-light">
                Create Your Profile — Coming Soon
              </p>
            </div>
            <div className="opp-ready-visual">
              <img
                src={oppReadyBooth}
                alt="Tumbo community engagement booth at an outdoor event"
                className="opp-ready-img"
              />
            </div>
          </div>
        </Reveal>
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
    <OpportunityGuidance />
    <WhyChoose />
  </>
);

export default Opportunities;
