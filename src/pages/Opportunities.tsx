import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Bookmark,
  Check,
  Clock3,
  Banknote,
  BarChart3,
  ChevronDown,
  FileText,
  GraduationCap,
  HeartHandshake,
  Link2,
  User,
  Search,
  MapPin,
  Calendar,
  ShieldCheck,
  Handshake,
  FolderCheck,
  LayoutGrid,
  List,
  ExternalLink,
  Target,
  RefreshCw,
  Info,
  Users,
  Wrench,
  Store,
  ShoppingBasket,
  Palette,
  X,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { AnimatedStat } from '../components/AnimatedStat';
import {
  fetchPublicOpportunities,
  formatPostedLabel,
  resolveMediaUrl,
  splitRequirements,
  type ApiOpportunity,
} from '../lib/opportunities';

import oppAiRobot from '../assets/opp-ai-robot-new.png';
import oppReadyBooth from '../assets/opp-ready-booth.png';
import oppHeroShopWoman from '../assets/opp-hero-shop-woman.png';
import oppListingJob from '../assets/opp-listing-job.png';
import oppListingService from '../assets/opp-listing-service.png';
import oppListingShop from '../assets/opp-listing-shop.png';
import oppListingLocal from '../assets/opp-listing-local.png';

type Category =
  | 'All'
  | 'Jobs'
  | 'Scholarships'
  | 'Internships'
  | 'Grants'
  | 'Training'
  | 'Volunteering'
  | 'Partnerships';
type SortKey = 'Recommended' | 'Latest' | 'Most Popular' | 'Near Me';
type ListingTag = 'job' | 'small-shop' | 'service' | 'stock-sell' | 'locally-produced';

