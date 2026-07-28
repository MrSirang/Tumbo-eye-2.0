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
  ExternalLink,
  Megaphone,
  ClipboardList,
  Globe2,
  Clock,
  CheckCircle2,
  Coffee,
} from 'lucide-react';

import contactHero from '../assets/contact-hero.png';
import contactFormPhoto from '../assets/contact-form-photo.png';
import contactPlane from '../assets/contact-plane-deco.png';
import contactChat from '../assets/contact-chat-icon.png';
import contactMap from '../assets/contact-map.png';
import impact1 from '../assets/contact-impact-1.png';
import impact2 from '../assets/contact-impact-2.png';
import impact3 from '../assets/contact-impact-3.png';
import impact4 from '../assets/contact-impact-4.png';

const contactMethods = [
  {
    title: 'Email Us',
    value: 'support@tumbo.co.za',
    href: 'mailto:support@tumbo.co.za',
    desc: 'We aim to respond within 24 business hours.',
    icon: <Mail size={20} strokeWidth={2} />,
  },
  {
    title: 'Call Us',
    value: '+27 (0) 10 541 0440',
    href: 'tel:+27105410440',
    desc: 'Monday - Friday, 8:00 AM - 5:00 PM.',
    icon: <Phone size={20} strokeWidth={2} />,
  },
  {
    title: 'Visit Our Office',
    value: 'South Africa',
    href: '#',
    desc: 'Visit us for an in-person appointment.',
    icon: <MapPin size={20} strokeWidth={2} />,
  },
  {
    title: 'Live Chat',
    value: 'Click here to chat',
    href: '#',
    desc: 'Available 24/7 for quick questions.',
    icon: <MessageCircle size={20} strokeWidth={2} />,
    useImage: true,
  },
];

const ContactHero: React.FC = () => (
  <section className="section section-blue-bg contact-hero">
    <div className="container contact-hero-grid">
      <div className="contact-hero-content">
        <div className="section-tag">CONTACT US</div>
        <h1 className="contact-hero-title">
          Let&apos;s Connect and Create{' '}
          <span className="highlight-blue">Opportunities Together</span>
        </h1>
        <p className="contact-hero-desc">
          Whether you&apos;re an individual seeking opportunities, a business looking to connect with
          verified communities, or a government or development partner, our team is here to help. Get
          in touch and let&apos;s create meaningful impact together.
        </p>
        <div className="hero-btn-group contact-hero-actions">
          <a
            href="https://assets.tumbo.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go to Assets <ExternalLink size={15} />
          </a>
          <button className="btn btn-outline contact-outline-btn" onClick={() => alert('Schedule a Meeting')}>
            Schedule a Meeting <Calendar size={15} />
          </button>
        </div>
      </div>
      <div className="contact-hero-visual">
        <img
          src={contactHero}
          alt="Tumbo team member welcoming visitors at a community event"
          className="contact-hero-img"
        />
      </div>
    </div>
  </section>
);

