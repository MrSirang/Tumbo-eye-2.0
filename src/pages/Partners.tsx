import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Rocket,
  TrendingUp,
  Building2,
  Shield,
  Landmark,
  Sparkles,
  FileText,
  Shuffle,
  ClipboardList,
  Users,
  Target,
  Handshake,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

import partnersHero from '../assets/partners-hero-focus.png';
import partnersJoinIcon from '../assets/partners-join-icon-v2.png';
import partnersStrategicCta from '../assets/partners-strategic-event.png';

const placeholderPartners = [
  'Business Partners',
  'Municipal Partners',
  'NGO Partners',
  'Education Partners',
  'Development Partners',
  'Government Partners',
];

/* ==========================================================================
   HERO
   ========================================================================== */
const PartnersHero: React.FC = () => (
  <section className="section section-blue-bg partners-hero-section">
    <div className="container partners-hero-grid">
      <Reveal className="partners-hero-content">
        <p className="partners-hero-brand">Tumbo</p>
        <div className="hero-tag-pill">PARTNERS</div>
        <h1 className="partners-hero-title">
          Let&apos;s Build Communities <span className="highlight-blue">Together</span>
        </h1>
        <p className="partners-hero-desc">
          Partner with Tumbo to connect with verified communities, measure social impact and create
          sustainable opportunities across South Africa. Together, we can strengthen communities
          through innovation, collaboration and digital inclusion.
        </p>
        <div className="hero-btn-group">
          <Link to="/contact" className="btn btn-primary">
            Partner with Tumbo Eye <ArrowRight size={16} />
          </Link>
          <a href="#categories" className="btn btn-outline">
            Explore Partnership Options
          </a>
        </div>
        <p className="partners-coming-soon-note">
          Additional partner profiles — pending organisation content
        </p>
      </Reveal>
      <Reveal className="partners-hero-visual" delay={0.1}>
        <img
          src={partnersHero}
          alt="Professionals collaborating through Tumbo partnerships"
          className="partners-hero-img"
        />
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   WHY PARTNER / IMPACT
   ========================================================================== */
const WhyPartner: React.FC = () => {
  const benefits = [
    {
      icon: <Users size={20} strokeWidth={1.9} />,
      title: 'Verified Community Reach',
      desc: 'Connect with verified communities using trusted data and inclusive digital channels.',
      placeholder: false,
    },
    {
      icon: <Target size={20} strokeWidth={1.9} />,
      title: 'Measurable Social Impact',
      desc: 'Track CSI, B-BBEE and programme outcomes with clearer reporting and accountability.',
      placeholder: false,
    },
    {
      icon: <Handshake size={20} strokeWidth={1.9} />,
      title: 'Strategic Collaboration',
      desc: 'Work with municipalities, NGOs, education institutions and development partners in one ecosystem.',
      placeholder: false,
    },
  ];

  const impactStories = [
    {
      icon: <Globe size={20} strokeWidth={1.9} />,
      title: 'PCB Power Valves & Nkangala TVET Bursaries',
      desc: 'Supporting deserving students through bursary programmes that create pathways to higher education and employment.',
    },
    {
      icon: <Shuffle size={20} strokeWidth={1.9} />,
      title: 'PPT Mpumalanga U12 Netball Sponsorship',
      desc: 'Empowering young athletes through grassroots sports development and community sponsorship.',
    },
    {
      icon: <Rocket size={20} strokeWidth={1.9} />,
      title: 'School of Excellence (SoE) Social Club',
      desc: 'Creating opportunities for youth through education, leadership and community sporting initiatives.',
    },
  ];

  return (
    <section className="section partners-why-section">
      <div className="container">
        <Reveal>
          <div className="partners-why-card">
            <div className="text-center partners-why-header">
              <div className="section-tag">WHY PARTNER WITH TUMBO</div>
              <h2 className="partners-page-title">
                Partnerships Creating <span className="highlight-blue">Real Impact</span>
              </h2>
              <p className="partners-page-subtitle">
                Discover how organisations work with Tumbo to empower communities, expand
                opportunities and create measurable social impact.
              </p>
            </div>

            <div className="partners-why-grid partners-why-grid-three">
              {benefits.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="partners-why-item">
                    <div className="partners-why-icon">{item.icon}</div>
                    <h3 className="partners-why-item-title">{item.title}</h3>
                    <p className="partners-why-item-desc">{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="partners-impact-label text-center">
              <h3 className="partners-impact-heading">Partner Success Stories</h3>
              <p className="partners-impact-sub">
                Highlighted community programmes delivered with partners.
              </p>
            </div>

            <div className="partners-why-grid partners-why-grid-three">
              {impactStories.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="partners-why-item partners-why-item-story">
                    <div className="partners-why-icon">{item.icon}</div>
                    <h3 className="partners-why-item-title">{item.title}</h3>
                    <p className="partners-why-item-desc">{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="partners-blue-banner">
                <div className="partners-blue-banner-copy">
                  <p className="partners-blue-banner-eyebrow">PARTNERSHIP OPPORTUNITIES</p>
                  <h3 className="partners-blue-banner-title">Join Hundreds of Trusted Partners</h3>
                  <p className="partners-blue-banner-desc">
                    Become part of South Africa&apos;s digital community empowerment platform and help
                    create opportunities that transform communities.
                  </p>
                  <Link to="/contact" className="btn btn-white">
                    Become a Partner
                  </Link>
                </div>
                <div className="partners-blue-banner-art" aria-hidden="true">
                  <img src={partnersJoinIcon} alt="" className="partners-blue-banner-img-icon" />
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ==========================================================================
   PLACEHOLDER PARTNER STRIP
   ========================================================================== */
const PartnerPlaceholders: React.FC = () => (
  <section className="section partners-logos-section">
    <div className="container">
      <Reveal className="text-center">
        <div className="section-tag">OUR NETWORK</div>
        <h2 className="partners-page-title">
          Growing With Trusted <span className="highlight-blue">Partners</span>
        </h2>
        <p className="partners-page-subtitle">
          Detailed partner profiles and logos will be published here once organisation information
          is supplied.
        </p>
      </Reveal>
      <div className="partners-placeholder-grid">
        {placeholderPartners.map((name, i) => (
          <Reveal key={name} delay={i * 0.04}>
            <article className="partners-placeholder-card">
              <span className="partners-placeholder-badge">Coming Soon</span>
              <div className="partners-placeholder-mark" aria-hidden="true">
                <Building2 size={22} />
              </div>
              <h3>{name}</h3>
              <p>Official partner details pending.</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ==========================================================================
   PARTNERSHIP CATEGORIES
   ========================================================================== */
const PartnershipCategories: React.FC = () => {
  const categories = [
    {
      num: '01',
      icon: <GraduationCap size={20} strokeWidth={1.75} />,
      title: 'Businesses',
      desc: 'Connect with verified communities and grow local economic inclusion.',
    },
    {
      num: '02',
      icon: <Building2 size={20} strokeWidth={1.75} />,
      title: 'Municipalities',
      desc: 'Coordinate civic opportunities and targeted social impact initiatives.',
    },
    {
      num: '03',
      icon: <Shield size={20} strokeWidth={1.75} />,
      title: 'NGOs',
      desc: 'Reach vulnerable communities with programmes and support services.',
    },
    {
      num: '04',
      icon: <Landmark size={20} strokeWidth={1.75} />,
      title: 'Government',
      desc: 'Align with national priorities using inclusive digital delivery channels.',
    },
    {
      num: '05',
      icon: <Rocket size={20} strokeWidth={1.75} />,
      title: 'Educational Institutions',
      desc: 'Connect learners with opportunities, bursaries and practical pathways.',
    },
    {
      num: '06',
      icon: <Sparkles size={20} strokeWidth={1.75} />,
      title: 'Development Partners',
      desc: 'Measure programme outcomes through trusted reporting and collaboration.',
    },
  ];

  return (
    <section id="categories" className="section partners-categories-section">
      <div className="container">
        <Reveal className="text-center">
          <div className="section-tag">PARTNERSHIP CATEGORIES</div>
          <h2 className="partners-page-title">
            Who Can Partner <span className="highlight-blue">With Us</span>
          </h2>
          <p className="partners-page-subtitle">
            We collaborate with organisations across multiple sectors to create sustainable
            opportunities and strengthen communities throughout South Africa.
          </p>
        </Reveal>

        <div className="partners-categories-grid">
          {categories.map((cat, i) => (
            <Reveal key={cat.num} delay={i * 0.04}>
              <article className="partners-category-card">
                <div className="partners-category-top">
                  <div className="partners-category-icon">{cat.icon}</div>
                  <span className="partners-category-num">{cat.num}</span>
                </div>
                <h3 className="partners-category-title">{cat.title}</h3>
                <p className="partners-category-desc">{cat.desc}</p>
                <Link to="/contact" className="partners-category-link">
                  Partner as {cat.title} <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="partners-categories-cta">
          <h3 className="partners-categories-cta-title">
            Find the Right Partnership for Your Organization
          </h3>
          <p className="partners-categories-cta-desc">
            Let&apos;s work together to deliver opportunities that empower and strengthen communities.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Explore Partnership Options <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

/* ==========================================================================
   HOW IT WORKS
   ========================================================================== */
const PartnershipProcess: React.FC = () => {
  const steps = [
    {
      num: 1,
      icon: <FileText size={20} strokeWidth={1.75} />,
      title: 'Connect',
      desc: 'Meet with our partnership team and align objectives.',
    },
    {
      num: 2,
      icon: <Shuffle size={20} strokeWidth={1.75} />,
      title: 'Plan',
      desc: 'Collaboratively design the right partnership model.',
    },
    {
      num: 3,
      icon: <ClipboardList size={20} strokeWidth={1.75} />,
      title: 'Launch',
      desc: 'Deliver opportunities and community programmes together.',
    },
    {
      num: 4,
      icon: <TrendingUp size={20} strokeWidth={1.75} />,
      title: 'Measure',
      desc: 'Track social impact and strengthen long-term outcomes.',
    },
  ];

  return (
    <section className="section partners-process-section">
      <div className="container">
        <div className="partners-process-panel">
          <Reveal className="text-center partners-process-header">
            <div className="section-tag">HOW IT WORKS</div>
            <h2 className="partners-page-title">
              Our Simple Partnership <span className="highlight-blue">Process</span>
            </h2>
            <p className="partners-page-subtitle">
              Become a strategic partner in four simple steps and start creating measurable impact.
            </p>
          </Reveal>

          <div className="partners-process-flow">
            <div className="partners-process-track" aria-hidden="true">
              {steps.map((step, i) => (
                <React.Fragment key={step.num}>
                  <div className="partners-process-node">{step.num}</div>
                  {i < steps.length - 1 && <div className="partners-process-line" />}
                </React.Fragment>
              ))}
            </div>

            <div className="partners-process-grid">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.08}>
                  <article className="partners-process-card">
                    <div className="partners-process-icon" aria-hidden="true">
                      {step.icon}
                    </div>
                    <h3 className="partners-process-title">{step.title}</h3>
                    <p className="partners-process-desc">{step.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="partners-journey-banner">
              <div className="partners-journey-copy">
                <h3 className="partners-journey-title">Ready to Start Your Partnership Journey?</h3>
                <p className="partners-journey-desc">
                  Join businesses, municipalities, NGOs and government institutions creating
                  opportunities through Tumbo.
                </p>
                <Link to="/contact" className="btn partners-journey-btn">
                  Apply for Partnership <ArrowRight size={15} />
                </Link>
              </div>
              <div className="partners-journey-art" aria-hidden="true">
                <img src={partnersJoinIcon} alt="" className="partners-journey-img-icon" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   STRATEGIC PARTNER CTA
   ========================================================================== */
const StrategicPartnerCTA: React.FC = () => (
  <section className="section partners-strategic-section">
    <div className="container">
      <Reveal>
        <div className="partners-strategic-panel">
          <div className="partners-strategic-copy">
            <div className="partners-strategic-pill">LET&apos;S BUILD THE FUTURE TOGETHER</div>
            <h2 className="partners-strategic-title">
              Ready to Become Our Next Strategic Partner?
            </h2>
            <p className="partners-strategic-desc">
              Whether you&apos;re a business, municipality, government department, NGO or development
              partner, Tumbo helps you connect with verified communities, measure impact and create
              sustainable opportunities.
            </p>
            <div className="partners-strategic-actions">
              <Link to="/contact" className="btn btn-white">
                Partner with Tumbo Eye <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn partners-strategic-outline">
                Schedule a Meeting
              </Link>
            </div>
          </div>
          <div className="partners-strategic-visual">
            <img
              src={partnersStrategicCta}
              alt="Partners shaking hands for greater impact"
              className="partners-strategic-img"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   PAGE
   ========================================================================== */
export const Partners: React.FC = () => (
  <>
    <PartnersHero />
    <WhyPartner />
    <PartnerPlaceholders />
    <PartnershipCategories />
    <PartnershipProcess />
    <StrategicPartnerCTA />
  </>
);

export default Partners;