type Opportunity = {
  id?: string;
  title: string;
  tag: ListingTag;
  tagLabel: string;
  category: Exclude<Category, 'All'>;
  location: string;
  detail: string;
  detailIcon: 'briefcase' | 'store' | 'wrench' | 'basket' | 'palette';
  image: string;
  imageAlt: string;
  posted: string;
  salary: string;
  experience: string;
  about: string;
  requirements: string[];
  howToApply: string;
  externalUrl?: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    title: 'Retail Assistant',
    tag: 'job',
    tagLabel: 'JOB',
    category: 'Jobs',
    location: 'Midrand, GP',
    detail: 'Full-time',
    detailIcon: 'briefcase',
    image: oppHeroShopWoman,
    imageAlt: 'Retail assistant in a local shop',
    posted: 'Posted 3 days ago',
    salary: 'Salary R8,000 - R8,000/month',
    experience: 'Experience Not required',
    about:
      'Assist customers, manage stock, and keep the shop organised. Ideal for someone who enjoys helping people and learning retail skills.',
    requirements: [
      'Grade 12 (Matric)',
      'Good communication skills',
      'Basic computer skills (advantageous)',
      'Willingness to learn',
    ],
    howToApply:
      "Click the 'Apply Now' button and fill in your details. You will be contacted if you are shortlisted.",
    externalUrl: 'https://www.dsv.com/en-za/about-dsv/careers',
  },
  {
    title: 'Spaza Shop Franchise',
    tag: 'small-shop',
    tagLabel: 'SMALL SHOP',
    category: 'Jobs',
    location: 'Soweto, GP',
    detail: 'Self-employed',
    detailIcon: 'store',
    image: oppListingShop,
    imageAlt: 'Shopkeeper serving customers in a community store',
    posted: 'Posted 5 days ago',
    salary: 'Earnings depend on sales',
    experience: 'Experience Preferred',
    about:
      'Start or grow a community spaza shop with guidance on stock, pricing, and customer service. Build a local business that serves your neighbourhood.',
    requirements: [
      'Interest in retail or small business',
      'Basic numeracy and record-keeping',
      'Reliable and customer-focused',
      'Willingness to work flexible hours',
    ],
    howToApply:
      "Click 'Apply Now' to express interest. Our team will share franchise details and next steps.",
  },
  {
    title: 'Plumbing & Home Services',
    tag: 'service',
    tagLabel: 'SERVICE',
    category: 'Jobs',
    location: 'Johannesburg, GP',
    detail: 'Skilled trade',
    detailIcon: 'wrench',
    image: oppListingService,
    imageAlt: 'Professional plumber providing home services',
    posted: 'Posted 1 week ago',
    salary: 'Salary R10,000 - R15,000/month',
    experience: 'Experience Advantageous',
    about:
      'Join a trusted home services team providing plumbing repairs and installations. Ideal for practical problem-solvers who enjoy hands-on work.',
    requirements: [
      'Trade interest or plumbing experience',
      'Valid ID document',
      'Reliable transport (advantageous)',
      'Strong customer service attitude',
    ],
    howToApply:
      "Click 'Apply Now' and submit your details. Shortlisted candidates will be contacted for an interview.",
  },
  {
    title: 'Stock Sell Opportunity',
    tag: 'stock-sell',
    tagLabel: 'STOCK SELL',
    category: 'Jobs',
    location: 'Pretoria, GP',
    detail: 'Small Business',
    detailIcon: 'basket',
    image: oppListingJob,
    imageAlt: 'Store associate helping a customer with products',
    posted: 'Posted 4 days ago',
    salary: 'Commission + stock support',
    experience: 'Experience Not required',
    about:
      'Sell fast-moving stock to local shops and community buyers. Learn product knowledge, sales skills, and how to build repeat customers.',
    requirements: [
      'Confident communicator',
      'Self-motivated and organised',
      'Basic smartphone literacy',
      'Willingness to travel locally',
    ],
    howToApply:
      "Click 'Apply Now' to register your interest. You will receive stock and sales guidance if selected.",
  },
  {
    title: 'Local Craft Collective',
    tag: 'locally-produced',
    tagLabel: 'LOCALLY PRODUCED',
    category: 'Grants',
    location: 'Cape Town, WC',
    detail: 'Artisan enterprise',
    detailIcon: 'palette',
    image: oppListingLocal,
    imageAlt: 'Artisan creating locally produced beadwork',
    posted: 'Posted 2 days ago',
    salary: 'Grant + market access support',
    experience: 'Experience Preferred',
    about:
      'Join a collective supporting locally made crafts. Get help with production, packaging, and reaching buyers who value authentic handmade goods.',
    requirements: [
      'Active craft or making practice',
      'Ability to produce consistently',
      'Open to collaboration',
      'Basic product photos (advantageous)',
    ],
    howToApply:
      "Click 'Apply Now' to share your craft story. Selected makers will be invited to the next collective intake.",
  },
];

const CATEGORY_SET = new Set<Exclude<Category, 'All'>>([
  'Jobs',
  'Scholarships',
  'Internships',
  'Grants',
  'Training',
  'Volunteering',
  'Partnerships',
]);

const TAG_SET = new Set<ListingTag>([
  'job',
  'small-shop',
  'service',
  'stock-sell',
  'locally-produced',
]);

const ICON_SET = new Set<Opportunity['detailIcon']>([
  'briefcase',
  'store',
  'wrench',
  'basket',
  'palette',
]);

