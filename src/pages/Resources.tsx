import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Download,
  FileText,
  Calculator,
  Mic,
  Box,
  ArrowLeftRight,
  Atom,
  Mail,
  Lock,
} from 'lucide-react';

import resourcesHero from '../assets/resources-hero.png';

import freePdf from '../assets/res-free-pdf.png';
import freeChecklist from '../assets/res-free-checklist.png';
import freeScholarship from '../assets/res-free-scholarship.png';
import freeEbook from '../assets/res-free-ebook.png';
import freeCoverLetter from '../assets/res-free-cover-letter.png';
import freeInterviewMic from '../assets/res-free-scholarship-alt.png';
import freeCtaBox from '../assets/res-free-cta-box.png';

import featCareer from '../assets/res-free-career-planning.png';
import featDigital from '../assets/res-free-resume-promo.png';
import featResume from '../assets/res-free-folder-bin.png';
import featDevbook from '../assets/res-free-devbook.png';
import featTeamAi from '../assets/res-free-team-ai.png';

import learnCareer from '../assets/res-free-photo-yellow.png';
import learnBusiness from '../assets/res-free-photo-workshop.png';
import learnLeadership from '../assets/res-free-photo-woman.png';
import learnCtaPhoto from '../assets/res-free-photo-pink.png';

import whyAts from '../assets/res-why-ats.png';
import whyGrad from '../assets/res-why-grad.png';
import whyBook from '../assets/res-why-book.png';
import whyDocPen from '../assets/res-why-doc-pen.png';
import whyPhoto from '../assets/res-why-photo.png';

const partnerLogos = [
  'Microsoft',
  'United Nations',
  'Vodacom',
  'City of Joburg',
];

const resourceCards = [
  {
    title: 'Career Guides',
    desc: 'Discover tips on crafting CVs, interview preparation, career planning and more to land your dream job.',
    icon: <FileText size={22} strokeWidth={2} />,
  },
  {
    title: 'Scholarships & Funding',
    desc: 'Find opportunities for scholarships, grants and financial support specifically for students, entrepreneurs and community projects.',
    icon: <Calculator size={22} strokeWidth={2} />,
  },
  {
    title: 'Business Resources',
    desc: 'Access tools to build and grow your business, including templates, financial planning guides and market research insights.',
    icon: <Mic size={22} strokeWidth={2} />,
  },
  {
    title: 'Community Development',
    desc: 'Guidance on community projects, volunteer initiatives and tools to help you create a positive impact in your neighborhood and beyond.',
    icon: <Box size={22} strokeWidth={2} />,
  },
  {
    title: 'Government Services',
    desc: 'Find links to essential national and local services, application forms and information on public programs and initiatives.',
    icon: <ArrowLeftRight size={22} strokeWidth={2} />,
  },
  {
    title: 'Digital Skills',
    desc: 'Enhance your digital knowledge with learning resources on basic software, internet safety and advanced technology skills.',
    icon: <Atom size={22} strokeWidth={2} />,
  },
];

const freeDownloads = [
  {
    title: 'PDF Guides',
    desc: 'Professional resume template.',
    image: freePdf,
  },
  {
    title: 'Job Search Checklist',
    desc: 'Everything you need before applying.',
    image: freeChecklist,
  },
  {
    title: 'Scholarship Application Kit',
    desc: 'Documents and application guide.',
    image: freeScholarship,
  },
  {
    title: 'Career Planning ebook',
    desc: 'Complete career planning guide.',
    image: freeEbook,
  },
  {
    title: 'Interview Preparation Guide',
    desc: 'Most asked interview questions.',
    image: freeInterviewMic,
  },
  {
    title: 'Cover Letter Template',
    desc: 'Professional cover letter format.',
    image: freeCoverLetter,
  },
];

const featuredResources = [
  {
    title: 'Career Development Guide',
    desc: 'Learn how to build your career, prepare for interviews and improve your employability.',
    image: featCareer,
    tag: 'Career Guide',
    tagTone: 'blue',
    action: 'Read More',
  },
  {
    title: 'Scholarship & Bursary Handbook',
    desc: 'Find funding opportunities and application tips for students.',
    image: featResume,
    tag: 'Career Guide',
    tagTone: 'green',
    action: 'Download',
    download: true,
  },
  {
    title: 'Business Startup Toolkit',
    desc: 'Essential resources for entrepreneurs launching and growing a business.',
    image: featDevbook,
    tag: 'Interview Guide',
    tagTone: 'blue',
    action: 'Read Guide',
  },
  {
    title: 'Digital Skills Learning Pack',
    desc: "Develop practical digital skills for today's workplace.",
    image: featDigital,
    tag: 'Scholarship Guide',
    tagTone: 'blue',
    action: 'Learn More',
  },
  {
    title: 'Community Development Toolkit',
    desc: 'Resources supporting local projects and community initiatives.',
    image: featTeamAi,
    tag: 'AI Resources',
    tagTone: 'green',
    action: 'Explore',
  },
  {
    title: 'Government Services Guide',
    desc: 'Access public services, programmes and support information.',
    image: featDevbook,
    tag: 'Career Toolkit',
    tagTone: 'blue',
    action: 'Download',
    download: true,
  },
];