const GetInTouch: React.FC = () => (
  <section className="section contact-touch-section">
    <div className="container">
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
          {contactMethods.map((method) => (
            <a key={method.title} href={method.href} className="contact-method-card">
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
              </span>
            </a>
          ))}
        </div>

        <div className="contact-assist-banner">
          <div className="contact-assist-left">
            <span className="contact-assist-icon" aria-hidden="true">
              <Headset size={26} strokeWidth={2} />
            </span>
            <h3 className="contact-assist-title">Need Immediate Assistance?</h3>
          </div>
          <a
            href="https://wa.me/27105410440"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-whatsapp-btn"
          >
            Reach out on WhatsApp <ArrowRight size={15} />
          </a>
          <img src={contactPlane} alt="" className="contact-assist-deco" aria-hidden="true" />
        </div>
      </div>
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
    alert('Message sent! Our team will get back to you soon.');
  };

  return (
    <section id="contact-form" className="section contact-form-section">
      <div className="container">
        <div className="contact-section-header text-center">
          <div className="section-tag">SEND US A MESSAGE</div>
          <h2 className="contact-section-title">
            We&apos;d Love to Hear From <span className="highlight-blue">You</span>
          </h2>
          <p className="contact-section-subtitle">
            Have a question, feedback, partnership enquiry or support request? Complete the form
            below and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-form-layout">
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
                <Mail size={15} strokeWidth={2} aria-hidden="true" /> Email Name
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
                I agree to the{' '}
                <Link to="/terms" className="contact-agree-link">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="contact-agree-link">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button type="submit" className="btn btn-primary contact-submit-btn">
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="contact-form-visual">
            <img
              src={contactFormPhoto}
              alt="Tumbo community member in traditional attire"
              className="contact-form-img"
            />
          </div>
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
      <div className="contact-section-header text-center">
        <div className="section-tag">GET IN TOUCH</div>
        <h2 className="contact-section-title">
          Supporting Communities Through <span className="highlight-blue">Connection</span>
        </h2>
        <p className="contact-section-subtitle">
          Our team is committed to helping individuals, businesses, municipalities and development
          partners access the right information, opportunities and digital solutions.
        </p>
      </div>

      <div className="contact-values-grid">
        {valueCards.map((card) => (
          <article key={card.title} className="contact-value-card">
            <span className="contact-value-icon" aria-hidden="true">
              {card.icon}
            </span>
            <h3 className="contact-value-title">{card.title}</h3>
            <p className="contact-value-desc">{card.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ConversationCta: React.FC = () => (
  <section className="section contact-convo-section">
    <div className="container">
      <div className="contact-convo-banner">
        <img src={contactChat} alt="" className="contact-convo-deco-left" aria-hidden="true" />
        <div className="contact-convo-copy text-center">
          <h2 className="contact-convo-title">Ready to Start a Conversation?</h2>
          <p className="contact-convo-desc">
            Let&apos;s discuss how Tumbo can help you unlock opportunities, strengthen communities and
            build lasting partnerships.
          </p>
          <a href="#contact-form" className="btn contact-convo-btn">
            Contact us Now
          </a>
        </div>
        <div className="contact-convo-deco-right" aria-hidden="true">
          <Mail size={28} strokeWidth={1.5} />
          <Phone size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  </section>
);

const VisitOffice: React.FC = () => (
  <section className="section contact-office-section">
    <div className="container">
      <div className="contact-section-header text-center">
        <div className="section-tag">FIND US AT</div>
        <h2 className="contact-section-title">
          Visit Our <span className="highlight-blue">Office</span>
        </h2>
        <p className="contact-section-subtitle">
          Meet with the Tumbo team to discuss partnerships, community initiatives and digital
          solutions. Contact us to schedule an appointment.
        </p>
      </div>

      <div className="contact-office-panel">
        <div className="contact-office-details">
          <div className="contact-office-row">
            <span className="contact-office-icon" aria-hidden="true">
              <MapPin size={20} strokeWidth={2} />
            </span>
            <div>
              <strong>Headquarters</strong>
              <p>South Africa</p>
            </div>
          </div>

          <div className="contact-office-row">
            <span className="contact-office-icon" aria-hidden="true">
              <Clock size={20} strokeWidth={2} />
            </span>
            <div>
              <strong>Business Hours</strong>
              <p>Monday - Friday | 08:45 AM - 12:45 PM</p>
            </div>
          </div>

          <div className="contact-office-row">
            <span className="contact-office-icon" aria-hidden="true">
              <Phone size={20} strokeWidth={2} />
            </span>
            <div>
              <strong>Contact</strong>
              <p>Phone: +27 (0) 00 000 0000</p>
              <p>Email: support@tumbo.co.za</p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=South+Africa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-directions-btn"
          >
            <Send size={16} /> Get Directions
          </a>
        </div>

        <div className="contact-office-map">
          <img src={contactMap} alt="Map showing Tumbo office location" className="contact-map-img" />
        </div>
      </div>
    </div>
  </section>
);

const ContactBenefitsBar: React.FC = () => (
  <section className="contact-benefits-section">
    <div className="container">
      <div className="contact-benefits-bar">
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
            <strong>Convenient Location</strong>
            <span>Our office is centrally located.</span>
          </div>
        </div>
        <div className="contact-benefit-item">
          <Coffee size={20} strokeWidth={2} aria-hidden="true" />
          <div>
            <strong>Meet With Our Team</strong>
            <span>Schedule a meeting with our experts.</span>
          </div>
        </div>
      </div>
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
    desc: "Connecting people through South Africa's Digital Inclusion Ecosystem.",
    image: impact2,
  },
];

const MeaningfulImpactCta: React.FC = () => (
  <section className="section contact-impact-section">
    <div className="container">
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
              Get Started Today <ArrowRight size={16} />
            </Link>
            <button
              className="btn contact-impact-outline"
              onClick={() => alert('Book a Free Consultation')}
            >
              Book a Free Consultation <Calendar size={15} />
            </button>
          </div>
        </div>

        <div className="contact-impact-grid">
          {impactCards.map((card) => (
            <article key={card.title} className="contact-impact-card">
              <img src={card.image} alt="" className="contact-impact-avatar" />
              <h3 className="contact-impact-card-title">{card.title}</h3>
              <p className="contact-impact-card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
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
    <MeaningfulImpactCta />
  </div>
);