const mapApiOpportunity = (item: ApiOpportunity): Opportunity => {
  const category = CATEGORY_SET.has(item.category as Exclude<Category, 'All'>)
    ? (item.category as Exclude<Category, 'All'>)
    : 'Jobs';
  const tag = TAG_SET.has(item.tag as ListingTag) ? (item.tag as ListingTag) : 'job';
  const detailIcon = ICON_SET.has(item.detailIcon as Opportunity['detailIcon'])
    ? (item.detailIcon as Opportunity['detailIcon'])
    : 'briefcase';

  return {
    id: item.id,
    title: item.title,
    tag,
    tagLabel: item.tagLabel || tag.replace(/-/g, ' ').toUpperCase(),
    category,
    location: item.locationLabel || item.city || 'Online',
    detail: item.opportunityType || category,
    detailIcon,
    image: resolveMediaUrl(item.imageUrl) || oppListingJob,
    imageAlt: item.imageAlt || item.title,
    posted: formatPostedLabel(item.postedAt),
    salary: item.salaryText || 'Details on apply',
    experience: item.experienceRequired
      ? item.experienceRequired.startsWith('Experience')
        ? item.experienceRequired
        : `Experience ${item.experienceRequired}`
      : 'Experience Not required',
    about: item.aboutContent || item.shortDescription || '',
    requirements: splitRequirements(item.requirementsContent),
    howToApply:
      item.howToApplyContent ||
      "Click the 'Apply Now' button and fill in your details.",
    externalUrl: item.applyUrl || undefined,
  };
};

