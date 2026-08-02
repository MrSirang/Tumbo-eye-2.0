import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Headset,
  User,
  Tag,
  Pencil,
  Send,
  Megaphone,
  ClipboardList,
  Globe2,
  Clock,
  CheckCircle2,
  Coffee,
  Smartphone,
  Bot,
  Briefcase,
  Users,
  BookOpen,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

import contactHero from '../assets/contact-hero.png';
import contactFormPhoto from '../assets/contact-form-photo.png';
import contactPlane from '../assets/contact-plane-deco.png';
import contactChat from '../assets/contact-chat-icon.png';
import contactMap from '../assets/contact-map.png';
import impact1 from '../assets/contact-impact-1.png';
import impact2 from '../assets/contact-impact-2.png';
import impact3 from '../assets/contact-impact-3.png';
import impact4 from '../assets/contact-impact-4.png';
import contactAppSplash from '../assets/contact-app-splash.png';
import appBubble1 from '../assets/tumiso-reco-cta.png';
import appBubble2 from '../assets/tumiso-feat-cta.png';
import appBubble3 from '../assets/tumiso-feat-banner.png';
import appBubble4 from '../assets/contact-form-photo.png';
import appBubble5 from '../assets/partners-hero-event.png';
import convoBg from '../assets/tumiso-feat-cta.png';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);

const OFFICE_ADDRESS = '46 Gray Ave, Klipfontein, eMalahleni, 1035';
const OFFICE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=46+Gray+Ave,+Klipfontein,+eMalahleni,+1035';
const INSTAGRAM_URL = 'https://www.instagram.com/ema.tumbo/';
const PLAY_STORE_URL = 'https://play.google.com/store/search?q=Tumbo&c=apps';

const contactMethods = [
  {
    title: 'Email Us',
    value: 'support@tumbo.co.za',
    href: 'mailto:support@tumbo.co.za',
    desc: 'We aim to respond within 24 business hours.',
    icon: <Mail size={20} strokeWidth={2} />,
    note: 'Additional emails pending organisation confirmation.',
  },
  {
    title: 'Call Us',
    value: 'Phone number coming soon',
    href: '#visit-office',
    desc: 'Official contact numbers will be published once confirmed.',
    icon: <Phone size={20} strokeWidth={2} />,
    note: 'Contact numbers pending organisation input.',
  },
  {
    title: 'Visit Our Office',
    value: OFFICE_ADDRESS,
    href: '#visit-office',
    desc: 'Visit us for an in-person appointment.',
    icon: <MapPin size={20} strokeWidth={2} />,
  },
  {
    title: 'Live Chat',
    value: 'Talk to Tumiso AI',
    href: '/ai-assistant',
    desc: 'Open Tumiso AI for guidance and opportunity discovery.',
    icon: <MessageCircle size={20} strokeWidth={2} />,
    useImage: true,
  },
];

const ContactHero: React.FC = () => (
  <section className="section section-blue-bg contact-hero">
    <div className="container contact-hero-grid">
      <Reveal className="contact-hero-content">
        <p className="contact-hero-brand">Tumbo</p>
        <div className="section-tag">CONTACT US</div>
        <h1 className="contact-hero-title">
          Let&apos;s Connect and Create{' '}
          <span className="highlight-blue">Opportunities Together</span>
        </h1>
        <p className="contact-hero-desc">
          Whether you&apos;re an individual seeking opportunities, a business looking to connect with
          verified communities, or a government or development partner, our team is here to help.
          Get in touch and let&apos;s create meaningful impact together.
        </p>
        <div className="hero-btn-group contact-hero-actions">
          <a href="#contact-form" className="btn btn-primary">
            Send a Message <ArrowRight size={15} />
          </a>
          <a href="#visit-office" className="btn btn-outline contact-outline-btn">
            Visit Our Office <MapPin size={15} />
          </a>
        </div>
      </Reveal>
      <Reveal className="contact-hero-visual" delay={0.1}>
        <img
          src={contactHero}
          alt="Tumbo team member welcoming visitors at a community event"
          className="contact-hero-img"
        />
      </Reveal>
    </div>
  </section>
);

