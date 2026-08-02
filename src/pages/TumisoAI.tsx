import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Clock3,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Compass,
  Users,
  Send,
  Briefcase,
  GraduationCap,
  FilePlus2,
  Share2,
  FileCheck2,
  UserRound,
  Bot,
  FileSearch,
  Headphones,
  Waypoints,
  Search,
  Headset,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import SplitText from '../components/SplitText';

import tumisoRobot from '../assets/tumiso-robot.png';
import tumisoRecoCta from '../assets/tumiso-reco-cta.png';
import tumisoFeatBanner from '../assets/tumiso-feat-banner.png';
import tumisoFeatCta from '../assets/tumiso-feat-cta.png';
import tumisoFeatRobot from '../assets/tumiso-feat-robot.png';
import tumisoFeatInterview from '../assets/tumiso-feat-interview.png';
import logoGoogle from '../assets/tumiso-logo-google.png';
import logoMicrosoft from '../assets/tumiso-logo-microsoft.png';
import logoShopify from '../assets/tumiso-logo-shopify.png';

const trustItems = [
  { icon: <Clock3 size={18} strokeWidth={2} />, label: '24/7 Personalised advice' },
  { icon: <ShieldCheck size={18} strokeWidth={2} />, label: 'Secured Data Solutions' },
  { icon: <Sparkles size={18} strokeWidth={2} />, label: 'Tailored AI tools' },
];

const jobCards = [
  {
    company: 'Google',
    role: 'UI Designer',
    logo: logoGoogle,
  },
  {
    company: 'Microsoft',
    role: 'UX Designer',
    logo: logoMicrosoft,
  },
  {
    company: 'Shopify',
    role: 'Product Designer',
    logo: logoShopify,
  },
];

const recommendations = [
  { title: 'Analytic Management', desc: 'Insights to grow your career path' },
  { title: 'Network & Education', desc: 'Courses, mentors and community links' },
  { title: 'Business Support', desc: 'Tools for entrepreneurs and SMEs' },
];

const topFeatures = [
  { icon: <MessageSquare size={18} />, label: 'AI Chat Box' },
  { icon: <Compass size={18} />, label: 'Personalized Guidance' },
  { icon: <Users size={18} />, label: 'Community & Tools' },
];

const smartCards = [
  {
    icon: <Briefcase size={22} strokeWidth={1.75} />,
    title: 'Employment Matching',
    desc: 'Matched job opportunities relevant to your profile.',
    action: 'View Jobs',
    to: '/opportunities',
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.75} />,
    title: 'Scholarships & Bursaries',
    desc: 'Funding opportunities tailored to your educational qualifications.',
    action: 'Explore Scholarships',
    to: '/opportunities',
  },
  {
    icon: <FilePlus2 size={22} strokeWidth={1.75} />,
    title: 'Skills Development',
    desc: 'Training programs and certifications that support career growth.',
    action: 'Start Learning',
    to: '/resources#learning-hub',
  },
  {
    icon: <Share2 size={22} strokeWidth={1.75} />,
    title: 'Grants & Funding',
    desc: 'Business and community funding opportunities.',
    action: 'View Grants',
    to: '/opportunities',
  },
  {
    icon: <FileCheck2 size={22} strokeWidth={1.75} />,
    title: 'Profile Improvement',
    desc: 'AI-powered recommendations to strengthen your profile.',
    action: 'Explore Support',
    to: '/ai-assistant#tumiso-chat',
  },
  {
    icon: <UserRound size={22} strokeWidth={1.75} />,
    title: 'Career Advice',
    desc: 'Professional guidance to plan your future with confidence.',
    action: 'Get Advice',
    to: '/ai-assistant#tumiso-chat',
  },
];