const openExternalOpportunity = (title: string, url: string) => {
  const leave = window.confirm(
    `You are leaving the Tumbo platform to apply for "${title}" on the official provider website.\n\nContinue?`,
  );
  if (leave) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const DetailIcon: React.FC<{ type: Opportunity['detailIcon'] }> = ({ type }) => {
  const props = { size: 14, strokeWidth: 1.8 } as const;
  switch (type) {
    case 'store':
      return <Store {...props} />;
    case 'wrench':
      return <Wrench {...props} />;
    case 'basket':
      return <ShoppingBasket {...props} />;
    case 'palette':
      return <Palette {...props} />;
    default:
      return <Briefcase {...props} />;
  }
};

/* ==========================================================================
   OPPORTUNITY DETAIL MODAL
   ========================================================================== */
type OpportunityDetailModalProps = {
  item: Opportunity;
  onClose: () => void;
};

const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({ item, onClose }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const handleApply = () => {
    if (item.externalUrl) {
      openExternalOpportunity(item.title, item.externalUrl);
      return;
    }
    alert(`Application for "${item.title}" will open here soon.`);
  };

  return (
    <div className="opp-detail-overlay" role="presentation" onClick={onClose}>
      <div
        className="opp-detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="opp-detail-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="opp-detail-top">
          <button type="button" className="opp-detail-back" onClick={onClose}>
            <ArrowLeft size={16} strokeWidth={2.2} />
            Back to opportunities
          </button>
          <button type="button" className="opp-detail-close" onClick={onClose} aria-label="Close details">
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>

        <div className={`opp-detail-media opp-feat-card-${item.tag}`}>
          <img src={item.image} alt={item.imageAlt} className="opp-detail-image" />
          <span className="opp-feat-tag">{item.tagLabel}</span>
        </div>

        <h2 id="opp-detail-title" className="opp-detail-title">
          {item.title}
        </h2>

        <div className="opp-detail-meta">
          <span>
            <MapPin size={15} strokeWidth={1.9} /> {item.location}
          </span>
          <span>
            <DetailIcon type={item.detailIcon} /> {item.detail}
          </span>
        </div>

        <div className="opp-detail-chips">
          <span className="opp-detail-chip">
            <Clock3 size={14} strokeWidth={1.9} /> {item.posted}
          </span>
          <span className="opp-detail-chip">
            <Banknote size={14} strokeWidth={1.9} /> {item.salary}
          </span>
          <span className="opp-detail-chip">
            <GraduationCap size={14} strokeWidth={1.9} /> {item.experience}
          </span>
        </div>

        <div className="opp-detail-actions">
          <button type="button" className="opp-detail-apply" onClick={handleApply}>
            Apply Now
          </button>
          <button
            type="button"
            className={`opp-detail-save${saved ? ' is-saved' : ''}`}
            aria-label={saved ? 'Remove saved opportunity' : 'Save opportunity'}
            aria-pressed={saved}
            onClick={() => setSaved((v) => !v)}
          >
            <Bookmark size={18} strokeWidth={2} fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="opp-detail-divider" />

        <section className="opp-detail-section">
          <h3>About the role</h3>
          <p>{item.about}</p>
        </section>

        <section className="opp-detail-section">
          <h3>Requirements</h3>
          <ul className="opp-detail-reqs">
            {item.requirements.map((req) => (
              <li key={req}>
                <span className="opp-detail-check" aria-hidden="true">
                  <Check size={13} strokeWidth={2.6} />
                </span>
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="opp-detail-section">
          <h3>How to apply</h3>
          <p>{item.howToApply}</p>
        </section>

        <div className="opp-detail-help">
          <span className="opp-detail-help-icon" aria-hidden="true">
            <HeartHandshake size={18} strokeWidth={1.9} />
          </span>
          <div>
            <p className="opp-detail-help-title">Need help with your CV or application?</p>
            <p className="opp-detail-help-text">Visit our Skills &amp; Support section for guidance and resources.</p>
            <Link to="/resources" className="opp-detail-help-link" onClick={onClose}>
              Go to Support <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   HERO
   ========================================================================== */
const HERO_TAGS = ['Jobs', 'Smart Shops', 'Services', 'Stock Sell', 'Locally Produced'] as const;

const OpportunitiesHero: React.FC = () => {
  const [heroQuery, setHeroQuery] = useState('');

  const goToSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const el = document.getElementById('search');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="opp-page-hero" aria-label="Opportunities hero">
      <div className="opp-page-hero-media" aria-hidden="true">
        <img
          src={oppHeroShopWoman}
          alt=""
          className="opp-page-hero-media-img"
        />
        <div className="opp-page-hero-shade" />
      </div>

      <div className="container opp-page-hero-inner">
        <Reveal className="opp-page-hero-content">
          <p className="opp-page-hero-eyebrow">OPPORTUNITIES</p>
          <h1 className="opp-page-hero-title">
            Real opportunities.
            <br />
            Real people. Real impact.
          </h1>
          <p className="opp-page-hero-desc">
            Discover jobs, start a business, find services, and explore opportunities in your
            community.
          </p>

          <form className="opp-page-hero-search" onSubmit={goToSearch}>
            <input
              type="search"
              className="opp-page-hero-search-input"
              placeholder="Search for jobs, shops, services, or skills..."
              value={heroQuery}
              onChange={(e) => setHeroQuery(e.target.value)}
              aria-label="Search opportunities"
            />
            <button type="submit" className="opp-page-hero-search-btn" aria-label="Search">
              <Search size={20} strokeWidth={2.2} />
            </button>
          </form>

          <div className="opp-page-hero-tags">
            {HERO_TAGS.map((tag) => (
              <button key={tag} type="button" className="opp-page-hero-tag" onClick={() => goToSearch()}>
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ==========================================================================

   FIND / SEARCH + LISTINGS

   ========================================================================== */

const FindOpportunities: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const [sortBy, setSortBy] = useState<SortKey>('Recommended');

  const [query, setQuery] = useState('');

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [selected, setSelected] = useState<Opportunity | null>(null);

  const [locationFilter, setLocationFilter] = useState('all');

  const [typeFilter, setTypeFilter] = useState('all');

  const [experienceFilter, setExperienceFilter] = useState('all');

  const [deadlineFilter, setDeadlineFilter] = useState('all');

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [totalCount, setTotalCount] = useState(OPPORTUNITIES.length);

  const [listings, setListings] = useState<Opportunity[]>(OPPORTUNITIES);

  const [usingApi, setUsingApi] = useState(false);

  const [loadingList, setLoadingList] = useState(false);

  const categories: { name: Category; label: string; icon: React.ReactNode; iconClass: string }[] = [

    { name: 'All', label: 'All', icon: <LayoutGrid size={16} strokeWidth={2} />, iconClass: 'is-all' },

    { name: 'Jobs', label: 'Jobs', icon: <Briefcase size={16} strokeWidth={2} />, iconClass: 'is-jobs' },

    { name: 'Scholarships', label: 'Scholarships', icon: <GraduationCap size={16} strokeWidth={2} />, iconClass: 'is-scholarships' },

    { name: 'Internships', label: 'Internships', icon: <FileText size={16} strokeWidth={2} />, iconClass: 'is-internships' },

    { name: 'Grants', label: 'Grants', icon: <HeartHandshake size={16} strokeWidth={2} />, iconClass: 'is-grants' },

    { name: 'Training', label: 'Training', icon: <BarChart3 size={16} strokeWidth={2} />, iconClass: 'is-training' },

    { name: 'Volunteering', label: 'Volunteering', icon: <Users size={16} strokeWidth={2} />, iconClass: 'is-volunteering' },

    { name: 'Partnerships', label: 'Partnerships', icon: <Link2 size={16} strokeWidth={2} />, iconClass: 'is-partnerships' },

  ];

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoadingList(true);
      try {
        const data = await fetchPublicOpportunities({
          page,
          limit: 12,
          search: query.trim() || undefined,
          category: activeCategory,
          location: locationFilter,
          opportunityType: typeFilter,
          experience: experienceFilter,
          sort: sortBy,
        });

        if (cancelled) return;

        if (data.total > 0) {
          setListings(data.items.map(mapApiOpportunity));
          setTotalPages(data.totalPages);
          setTotalCount(data.total);
          setUsingApi(true);
        } else if (page === 1 && !query && activeCategory === 'All' && locationFilter === 'all') {
          setListings(OPPORTUNITIES);
          setTotalPages(1);
          setTotalCount(OPPORTUNITIES.length);
          setUsingApi(false);
        } else {
          setListings([]);
          setTotalPages(1);
          setTotalCount(0);
          setUsingApi(true);
        }
      } catch {
        if (cancelled) return;
        setUsingApi(false);
        setListings(OPPORTUNITIES);
        setTotalPages(1);
        setTotalCount(OPPORTUNITIES.length);
      } finally {
        if (!cancelled) setLoadingList(false);
      }
    };

    const timer = window.setTimeout(load, usingApi || query ? 250 : 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- debounce search; usingApi intentionally omitted
  }, [page, query, activeCategory, locationFilter, typeFilter, experienceFilter, sortBy]);

  const filtered = useMemo(() => {
    if (usingApi) {
      if (deadlineFilter === 'all') return listings;
      return listings.filter((item) =>
        item.posted.toLowerCase().includes(deadlineFilter.toLowerCase()),
      );
    }

    const q = query.trim().toLowerCase();

    return listings.filter((item) => {
      const categoryOk = activeCategory === 'All' || item.category === activeCategory;
      const queryOk =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.tagLabel.toLowerCase().includes(q) ||
        item.detail.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      const locationOk =
        locationFilter === 'all' || item.location.toLowerCase().includes(locationFilter.toLowerCase());
      const typeOk = typeFilter === 'all' || item.tag === typeFilter;
      const experienceOk =
        experienceFilter === 'all' ||
        item.experience.toLowerCase().includes(experienceFilter.toLowerCase());
      const deadlineOk =
        deadlineFilter === 'all' || item.posted.toLowerCase().includes(deadlineFilter.toLowerCase());

      return categoryOk && queryOk && locationOk && typeOk && experienceOk && deadlineOk;
    });
  }, [
    usingApi,
    listings,
    activeCategory,
    query,
    locationFilter,
    typeFilter,
    experienceFilter,
    deadlineFilter,
  ]);

  const resetFilters = () => {
    setActiveCategory('All');
    setQuery('');
    setSortBy('Recommended');
    setLocationFilter('all');
    setTypeFilter('all');
    setExperienceFilter('all');
    setDeadlineFilter('all');
    setPage(1);
  };

  return (

    <section id="search" className="section opp-find-section">

      <div className="container">

        <div className="opp-explore-header">

          <Reveal className="opp-explore-copy">

            <p className="opp-explore-eyebrow">OPPORTUNITY DIRECTORY</p>

            <h2 className="opp-explore-title">Explore Opportunities</h2>

            <p className="opp-explore-sub">Choose a category below to find what is right for you.</p>

          </Reveal>

        </div>

        <Reveal className="opp-pill-row">

          <div className="opp-pill-tabs" role="tablist" aria-label="Opportunity categories">

            {categories.map((cat) => (

              <button

                key={cat.name}

                type="button"

                role="tab"

                aria-selected={activeCategory === cat.name}

                className={`opp-pill-tab${activeCategory === cat.name ? ' is-active' : ''} ${cat.iconClass}`}

                onClick={() => {
                  setActiveCategory(cat.name);
                  setPage(1);
                }}

              >

                <span className="opp-pill-icon">{cat.icon}</span>

                {cat.label}

              </button>

            ))}

          </div>

          <a href="#featured" className="opp-pill-cta">

            View All Opportunities <ArrowRight size={16} strokeWidth={2.2} />

          </a>

        </Reveal>

        <Reveal>

          <form

            className="opp-filter-bar"

            onSubmit={(e) => {

              e.preventDefault();

            }}

          >

            <label className="opp-filter-search">

              <Search size={17} strokeWidth={2} />

              <input

                type="search"

                placeholder="Search opportunities, keywords or organizations..."

                value={query}

                onChange={(e) => setQuery(e.target.value)}

                aria-label="Search opportunities"

              />

            </label>

            <label className="opp-filter-select">

              <MapPin size={16} strokeWidth={2} />

              <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} aria-label="Location">

                <option value="all">Location</option>

                <option value="Midrand">Midrand, GP</option>

                <option value="Soweto">Soweto, GP</option>

                <option value="Johannesburg">Johannesburg, GP</option>

                <option value="Pretoria">Pretoria, GP</option>

                <option value="Cape Town">Cape Town, WC</option>

              </select>

              <ChevronDown size={15} strokeWidth={2} className="opp-filter-chevron" />

            </label>

            <label className="opp-filter-select">

              <LayoutGrid size={16} strokeWidth={2} />

              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} aria-label="Opportunity type">

                <option value="all">Opportunity Type</option>

                <option value="job">Job</option>

                <option value="small-shop">Small Shop</option>

                <option value="service">Service</option>

                <option value="stock-sell">Stock Sell</option>

                <option value="locally-produced">Locally Produced</option>

              </select>

              <ChevronDown size={15} strokeWidth={2} className="opp-filter-chevron" />

            </label>

            <label className="opp-filter-select">

              <BarChart3 size={16} strokeWidth={2} />

              <select

                value={experienceFilter}

                onChange={(e) => setExperienceFilter(e.target.value)}

                aria-label="Experience level"

              >

                <option value="all">Experience Level</option>

                <option value="Not required">Not required</option>

                <option value="Preferred">Preferred</option>

                <option value="Advantageous">Advantageous</option>

              </select>

              <ChevronDown size={15} strokeWidth={2} className="opp-filter-chevron" />

            </label>

            <label className="opp-filter-select">

              <Calendar size={16} strokeWidth={2} />

              <select value={deadlineFilter} onChange={(e) => setDeadlineFilter(e.target.value)} aria-label="Deadline">

                <option value="all">Deadline</option>

                <option value="3 days">Posted 3 days ago</option>

                <option value="4 days">Posted 4 days ago</option>

                <option value="5 days">Posted 5 days ago</option>

                <option value="1 week">Posted 1 week ago</option>

                <option value="2 days">Posted 2 days ago</option>

              </select>

              <ChevronDown size={15} strokeWidth={2} className="opp-filter-chevron" />

            </label>

          </form>

        </Reveal>

        <div className="opp-explore-toolbar">

          <div className="opp-explore-toolbar-left">

            <button type="button" className="opp-reset-filters" onClick={resetFilters}>

              Reset filters

            </button>

          </div>

          <div className="opp-explore-toolbar-right">

            <label className="opp-sort-select-wrap">

              <span className="opp-sort-label">Sort by</span>

              <select

                className="opp-sort-select"

                value={sortBy}

                onChange={(e) => setSortBy(e.target.value as SortKey)}

              >

                <option value="Recommended">Recommended</option>

                <option value="Latest">Latest</option>

                <option value="Most Popular">Most Popular</option>

                <option value="Near Me">Near Me</option>

              </select>

            </label>

            <div className="opp-view-toggles">

              <button

                type="button"

                className={`opp-view-btn${viewMode === 'grid' ? ' is-active' : ''}`}

                aria-label="Grid view"

                onClick={() => setViewMode('grid')}

              >

                <LayoutGrid size={16} />

              </button>

              <button

                type="button"

                className={`opp-view-btn${viewMode === 'list' ? ' is-active' : ''}`}

                aria-label="List view"

                onClick={() => setViewMode('list')}

              >

                <List size={16} />

              </button>

            </div>

          </div>

        </div>

        <div className="opp-featured-head" id="featured">

          <div>

            <h3 className="opp-featured-title">Featured Opportunities</h3>

            <p className="opp-featured-count">

              {loadingList
                ? 'Loading opportunities…'
                : `Showing ${filtered.length} matching ${filtered.length === 1 ? 'opportunity' : 'opportunities'}${
                    usingApi ? ` · ${totalCount} total` : ''
                  }`}

            </p>

          </div>

          <p className="opp-featured-curated">

            <ShieldCheck size={15} /> Curated listings

          </p>

        </div>

        <div className={`opp-listings-grid${viewMode === 'list' ? ' opp-listings-grid-list' : ''}`}>

          {filtered.map((item, i) => (

            <Reveal key={item.id || item.title} delay={i * 0.04}>

              <article className={`opp-feat-card opp-feat-card-${item.tag}${viewMode === 'list' ? ' opp-feat-card-list' : ''}`}>

                <button type="button" className="opp-feat-media-btn" onClick={() => setSelected(item)}>

                  <div className="opp-feat-media">

                    <img src={item.image} alt={item.imageAlt} className="opp-feat-image" />

                    <span className="opp-feat-tag">{item.tagLabel}</span>

                  </div>

                </button>

                <div className="opp-feat-body">

                  <h3 className="opp-feat-card-title">{item.title}</h3>

                  <p className="opp-feat-meta-line">

                    <MapPin size={14} strokeWidth={1.8} />

                    <span>{item.location}</span>

                  </p>

                  <p className="opp-feat-meta-line">

                    <DetailIcon type={item.detailIcon} />

                    <span>{item.detail}</span>

                  </p>

                  <div className="opp-feat-footer">

                    <button type="button" className="opp-feat-link" onClick={() => setSelected(item)}>

                      View Details

                    </button>

                    <button

                      type="button"

                      className="opp-feat-ext"

                      aria-label={`View details for ${item.title}`}

                      onClick={() => setSelected(item)}

                    >

                      <ExternalLink size={15} strokeWidth={1.9} />

                    </button>

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

        {usingApi && totalPages > 1 && (
          <div className="opp-pager" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <button
              type="button"
              className="btn btn-outline"
              disabled={page <= 1 || loadingList}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>
            <span className="opp-featured-count" style={{ alignSelf: 'center' }}>
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              className="btn btn-outline"
              disabled={page >= totalPages || loadingList}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        )}

        {filtered.length === 0 && (

          <div className="opp-empty-state">

            <p>No opportunities match your search. Try another keyword or reset filters.</p>

            <button type="button" className="btn btn-outline" onClick={resetFilters}>

              Reset Filters

            </button>

          </div>

        )}

      </div>

      {selected && <OpportunityDetailModal item={selected} onClose={() => setSelected(null)} />}

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
    <FindOpportunities />
    <OpportunityGuidance />
    <WhyChoose />
  </>
);

export default Opportunities;