const GetInTouch: React.FC = () => (
  <section className="section contact-touch-section">
    <div className="container">
      <Reveal>
        <div className="contact-touch-panel">
          <div className="contact-section-header text-center">
            <div className="section-tag">GET IN TOUCH</div>
            <h2 className="contact-section-title">
              We&apos;re Here to <span className="highlight-blue">Help</span>
            </h2>
            <p className="contact-section-subtitle">
              Choose the best way to connect with the Tumbo team. Whether you have questions, need
              support or want to discuss a partnership, we&apos;re ready to assist.
            </p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, i) => {
              const content = (
                <>
                  <span className="contact-method-icon" aria-hidden="true">
                    {method.useImage ? (
                      <img src={contactChat} alt="" className="contact-method-icon-img" />
                    ) : (
                      method.icon
                    )}
                  </span>
                  <span className="contact-method-copy">
                    <strong className="contact-method-title">{method.title}</strong>
                    <span className="contact-method-value">{method.value}</span>
                    <span className="contact-method-desc">{method.desc}</span>
                    {method.note && <span className="contact-method-note">{method.note}</span>}
                  </span>
                </>
              );

              return (
                <Reveal key={method.title} delay={i * 0.05}>
                  {method.href.startsWith('/') ? (
                    <Link to={method.href} className="contact-method-card">
                      {content}
                    </Link>
                  ) : (
                    <a href={method.href} className="contact-method-card">
                      {content}
                    </a>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="contact-channels-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <span className="contact-channel-icon" aria-hidden="true">
                <InstagramIcon size={22} />
              </span>
              <div>
                <strong>Follow EMA.TUMBO</strong>
                <span>@ema.tumbo on Instagram</span>
              </div>
              <ArrowRight size={16} />
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <span className="contact-channel-icon" aria-hidden="true">
                <Smartphone size={22} />
              </span>
              <div>
                <strong>Download the Tumbo App</strong>
                <span>Available on Google Play</span>
              </div>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="contact-assist-banner">
            <div className="contact-assist-left">
              <span className="contact-assist-icon" aria-hidden="true">
                <Headset size={26} strokeWidth={2} />
              </span>
              <h3 className="contact-assist-title">Need Immediate Assistance?</h3>
            </div>
            <a href="#contact-form" className="btn btn-primary contact-whatsapp-btn">
              Send us a Message <ArrowRight size={15} />
            </a>
            <img src={contactPlane} alt="" className="contact-assist-deco" aria-hidden="true" />
          </div>
          <p className="contact-coming-soon-note contact-assist-note">
            WhatsApp / live support channels — Coming Soon once official numbers are confirmed.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const ContactFormSection: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreed: false,
  });

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed) {
      alert('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }
    alert(
      'Thanks for your message. Form submission is frontend-only for now — backend delivery is Coming Soon.',
    );
  };

  return (
    <section id="contact-form" className="section contact-form-section">
      <div className="container">
        <Reveal className="contact-section-header text-center">
          <div className="section-tag">SEND US A MESSAGE</div>
          <h2 className="contact-section-title">
            We&apos;d Love to Hear From <span className="highlight-blue">You</span>
          </h2>
          <p className="contact-section-subtitle">
            Have a question, feedback, partnership enquiry or support request? Complete the form
            below. Backend delivery is coming soon — this form is a frontend preview.
          </p>
        </Reveal>

        <div className="contact-form-layout">
          <Reveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-field">
                <span className="contact-field-label">
                  <User size={15} strokeWidth={2} aria-hidden="true" /> Full Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  required
                />
              </label>

              <label className="contact-field">
                <span className="contact-field-label">
                  <Mail size={15} strokeWidth={2} aria-hidden="true" /> Email Address
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  required
                />
              </label>

              <label className="contact-field">
                <span className="contact-field-label">
                  <Phone size={15} strokeWidth={2} aria-hidden="true" /> Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </label>

              <label className="contact-field">
                <span className="contact-field-label">
                  <Tag size={15} strokeWidth={2} aria-hidden="true" /> Subject
                </span>
                <input
                  type="text"
                  placeholder="What are you writing about?"
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                  required
                />
              </label>

              <label className="contact-field">
                <span className="contact-field-label">
                  <Pencil size={15} strokeWidth={2} aria-hidden="true" /> Message
                </span>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  required
                />
              </label>

              <label className="contact-agree">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) => update('agreed', e.target.checked)}
                />
                <span>
                  I agree to the Terms of Service and Privacy Policy (pages Coming Soon).
                </span>
              </label>

              <button type="submit" className="btn btn-primary contact-submit-btn">
                Send Message <Send size={16} />
              </button>
              <p className="contact-coming-soon-note">Form backend delivery — Coming Soon</p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="contact-form-visual">
            <img
              src={contactFormPhoto}
              alt="Tumbo community member in traditional attire"
              className="contact-form-img"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const valueCards = [
  {
    title: 'Responsive Support',
    desc: 'Receive timely assistance from our dedicated support team.',
    icon: <Megaphone size={22} strokeWidth={2} />,
  },
  {
    title: 'Trusted Guidance',
    desc: 'Get accurate information about opportunities, programmes, and partnerships.',
    icon: <ClipboardList size={22} strokeWidth={2} />,
  },
  {
    title: 'Community Focused',
    desc: 'Helping people and organizations create meaningful impact across South Africa.',
    icon: <Globe2 size={22} strokeWidth={2} />,
  },
];

const ConnectionValues: React.FC = () => (
  <section className="section contact-values-section">
    <div className="container">
      <Reveal className="contact-section-header text-center">
        <div className="section-tag">GET IN TOUCH</div>
        <h2 className="contact-section-title">
          Supporting Communities Through <span className="highlight-blue">Connection</span>
        </h2>
        <p className="contact-section-subtitle">
          Our team is committed to helping individuals, businesses, municipalities and development
          partners access the right information, opportunities and digital solutions.
        </p>
      </Reveal>

      <div className="contact-values-grid">
        {valueCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.05}>
            <article className="contact-value-card">
              <span className="contact-value-icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="contact-value-title">{card.title}</h3>
              <p className="contact-value-desc">{card.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ConversationCta: React.FC = () => (
  <section className="section contact-convo-section">
    <div className="container">
      <Reveal>
        <div className="contact-convo-banner">
          <img
            src={convoBg}
            alt=""
            className="contact-convo-bg"
            aria-hidden="true"
          />
          <div className="contact-convo-overlay" aria-hidden="true" />

          <div className="contact-convo-deco-left-wrap">
            <img src={contactChat} alt="" className="contact-convo-deco-left" aria-hidden="true" />
          </div>

          <div className="contact-convo-copy text-center">
            <h2 className="contact-convo-title">Ready to Start a Conversation?</h2>
            <p className="contact-convo-desc">
              Let&apos;s discuss how Tumbo can help you unlock opportunities, strengthen communities
              and build lasting partnerships.
            </p>
            <a href="#contact-form" className="btn contact-convo-btn">
              Contact us Now
            </a>
          </div>

          <div className="contact-convo-deco-right">
            <a
              href="mailto:support@tumbo.co.za"
              className="contact-convo-icon-btn"
              aria-label="Email Tumbo support"
            >
              <Mail size={22} strokeWidth={1.75} />
            </a>
            <a href="#visit-office" className="contact-convo-icon-btn" aria-label="Call or visit Tumbo">
              <Phone size={20} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const VisitOffice: React.FC = () => (
  <section id="visit-office" className="section contact-office-section">
    <div className="container">
      <Reveal className="contact-section-header text-center">
        <div className="section-tag">FIND US AT</div>
        <h2 className="contact-section-title">
          Visit Our <span className="highlight-blue">Office</span>
        </h2>
        <p className="contact-section-subtitle">
          Meet with the Tumbo team to discuss partnerships, community initiatives and digital
          solutions. Contact us to schedule an appointment.
        </p>
      </Reveal>

      <Reveal>
        <div className="contact-office-panel">
          <div className="contact-office-details">
            <div className="contact-office-row">
              <span className="contact-office-icon" aria-hidden="true">
                <MapPin size={20} strokeWidth={2} />
              </span>
              <div>
                <strong>Headquarters</strong>
                <p>{OFFICE_ADDRESS}</p>
              </div>
            </div>

            <div className="contact-office-row">
              <span className="contact-office-icon" aria-hidden="true">
                <Clock size={20} strokeWidth={2} />
              </span>
              <div>
                <strong>Business Hours</strong>
                <p>Monday - Friday | 08:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="contact-office-row">
              <span className="contact-office-icon" aria-hidden="true">
                <Mail size={20} strokeWidth={2} />
              </span>
              <div>
                <strong>Contact</strong>
                <p>Email: support@tumbo.co.za</p>
                <p>Phone: Coming Soon</p>
              </div>
            </div>

            <div className="contact-office-row">
              <span className="contact-office-icon" aria-hidden="true">
                <InstagramIcon size={20} />
              </span>
              <div>
                <strong>Social</strong>
                <p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    @ema.tumbo on Instagram
                  </a>
                </p>
              </div>
            </div>

            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact-directions-btn"
            >
              <Send size={16} /> Get Directions
            </a>
          </div>

          <div className="contact-office-map">
            <img
              src={contactMap}
              alt="Map preview for Tumbo office in eMalahleni"
              className="contact-map-img"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const ContactBenefitsBar: React.FC = () => (
  <section className="contact-benefits-section">
    <div className="container">
      <Reveal className="contact-benefits-bar">
        <div className="contact-benefit-item">
          <CheckCircle2 size={20} strokeWidth={2} aria-hidden="true" />
          <div>
            <strong>Easy to Reach</strong>
            <span>We&apos;re here to help.</span>
          </div>
        </div>
        <div className="contact-benefit-item">
          <MapPin size={20} strokeWidth={2} aria-hidden="true" />
          <div>
            <strong>eMalahleni Office</strong>
            <span>46 Gray Ave, Klipfontein.</span>
          </div>
        </div>
        <div className="contact-benefit-item">
          <Coffee size={20} strokeWidth={2} aria-hidden="true" />
          <div>
            <strong>Meet With Our Team</strong>
            <span>Schedule a meeting with our experts.</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const appFeatures = [
  { label: 'AI Assistant', icon: <Bot size={14} strokeWidth={2.25} /> },
  { label: 'Opportunities', icon: <Briefcase size={14} strokeWidth={2.25} /> },
  { label: 'Community Tools', icon: <Users size={14} strokeWidth={2.25} /> },
  { label: 'Learning Resources', icon: <BookOpen size={14} strokeWidth={2.25} /> },
  { label: 'Verified Access', icon: <ShieldCheck size={14} strokeWidth={2.25} /> },
  { label: 'Career Guidance', icon: <Compass size={14} strokeWidth={2.25} /> },
];

const appBubbles = [
  { src: appBubble1, className: 'contact-app-bubble contact-app-bubble-1' },
  { src: appBubble2, className: 'contact-app-bubble contact-app-bubble-2' },
  { src: appBubble3, className: 'contact-app-bubble contact-app-bubble-3' },
  { src: appBubble4, className: 'contact-app-bubble contact-app-bubble-4' },
  { src: appBubble5, className: 'contact-app-bubble contact-app-bubble-5' },
  { src: impact1, className: 'contact-app-bubble contact-app-bubble-6' },
];

const AppDownload: React.FC = () => (
  <section className="section contact-app-section">
    <div className="container">
      <Reveal>
        <div className="contact-app-promo">
          <div className="contact-app-promo-bg" aria-hidden="true" />

          <div className="contact-app-promo-grid">
            <div className="contact-app-promo-copy">
              <div className="contact-app-promo-pill">MOBILE APP</div>
              <h2 className="contact-app-promo-title">
                Stay connected to opportunities with the Tumbo app — free to download.
              </h2>
              <p className="contact-app-promo-desc">
                Access community tools and services on the go. Find Tumbo on Google Play and stay
                connected to opportunities wherever you are.
              </p>

              <div className="contact-app-feature-grid">
                {appFeatures.map((feature) => (
                  <div key={feature.label} className="contact-app-feature-chip">
                    <span className="contact-app-feature-icon" aria-hidden="true">
                      {feature.icon}
                    </span>
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="contact-app-store-row">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-app-store-btn contact-app-store-play"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M3.6 2.9c.3-.3.7-.4 1.1-.2l12.7 7.3c.5.3.5 1 0 1.3L4.7 18.6c-.4.2-.8.1-1.1-.2-.2-.2-.3-.5-.3-.8V3.7c0-.3.1-.6.3-.8zm15.2 7.4 2.3 1.3c.5.3.5 1 0 1.3l-2.3 1.3-3.3-1.9 3.3-2zM4.9 20.1l8.2-4.7 3.3 1.9-10.4 3.7c-.6.2-1.2-.4-.9-1z"
                    />
                  </svg>
                  <span>
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </span>
                </a>
                <button
                  type="button"
                  className="contact-app-store-btn contact-app-store-apple"
                  onClick={() => alert('App Store listing — Coming Soon')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M16.4 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.1 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.6zM14.3 6.5c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-.9 2.5 1 .1 1.9-.5 2.5-1.1z"
                    />
                  </svg>
                  <span>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </button>
              </div>
            </div>

            <div className="contact-app-promo-visual">
              {appBubbles.map((bubble) => (
                <img
                  key={bubble.className}
                  src={bubble.src}
                  alt=""
                  className={bubble.className}
                />
              ))}

              <div className="contact-app-phone">
                <div className="contact-app-phone-notch" aria-hidden="true" />
                <div className="contact-app-phone-screen">
                  <img
                    src={contactAppSplash}
                    alt="Tumbo mobile app Community Connect splash screen"
                    className="contact-app-phone-splash"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const impactCards = [
  {
    title: 'Verified Support',
    desc: 'Helping you every step of the way.',
    image: impact1,
  },
  {
    title: 'Trusted Partnerships',
    desc: 'Building long-term relationships for lasting impact.',
    image: impact4,
  },
  {
    title: 'Community Focused',
    desc: 'Creating opportunities that strengthen communities.',
    image: impact3,
  },
  {
    title: 'Digital Innovation',
    desc: 'Connecting people through Tumbo’s digital community ecosystem.',
    image: impact2,
  },
];

const MeaningfulImpactCta: React.FC = () => (
  <section className="section contact-impact-section">
    <div className="container">
      <Reveal>
        <div className="contact-impact-banner">
          <div className="contact-impact-header text-center">
            <div className="contact-impact-pill">LET&apos;S BUILD THE FUTURE TOGETHER</div>
            <h2 className="contact-impact-title">Ready to Create Meaningful Impact?</h2>
            <p className="contact-impact-desc">
              Whether you&apos;re an individual, business, municipality, government department or
              development partner, Tumbo is ready to help you connect with verified communities and
              unlock new opportunities.
            </p>
            <div className="contact-impact-actions">
              <Link to="/opportunities" className="btn contact-impact-primary">
                Explore Opportunities <ArrowRight size={16} />
              </Link>
              <a href="#contact-form" className="btn contact-impact-outline">
                Book a Consultation <Calendar size={15} />
              </a>
            </div>
          </div>

          <div className="contact-impact-grid">
            {impactCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <article className="contact-impact-card">
                  <img src={card.image} alt="" className="contact-impact-avatar" />
                  <h3 className="contact-impact-card-title">{card.title}</h3>
                  <p className="contact-impact-card-desc">{card.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export const Contact: React.FC = () => (
  <div className="contact-page">
    <ContactHero />
    <GetInTouch />
    <ContactFormSection />
    <ConnectionValues />
    <ConversationCta />
    <VisitOffice />
    <ContactBenefitsBar />
    <AppDownload />
    <MeaningfulImpactCta />
  </div>
);

export default Contact;