const learningHub = [
  {
    title: 'Career Readiness',
    desc: 'Prepare for the workplace with CV writing, interview preparation, communication skills and career planning resources.',
    image: learnCareer,
    action: 'Start Learning',
  },
  {
    title: 'Entrepreneurship',
    desc: 'Discover how to start, manage and grow a successful business through practical guides, mentorship resources and business development tools.',
    image: learnBusiness,
    action: 'Explore Business',
  },
  {
    title: 'Leadership Development',
    desc: 'Build confidence, leadership skills and decision-making abilities through training programmes and community leadership resources.',
    image: learnLeadership,
    action: 'Start Learning',
  },
];

/* ==========================================================================
   HERO
   ========================================================================== */
const ResourcesHero: React.FC = () => (
  <section className="section section-blue-bg res-page-hero">
    <div className="container res-page-hero-grid">
      <div className="res-page-hero-content">
        <div className="hero-tag-pill">RESOURCES</div>
        <h1 className="res-page-hero-title">
          Knowledge, Tools & Resources for{' '}
          <span className="eco2-title-accent">Every Opportunity</span>
        </h1>
        <p className="res-page-hero-desc">
          Explore a growing library of trusted resources designed to help individuals, businesses,
          communities and government institutions succeed. Across guides, toolkits, learning
          materials, funding information and digital support — all in one place.
        </p>
        <div className="hero-btn-group">
          <a href="#resource-library" className="btn btn-primary">
            Explore Resources <ChevronDown size={16} />
          </a>
          <a href="#free-resources" className="btn btn-outline">
            <Download size={15} /> Download Guides
          </a>
        </div>
        <div className="res-partner-logos" aria-label="Trusted partners">
          {partnerLogos.map((name) => (
            <span key={name} className="res-partner-logo">
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="res-page-hero-visual">
        <img
          src={resourcesHero}
          alt="Community leader presenting Tumbo and EMA resources on stage"
          className="res-page-hero-img"
        />
      </div>
    </div>
  </section>
);

/* ==========================================================================
   RESOURCE LIBRARY
   ========================================================================== */
const ResourceLibrary: React.FC = () => (
  <section id="resource-library" className="section res-library-section">
    <div className="container">
      <div className="res-library-header text-center">
        <div className="section-tag">RESOURCE LIBRARY</div>
        <h2 className="res-library-title">
          Find the Right <span className="highlight-blue">Resource</span>
        </h2>
        <p className="res-library-subtitle">
          Search practical resources to support your career, education, business growth and community
          development.
        </p>
      </div>

      <div className="res-library-grid">
        {resourceCards.map((card) => (
          <article key={card.title} className="res-card">
            <div className="res-card-icon" aria-hidden="true">
              {card.icon}
            </div>
            <h3 className="res-card-title">{card.title}</h3>
            <p className="res-card-desc">{card.desc}</p>
            <div className="res-card-footer">
              <button
                className="res-card-arrow"
                onClick={() => alert(`Open ${card.title}`)}
                aria-label={`Open ${card.title}`}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="res-library-cta">
        <a href="#free-resources" className="btn btn-primary">
          Explore All Resources <ChevronDown size={16} />
        </a>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   FREE RESOURCES
   ========================================================================== */
const FreeResources: React.FC = () => (
  <section id="free-resources" className="section res-free-section">
    <div className="container">
      <div className="res-free-header text-center">
        <div className="section-tag">STAY AHEAD AND MENTOR</div>
        <h2 className="res-free-title">
          Free Resources <span className="highlight-blue">Ready to Use</span>
        </h2>
        <p className="res-free-subtitle">
          Download trusted templates, checklists, application guides and planning tools to support
          your journey.
        </p>
      </div>

      <div className="res-free-grid">
        {freeDownloads.map((item) => (
          <article key={item.title} className="res-free-card">
            <div className="res-free-card-visual">
              <img src={item.image} alt="" className="res-free-card-img" />
            </div>
            <h3 className="res-free-card-title">{item.title}</h3>
            <p className="res-free-card-desc">{item.desc}</p>
            <button
              className="res-free-download-btn"
              onClick={() => alert(`Download ${item.title}`)}
            >
              <Download size={15} /> Download
            </button>
          </article>
        ))}
      </div>

      <div className="res-free-banner">
        <img src={freeCtaBox} alt="" className="res-free-banner-img" />
        <div className="res-free-banner-copy">
          <h3 className="res-free-banner-title">Keep Learning, Keep Growing.</h3>
          <p className="res-free-banner-desc">
            Every new skill opens doors to more opportunities. Explore our learning hub and start
            the next step toward your personal, professional and community success.
          </p>
        </div>
        <a href="#learning-hub" className="btn btn-primary res-free-banner-btn">
          Browse Download Cards <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   FEATURED RESOURCES
   ========================================================================== */
const FeaturedResources: React.FC = () => (
  <section className="section res-featured-section">
    <div className="container">
      <div className="res-free-header text-center">
        <div className="section-tag">FEATURED RESOURCES</div>
        <h2 className="res-free-title">
          Explore Our Most Popular <span className="highlight-blue">Resources</span>
        </h2>
        <p className="res-free-subtitle">
          Discover our most valuable guides, templates and learning materials designed to help you
          grow.
        </p>
      </div>

      <div className="res-featured-grid">
        {featuredResources.map((card) => (
          <article key={card.title} className="res-feat-card">
            <div className="res-feat-card-media">
              <img src={card.image} alt="" className="res-feat-card-img" />
            </div>
            <div className="res-feat-card-body">
              <h3 className="res-feat-card-title">{card.title}</h3>
              <p className="res-feat-card-desc">{card.desc}</p>
              <div className="res-feat-card-footer">
                <span className={`res-feat-tag res-feat-tag-${card.tagTone}`}>{card.tag}</span>
                <button
                  className="res-feat-action"
                  onClick={() => alert(`${card.action}: ${card.title}`)}
                >
                  {card.download ? (
                    <>
                      Download <Download size={14} />
                    </>
                  ) : (
                    <>
                      {card.action} <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ==========================================================================
   LEARNING HUB
   ========================================================================== */
const LearningHub: React.FC = () => (
  <section id="learning-hub" className="section res-learn-section">
    <div className="container">
      <div className="res-free-header text-center">
        <div className="section-tag">LEARNING HUB</div>
        <h2 className="res-free-title">
          Build Skills. Unlock <span className="highlight-blue">Opportunities.</span>
        </h2>
        <p className="res-free-subtitle">
          Access educational content designed to help you gain knowledge, improve skills and prepare
          for future opportunities.
        </p>
      </div>

      <div className="res-learn-grid">
        {learningHub.map((card) => (
          <article key={card.title} className="res-learn-card">
            <div className="res-learn-card-media">
              <img src={card.image} alt="" className="res-learn-card-img" />
            </div>
            <div className="res-learn-card-body">
              <h3 className="res-learn-card-title">{card.title}</h3>
              <p className="res-learn-card-desc">{card.desc}</p>
              <div className="res-learn-card-footer">
                <span className="res-learn-meta">5 min read</span>
                <button
                  className="res-learn-action"
                  onClick={() => alert(`${card.action}: ${card.title}`)}
                >
                  {card.action} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="res-learn-banner">
        <img
          src={learnCtaPhoto}
          alt="Community facilitator leading a Tumbo learning session"
          className="res-learn-banner-img"
        />
        <div className="res-learn-banner-copy">
          <h3 className="res-learn-banner-title">Keep Learning. Keep Growing.</h3>
          <p className="res-learn-banner-desc">
            Every new skill opens the door to more opportunities. Explore our learning hub and take
            the next step towards your personal, professional and community success.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Browse Learning Hub')}>
          Browse Learning Hub <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   WHY TUMBO RESOURCES
   ========================================================================== */
const whyFeatures = [
  { title: 'Expert-Curated Content', image: whyAts },
  { title: 'Free Learning Materials', image: whyGrad },
  { title: 'Regular Updates', image: whyBook },
  { title: 'Trusted Information', image: whyDocPen },
];

const WhyTumboResources: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(email ? `Subscribed: ${email}` : 'Enter your email address');
  };

  return (
    <section className="section res-why-section">
      <div className="container res-why-grid">
        <div className="res-why-content">
          <div className="section-tag">WHY TUMBO RESOURCES</div>
          <h2 className="res-why-title">
            Trusted Resources for <span className="highlight-blue">Real Impact</span>
          </h2>
          <p className="res-why-desc">
            Every resource is created to support learning, employment, entrepreneurship and community
            development across South Africa.
          </p>

          <div className="res-why-features">
            {whyFeatures.map((item) => (
              <div key={item.title} className="res-why-feature">
                <div className="res-why-feature-icon">
                  <img src={item.image} alt="" />
                </div>
                <span className="res-why-feature-title">{item.title}</span>
              </div>
            ))}
          </div>

          <form className="res-why-form" onSubmit={handleSubscribe}>
            <div className="res-why-form-bar">
              <Mail size={18} className="res-why-form-mail" aria-hidden="true" />
              <input
                type="email"
                className="res-why-form-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary res-why-form-btn">
                Subscribe Now
              </button>
            </div>
            <p className="res-why-privacy">
              <Lock size={12} aria-hidden="true" /> we respect your privacy. unsubscribe anytime.
            </p>
          </form>
        </div>

        <div className="res-why-visual">
          <img
            src={whyPhoto}
            alt="Community facilitator presenting Tumbo learning resources to young adults"
            className="res-why-img"
          />
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   PAGE
   ========================================================================== */
export const Resources: React.FC = () => (
  <>
    <ResourcesHero />
    <ResourceLibrary />
    <FreeResources />
    <FeaturedResources />
    <LearningHub />
    <WhyTumboResources />
  </>
);

export default Resources;
