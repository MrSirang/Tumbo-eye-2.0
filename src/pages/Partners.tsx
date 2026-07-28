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
  Briefcase,
  Users,
  Handshake,
  Star,
  CheckCircle2,
} from 'lucide-react';

import partnersHero from '../assets/partners-hero-focus.png';
import partnersJoinIcon from '../assets/partners-join-icon-v2.png';
import partnersStrategicCta from '../assets/partners-strategic-event.png';
import logoOxford from '../assets/partner-logo-oxford.png';
import logoTechnova from '../assets/partner-logo-technova.png';
import logoNgo from '../assets/partner-logo-ngo.png';
import photoJames from '../assets/partner-testimonial-james.png';
import photoSarah from '../assets/partner-testimonial-sarah.png';
import photoMaria from '../assets/team-amina-hassan.png';

/* ==========================================================================
   HERO
   ========================================================================== */
const PartnersHero: React.FC = () => (
  <section className="section section-blue-bg partners-hero-section">
    <div className="container partners-hero-grid">
      <div className="partners-hero-content">
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
          <button className="btn btn-primary" onClick={() => alert('Partner with Tumbo Eye')}>
            Partner with Tumbo Eye <ArrowRight size={16} />
          </button>
          <button className="btn btn-outline" onClick={() => alert('Schedule a Meeting')}>
            Schedule a Meeting
          </button>
          <a href="#categories" className="partners-hidden-anchor" aria-hidden="true">
            Explore Partnership Opportunities
          </a>
        </div> 
      </div>
      <div className="partners-hero-visual">
        <img
          src={partnersHero}
          alt="Professionals collaborating through Tumbo Eye 2.0 partnerships"
          className="partners-hero-img"
        />
      </div>
    </div>
  </section>
);

/* ==========================================================================
   WHY PARTNER WITH US
   ========================================================================== */