const aiFeatureCards = [
  {
    title: 'Personalized Recommendations',
    desc: 'Get AI-curated opportunities (jobs, education, etc.) based on your unique profile, skills and interest.',
    img: tumisoFeatRobot,
    imgClass: 'tumiso-aifeat-icon-img tumiso-aifeat-icon-robot',
    fallback: <Bot size={22} strokeWidth={1.75} />,
  },
  {
    title: 'Resume Analysis',
    desc: 'Upload your CV and let our AI provide feedback and personalized suggestions to improve your resume.',
    img: null as string | null,
    imgClass: '',
    fallback: <FileSearch size={24} strokeWidth={1.75} />,
  },
  {
    title: 'Interview Preparation',
    desc: 'Practice and build your confidence with tailored tips and mock interviews with AI-powered guidance.',
    img: tumisoFeatInterview,
    imgClass: 'tumiso-aifeat-icon-img tumiso-aifeat-icon-interview',
    fallback: <Headphones size={22} strokeWidth={1.75} />,
  },
  {
    title: 'Career Roadmap',
    desc: 'Create a clear professional path mapped with step-by-step guidance toward your goals and skills.',
    img: null as string | null,
    imgClass: '',
    fallback: <Waypoints size={22} strokeWidth={1.75} />,
  },
  {
    title: 'Smart Search',
    desc: 'Search for scholarships, internships, grants, and social programs with ease and intelligence.',
    img: null as string | null,
    imgClass: '',
    fallback: <Search size={22} strokeWidth={1.75} />,
  },
  {
    title: '24/7 AI Support',
    desc: 'Get instant answers to your questions and support anytime, anywhere through your AI Assistant.',
    img: null as string | null,
    imgClass: '',
    fallback: <Headset size={24} strokeWidth={1.75} />,
  },
];

const journeyChecks = [
  'Smart Opportunity Matching',
  'Verified Information',
  'AI Career Guidance',
  'Business & Funding Support',
  'Community Services',
];

/* ==========================================================================
   HERO
   ========================================================================== */
