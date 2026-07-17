import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
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

import partnersHero from '../assets/partners-hero.png';
import partnersStrategicCta from '../assets/partners-strategic-cta.png';
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
          Building Strong Partnerships for{' '}
          <span className="highlight-blue">Greater Impact</span>
        </h1>
        <p className="partners-hero-desc">
          Collaborate with Tumbo Eye 2.0 to empower students, professionals, and communities through education, career opportunities, innovation, and meaningful partnerships.
        </p>
        <div className="hero-btn-group">
          <button className="btn btn-primary" onClick={() => alert('Become a Partner')}>
            Become a Partner <ArrowRight size={16} />
          </button>
          <a href="#categories" className="btn btn-outline">
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
      icon: <GraduationCap size={22} strokeWidth={1.75} />,
      title: 'Access Top Talent',
      desc: 'Connect with skilled students, professionals, and innovators ready to contribute.',
    },
    {
      icon: <Globe size={22} strokeWidth={1.75} />,
      title: 'Expand Your Network',
      desc: 'Join a growing ecosystem of universities, companies, NGOs, and government partners.',
    },
    {
      icon: <Rocket size={22} strokeWidth={1.75} />,
      title: 'Drive Innovation',
      desc: 'Collaborate on programs that create real opportunities and lasting change.',
    },
    {
      icon: <TrendingUp size={22} strokeWidth={1.75} />,
      title: 'Increase Your Impact',
      desc: 'Amplify your mission by reaching more people through our platform.',
    },
  ];

  return (
    <section className="section partners-why-section">
      <div className="container">
        <div className="partners-why-card">
          <div className="text-center partners-why-header">
            <div className="section-tag">WHY PARTNER WITH US</div>
            <h2 className="partners-page-title">
              Create Greater Impact <span className="highlight-blue">Together</span>
            </h2>
            <p className="partners-page-subtitle">
              Partnering with Tumbo Eye 2.0 means joining a mission-driven platform that connects people to opportunities and helps organizations create meaningful impact.
            </p>
          </div>

          <div className="partners-why-grid">
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
              <p className="partners-blue-banner-eyebrow">BUILDING THE FUTURE TOGETHER</p>
              <h3 className="partners-blue-banner-title">Join Our Growing Partner Network</h3>
              <button className="btn btn-white" onClick={() => alert('Become a Partner Today')}>
                Become a Partner Today <ArrowDown size={15} />
              </button>
            </div>
            <div className="partners-blue-banner-art" aria-hidden="true">
              <Handshake size={72} strokeWidth={1.25} />
              <CheckCircle2 size={28} className="partners-blue-banner-check" />
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
      title: 'Universities',
      desc: 'Collaborate on education, research, and student development.',
    },
    {
      num: '02',
      icon: <Building2 size={20} strokeWidth={1.75} />,
      title: 'Companies',
      desc: 'Hire top talent, sponsor programs, and support career growth.',
    },
    {
      num: '03',
      icon: <Shield size={20} strokeWidth={1.75} />,
      title: 'NGOs',
      desc: 'Work together on community projects and social impact initiatives.',
    },
    {
      num: '04',
      icon: <Landmark size={20} strokeWidth={1.75} />,
      title: 'Government',
      desc: 'Support national education, workforce, and innovation programs.',
    },
    {
      num: '05',
      icon: <Rocket size={20} strokeWidth={1.75} />,
      title: 'Startups',
      desc: 'Connect with emerging talent, mentors, and investors.',
    },
    {
      num: '06',
      icon: <Sparkles size={20} strokeWidth={1.75} />,
      title: 'Investors & Sponsors',
      desc: 'Fund scholarships, innovation programs, and entrepreneurial initiatives.',
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
            We collaborate with organizations across education, business, government, and innovation to create meaningful opportunities worldwide.
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
            Let&apos;s build something impactful together and create opportunities that change lives.
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
      title: 'Apply',
      desc: 'Submit your partnership application.',
      active: false,
    },
    {
      num: 2,
      icon: <Shuffle size={18} strokeWidth={1.75} />,
      title: 'Connect',
      desc: 'Meet with our partnership team.',
      active: true,
    },
    {
      num: 3,
      icon: <ClipboardList size={18} strokeWidth={1.75} />,
      title: 'Collaborate',
      desc: 'Plan and launch initiatives together.',
      active: false,
    },
    {
      num: 4,
      icon: <TrendingUp size={18} strokeWidth={1.75} />,
      title: 'Grow',
      desc: 'Measure impact and expand opportunities.',
      active: false,
    },
  ];

  return (
    <section className="section partners-process-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">HOW IT WORKS</div>
          <h2 className="partners-page-title">
            Our Simple Partnership <span className="highlight-blue">Process</span>
          </h2>
          <p className="partners-page-subtitle">
            Become a partner in just a few simple steps and start creating meaningful impact together.
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
              Join hands with Tumbo Eye 2.0 and be part of a community that empowers lives and builds a better future.
            </p>
            <button className="btn btn-white" onClick={() => alert('Apply for Partnership')}>
              Apply for Partnership
            </button>
          </div>
          <div className="partners-journey-art" aria-hidden="true">
            <Handshake size={80} strokeWidth={1.2} />
            <CheckCircle2 size={30} className="partners-journey-check" />
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
            Join universities, companies, NGOs, and organizations already creating opportunities and lasting impact through Tumbo Eye 2.0.
          </p>
          <div className="partners-strategic-actions">
            <Link to="/#testimonials" className="btn btn-white">
              Success Stories <ArrowDown size={15} />
            </Link>
            <Link to="/about" className="btn partners-strategic-outline">
              About Tumbo Eye
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
    <PartnerTestimonials />
    <StrategicPartnerCTA />
  </>
);

export default Partners;