const WhyPartner: React.FC = () => {
  const benefits = [
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
        <div className="partners-why-card">
          <div className="text-center partners-why-header">
            <div className="section-tag">PARTNER SUCCESS STORIES</div>
            <h2 className="partners-page-title">
              Partnerships Creating <span className="highlight-blue">Real Impact</span>
            </h2>
            <p className="partners-page-subtitle">
              Discover how partnerships are working with Tumbo to empower communities, expand
              opportunities and create measurable social impact.
            </p>
          </div>

          <div className="partners-why-grid partners-why-grid-three">
            {benefits.map((item) => (
              <article key={item.title} className="partners-why-item">
                <div className="partners-why-icon">{item.icon}</div>
                <h3 className="partners-why-item-title">{item.title}</h3>
                <p className="partners-why-item-desc">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="partners-blue-banner">
            <div className="partners-blue-banner-copy">
              <p className="partners-blue-banner-eyebrow">PARTNERSHIP OPPORTUNITIES</p>
              <h3 className="partners-blue-banner-title">Join Hundreds of Trusted Partners</h3>
              <p className="partners-blue-banner-desc">
                Become part of South Africa&apos;s Digital Inclusion Ecosystem and help create opportunities that transform communities.
              </p>
              <button className="btn btn-white" onClick={() => alert('Become a Partner')}>
                Become a Partner
              </button>
            </div>
            <div className="partners-blue-banner-art" aria-hidden="true">
              <img src={partnersJoinIcon} alt="" className="partners-blue-banner-img-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
        <div className="text-center">
          <div className="section-tag">PARTNERSHIP CATEGORIES</div>
          <h2 className="partners-page-title">
            Who Can Partner <span className="highlight-blue">With Us</span>
          </h2>
          <p className="partners-page-subtitle">
            We collaborate with organisations across multiple sectors to create sustainable
            opportunities and strengthen communities throughout South Africa.
          </p>
        </div>

        <div className="partners-categories-grid">
          {categories.map((cat) => (
            <article key={cat.num} className="partners-category-card">
              <div className="partners-category-top">
                <div className="partners-category-icon">{cat.icon}</div>
                <span className="partners-category-num">{cat.num}</span>
              </div>
              <h3 className="partners-category-title">{cat.title}</h3>
              <p className="partners-category-desc">{cat.desc}</p>
            </article>
          ))}
        </div>

        <div className="partners-categories-cta">
          <h3 className="partners-categories-cta-title">
            Find the Right Partnership for Your Organization
          </h3>
          <p className="partners-categories-cta-desc">
            Let&apos;s work together to deliver opportunities that empower and strengthen communities.
          </p>
          <button className="btn btn-primary" onClick={() => alert('Explore Partnership Options')}>
            Explore Partnership Options <ArrowRight size={16} />
          </button>
        </div>
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
      icon: <FileText size={18} strokeWidth={1.75} />,
      title: 'Connect',
      desc: 'Meet with our partnership team and align objectives.',
      active: false,
    },
    {
      num: 2,
      icon: <Shuffle size={18} strokeWidth={1.75} />,
      title: 'Plan',
      desc: 'Collaboratively design the right partnership model.',
      active: true,
    },
    {
      num: 3,
      icon: <ClipboardList size={18} strokeWidth={1.75} />,
      title: 'Launch',
      desc: 'Deliver opportunities and community programmes together.',
      active: false,
    },
    {
      num: 4,
      icon: <TrendingUp size={18} strokeWidth={1.75} />,
      title: 'Measure',
      desc: 'Track social impact and strengthen long-term outcomes.',
      active: false,
    },
  ];

  return (
    <section className="section partners-process-section">
      <div className="container">
        <div className="partners-process-panel">
          <div className="text-center">
            <div className="section-tag">HOW IT WORKS</div>
            <h2 className="partners-page-title">
              Our Simple Partnership <span className="highlight-blue">Process</span>
            </h2>
            <p className="partners-page-subtitle">
              Become a strategic partner in four simple steps and start creating measurable impact.
            </p>
          </div>

          <div className="partners-process-track" aria-hidden="true">
            {steps.map((step, i) => (
              <React.Fragment key={step.num}>
                <div className="partners-process-node">{step.num}</div>
                {i < steps.length - 1 && <div className="partners-process-line" />}
              </React.Fragment>
            ))}
          </div>

          <div className="partners-process-grid">
            {steps.map((step) => (
              <article
                key={step.num}
                className={`partners-process-card ${step.active ? 'is-active' : ''}`}
              >
                <div className="partners-process-icon">{step.icon}</div>
                <h3 className="partners-process-title">{step.title}</h3>
                <p className="partners-process-desc">{step.desc}</p>
              </article>
            ))}
          </div>

          <div className="partners-journey-banner">
            <div className="partners-journey-copy">
              <h3 className="partners-journey-title">Ready to Start Your Partnership Journey?</h3>
              <p className="partners-journey-desc">
                Join businesses, municipalities, NGOs and government institutions creating opportunities through Tumbo.
              </p>
              <button className="btn btn-white" onClick={() => alert('Apply for Partnership')}>
                Apply for Partnership
              </button>
            </div>
            <div className="partners-journey-art" aria-hidden="true">
              <img src={partnersJoinIcon} alt="" className="partners-journey-img-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   TESTIMONIALS
   ========================================================================== */
const PartnerTestimonials: React.FC = () => {
  const testimonials = [
    {
      logo: logoOxford,
      logoAlt: 'University of Oxford',
      badgeIcon: <GraduationCap size={14} />,
      badge: 'University Partner',
      org: 'Oxford University',
      quote:
        'Partnering with Tumbo Eye 2.0 helped us connect with talented students and expand our global outreach.',
      photo: photoJames,
      name: 'Dr. James Wilson',
      role: 'Head of Recruitment',
    },
    {
      logo: logoTechnova,
      logoAlt: 'Technova',
      badgeIcon: <Briefcase size={14} />,
      badge: 'Corporate Partner',
      org: 'Technova Solutions',
      quote:
        'We discovered exceptional talent and built a stronger recruitment pipeline through this partnership.',
      photo: photoSarah,
      name: 'Sarah Miller',
      role: 'Chief Talent Officer',
    },
    {
      logo: logoNgo,
      logoAlt: 'NGO Partners',
      badgeIcon: <Users size={14} />,
      badge: 'NGO Partner',
      org: 'Youth Impact Foundation',
      quote:
        "Together, we've empowered thousands of young people with education and career opportunities.",
      photo: photoMaria,
      name: 'Maria Lopez',
      role: 'Founder & Director',
    },
  ];

  return (
    <section className="section partners-testimonials-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">TESTIMONIALS</div>
          <h2 className="partners-page-title">
            See What Our Partners <span className="highlight-blue">Say</span>
          </h2>
          <p className="partners-page-subtitle">
            Hear from universities, companies, NGOs, and organizations that have partnered with Tumbo Eye 2.0 to create meaningful impact.
          </p>
        </div>

        <div className="partners-testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.org} className="partners-testimonial-card">
              <div className="partners-testimonial-logo-wrap">
                <img src={t.logo} alt={t.logoAlt} className="partners-testimonial-logo" />
              </div>
              <div className="partners-testimonial-badge">
                <span className="partners-testimonial-badge-icon">{t.badgeIcon}</span>
                {t.badge}
              </div>
              <h3 className="partners-testimonial-org">{t.org}</h3>
              <p className="partners-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="partners-testimonial-footer">
                <img src={t.photo} alt={t.name} className="partners-testimonial-photo" />
                <div>
                  <p className="partners-testimonial-name">{t.name}</p>
                  <p className="partners-testimonial-role">{t.role}</p>
                  <div className="partners-testimonial-stars" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="partners-join-banner">
          <div className="partners-join-banner-icon" aria-hidden="true">
            <Handshake size={36} strokeWidth={1.5} />
            <CheckCircle2 size={18} className="partners-join-banner-check" />
          </div>
          <div className="partners-join-banner-copy">
            <h3 className="partners-join-banner-title">Join Hundreds of Trusted Partners</h3>
            <p className="partners-join-banner-desc">
              Become part of a growing network committed to creating opportunity.
            </p>
          </div>
          <button className="btn btn-white" onClick={() => alert('Become a Partner')}>
            Become a Partner
          </button>
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
            <Link to="/partners" className="btn btn-white">
              Partner with Tumbo Eye <ArrowRight size={15} />
            </Link>
            <Link to="/partners" className="btn partners-strategic-outline">
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
    <PartnershipCategories />
    <PartnershipProcess />
    <StrategicPartnerCTA />
  </>
);

export default Partners;