const TumisoHero: React.FC = () => (
  <section className="section tumiso-hero-section">
    <div className="container tumiso-hero-grid">
      <Reveal className="tumiso-hero-copy">
        <div className="hero-tag-pill">TUMISO AI</div>
        <SplitText
          tag="h1"
          text="Your Intelligent Guide to Opportunities"
          className="tumiso-hero-title"
          delay={35}
          duration={0.55}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.15}
          rootMargin="-60px"
          textAlign="left"
        />
        <p className="tumiso-hero-desc">
          Tumbo AI helps verified individuals discover relevant opportunities, access trusted information and receive personalised guidance across employment, education, funding, entrepreneurship and community programmes—all powered by intelligent recommendations.
        </p>
        <div className="hero-btn-group">
          <a href="#tumiso-chat" className="btn btn-primary">
            Chat with Tumiso AI <ArrowRight size={16} />
          </a>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => alert('Demo video — Coming Soon')}
          >
            <Play size={14} fill="currentColor" /> Watch Demo
          </button>
        </div>
        <div className="tumiso-trust-row">
          {trustItems.map((item) => (
            <div key={item.label} className="tumiso-trust-item">
              <span className="tumiso-trust-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="tumiso-hero-visual" delay={0.1}>
        <img
          src={tumisoRecoCta}
          alt="Community host presenting Tumiso AI and Tumbo digital engagement"
          className="tumiso-hero-img"
        />
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   ASK ANYTHING / CHAT DEMO
   ========================================================================== */
const TumisoChatSection: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tumiso AI chat backend is Coming Soon. This is a frontend preview.');
    setMessage('');
  };

  return (
    <section id="tumiso-chat" className="section tumiso-chat-section">
      <div className="container">
        <Reveal className="tumiso-section-header text-center">
          <h2 className="tumiso-section-title">
            Ask Anything. Get Intelligent{' '}
            <span className="tumiso-hero-title-accent-wrap">
              <span className="tumiso-hero-title-accent">Guidance.</span>
            </span>
          </h2>
          <p className="tumiso-section-subtitle">
            Interact with Tumiso AI to explore opportunities, get personalised advice and discover
            the right next step for your journey.
          </p>
        </Reveal>

        <div className="tumiso-chat-layout">
          <Reveal className="tumiso-chat-panel">
            <div className="tumiso-chat-window">
              <div className="tumiso-chat-header">
                <img src={tumisoRobot} alt="" className="tumiso-chat-avatar" />
                <div>
                  <strong>Hi Tumiso</strong>
                  <span>Your intelligent opportunity guide</span>
                </div>
              </div>

              <div className="tumiso-chat-body">
                <div className="tumiso-msg tumiso-msg-user">
                  Can you help me find jobs that match my design skills?
                </div>
                <div className="tumiso-msg tumiso-msg-ai">
                  Absolutely. Here are a few roles that match your profile and interests:
                </div>
                <div className="tumiso-job-row">
                  {jobCards.map((job) => (
                    <article key={job.company} className="tumiso-job-card">
                      <img src={job.logo} alt="" className="tumiso-job-logo" />
                      <div>
                        <strong>{job.company}</strong>
                        <span>{job.role}</span>
                      </div>
                      <Link to="/opportunities" className="tumiso-job-view">
                        View
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              <form className="tumiso-chat-input-bar" onSubmit={handleSend}>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask Tumiso AI anything..."
                  aria-label="Message Tumiso AI"
                />
                <button type="submit" className="tumiso-chat-send" aria-label="Send message">
                  <Send size={16} />
                </button>
              </form>
              <p className="tumiso-coming-soon">Live AI responses — Coming Soon (frontend preview)</p>
            </div>
          </Reveal>

          <div className="tumiso-side-col">
            <Reveal delay={0.08}>
              <div className="tumiso-reco-panel">
                <div className="tumiso-reco-head">
                  <CheckCircle2 size={18} />
                  <h3>AI Recommendations</h3>
                </div>
                <ul className="tumiso-reco-list">
                  {recommendations.map((item) => (
                    <li key={item.title}>
                      <button type="button" className="tumiso-reco-item">
                        <span className="tumiso-reco-dot" aria-hidden="true" />
                        <span className="tumiso-reco-copy">
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </span>
                        <ChevronRight size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="tumiso-features-panel">
                <h3>Top AI Features</h3>
                <div className="tumiso-features-grid">
                  {topFeatures.map((f) => (
                    <article key={f.label} className="tumiso-feature-card">
                      <span className="tumiso-feature-icon" aria-hidden="true">
                        {f.icon}
                      </span>
                      <span>{f.label}</span>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   SMART RECOMMENDATIONS
   ========================================================================== */
const SmartRecommendations: React.FC = () => (
  <section id="smart-recommendations" className="section tumiso-smart-section">
    <div className="tumiso-smart-wave" aria-hidden="true" />
    <div className="container">
      <Reveal className="tumiso-smart-header text-center">
        <div className="hero-tag-pill">SMART RECOMMENDATIONS</div>
        <h2 className="tumiso-smart-title">
          Personalised Opportunities for{' '}
          <span className="tumiso-smart-title-accent">Every Individual</span>
        </h2>
        <p className="tumiso-smart-subtitle">
          Using verified identity, skills, qualifications and community data, Tumbo AI intelligently
          recommends opportunities designed specifically for you.
        </p>
      </Reveal>

      <div className="tumiso-smart-grid">
        {smartCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.05}>
            <article className="tumiso-smart-card">
              <span className="tumiso-smart-icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="tumiso-smart-card-title">{card.title}</h3>
              <p className="tumiso-smart-card-desc">{card.desc}</p>
              <Link to={card.to} className="tumiso-smart-card-btn">
                {card.action} <ArrowRight size={14} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="tumiso-smart-banner">
          <div className="tumiso-smart-banner-copy">
            <h3>Let AI Guide Your Success</h3>
            <p>
              Unlock smarter career and education choices with tailored recommendations from our
              AI-powered assistant.
            </p>
            <div className="tumiso-smart-banner-actions">
              <a href="#tumiso-chat" className="btn tumiso-smart-btn-white">
                Get Personalised Recommendations <ArrowRight size={15} />
              </a>
              <Link to="/opportunities" className="btn tumiso-smart-btn-outline">
                Explore All Opportunities <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="tumiso-smart-banner-media">
            <img
              src={tumisoFeatBanner}
              alt="Community members attending a Tumbo opportunity and learning session"
              className="tumiso-smart-banner-img"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   AI FEATURES
   ========================================================================== */
const AiFeatures: React.FC = () => (
  <section id="ai-features" className="section tumiso-aifeat-section">
    <div className="container">
      <Reveal className="tumiso-aifeat-header text-center">
        <div className="hero-tag-pill">AI FEATURE</div>
        <h2 className="tumiso-aifeat-title">
          Powering South Africa&apos;s Digital Inclusion{' '}
          <span className="tumiso-aifeat-title-accent">Ecosystem</span>
        </h2>
        <p className="tumiso-aifeat-subtitle">
          Tumbo AI provides intelligent support that helps individuals, businesses, communities and
          government institutions connect with opportunities more efficiently.
        </p>
      </Reveal>

      <div className="tumiso-aifeat-grid">
        {aiFeatureCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.05}>
            <article className="tumiso-aifeat-card">
              <span className="tumiso-aifeat-icon" aria-hidden="true">
                {card.img ? (
                  <img src={card.img} alt="" className={card.imgClass} />
                ) : (
                  card.fallback
                )}
              </span>
              <h3 className="tumiso-aifeat-card-title">{card.title}</h3>
              <p className="tumiso-aifeat-card-desc">{card.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="tumiso-aifeat-banner">
          <div className="tumiso-aifeat-banner-copy">
            <h3>Your Success, Powered by Tumbo AI</h3>
            <p>
              Access to intelligent recommendations tailored to your profile and growth path. Analyze
              your CV, refine your skills.
            </p>
            <div className="tumiso-aifeat-banner-actions">
              <a href="#tumiso-chat" className="btn tumiso-smart-btn-white">
                Start with AI <ArrowRight size={15} />
              </a>
              <Link to="/ecosystem" className="btn tumiso-smart-btn-outline">
                Explore the Ecosystem <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="tumiso-aifeat-banner-media">
            <img
              src={tumisoFeatCta}
              alt="Tumbo community session with participants engaging in a live workshop"
              className="tumiso-aifeat-banner-img"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   GET STARTED / JOURNEY CTA
   ========================================================================== */
const TumisoCta: React.FC = () => (
  <section id="get-started" className="section tumiso-journey-section">
    <div className="container">
      <Reveal className="tumiso-journey-inner">
        <div className="tumiso-journey-header text-center">
          <div className="tumiso-journey-pill">GET STARTED</div>
          <h2 className="tumiso-journey-title">Start Your Journey with Tumbo AI Today</h2>
          <p className="tumiso-journey-subtitle">
            Join South Africa&apos;s Digital Inclusion Ecosystem and let Tumbo AI connect you with the
            right opportunities, information and support — anytime, anywhere.
          </p>
        </div>

        <div className="tumiso-journey-grid">
          <div className="tumiso-journey-copy">
            <ul className="tumiso-journey-list">
              {journeyChecks.map((item) => (
                <li key={item}>
                  <span className="tumiso-journey-check" aria-hidden="true">
                    <CheckCircle2 size={16} strokeWidth={2.25} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="tumiso-journey-actions">
              <a href="#tumiso-chat" className="btn tumiso-smart-btn-white">
                Chat with Tumbo AI <ArrowRight size={15} />
              </a>
              <button
                type="button"
                className="btn tumiso-smart-btn-outline"
                onClick={() => alert('Create Your Profile — Coming Soon')}
              >
                Create Your Profile <ArrowRight size={15} />
              </button>
            </div>
          </div>
          <div className="tumiso-journey-media">
            <img
              src={tumisoFeatCta}
              alt="Tumbo facilitator leading a community workshop session"
              className="tumiso-journey-img"
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
export const TumisoAI: React.FC = () => (
  <div className="tumiso-page">
    <TumisoHero />
    <TumisoChatSection />
    <SmartRecommendations />
    <AiFeatures />
    <TumisoCta />
  </div>
);

export default TumisoAI;
