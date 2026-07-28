import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  FileText,
  Share2,
  Star,
  Play,
  Users,
  Award,
  Sparkles,
  Globe2,
  Handshake,
  Calendar,
  Rocket,
  TrendingUp,
  Trophy,
  Maximize2,
  Volume2,
} from 'lucide-react';

import successHero from '../assets/success-hero.png';
import successFeatured from '../assets/success-featured-stage.png';
import successAvatar from '../assets/success-avatar.png';

import story1 from '../assets/ss-person-curly-green.png';
import story2 from '../assets/ss-person-suit-glasses.png';
import story3 from '../assets/ss-person-blazer.png';
import story4 from '../assets/ss-person-yellow-bg.png';
import story5 from '../assets/ss-person-leader.png';
import story6 from '../assets/ss-person-career-woman.png';

import videoMain from '../assets/ss-video-aisha.png';
import videoThumb1 from '../assets/ss-person-graduate.png';
import videoThumb2 from '../assets/ss-person-red-shirt.png';
import videoThumb3 from '../assets/ss-person-blue-shirt.png';
import ctaGrad from '../assets/ss-cta-grad-new.png';

const impactItems = [
  { icon: <Briefcase size={22} strokeWidth={2} />, label: 'Hired at Google' },
  { icon: <GraduationCap size={22} strokeWidth={2} />, label: 'Full Scholarship' },
  { icon: <FileText size={22} strokeWidth={2} />, label: 'Career Growth' },
  { icon: <Share2 size={22} strokeWidth={2} />, label: 'Global Opportunities' },
];

const communityStories = [
  {
    title: 'PCB Power Valves & Nkangala TVET Bursaries',
    desc: 'Through strategic partnerships, deserving students received bursary support, creating pathways toward higher education, professional development and long-term employment opportunities.',
    image: story1,
    focus: 'ss-focus-face',
  },
  {
    title: 'IPT Mpumalanga U12 Netball Sponsorship',
    desc: 'Supporting grassroots sport by sponsoring young athletes, encouraging participation, teamwork and the development of future sporting talent.',
    image: story2,
    focus: 'ss-focus-face-high',
  },
  {
    title: 'Community Athlete Sponsorship',
    desc: "Proudly supporting community athletes participating in one of South Africa's most iconic endurance events, promoting health, perseverance and community excellence.",
    image: story3,
    focus: 'ss-focus-face',
  },
  {
    title: 'School of Excellence (SoE) Social Club',
    desc: 'Partnering with annual sporting events that unite communities through multiple sporting codes while identifying and nurturing emerging talent.',
    image: story4,
    focus: 'ss-focus-face',
  },
  {
    title: 'Community Leader',
    desc: 'Founder, youth impact. Tumbo Eye 2.0 Connected me with amazing opportunities to make a real impact.',
    image: story5,
    focus: 'ss-focus-face-high',
  },
  {
    title: 'Career Growth',
    desc: 'Product Manager at Microsoft. I found the right resources and guidance that helped me grow my career faster.',
    image: story6,
    focus: 'ss-focus-face-close',
  },
];

const videoList = [
  {
    title: 'Scholarship Success',
    person: 'Zainab Fatima, University Of Oxford',
    image: videoThumb1,
    icon: <GraduationCap size={16} strokeWidth={2.2} />,
    focus: 'ss-focus-face',
  },
  {
    title: 'Career growth journey',
    person: 'Zainab Fatima, Software Engineer at google',
    image: videoThumb2,
    icon: <TrendingUp size={16} strokeWidth={2.2} />,
    focus: 'ss-focus-face',
  },
  {
    title: 'Startup Founder Story',
    person: 'Hassan Malik, Founder technova',
    image: videoThumb3,
    icon: <Rocket size={16} strokeWidth={2.2} />,
    focus: 'ss-focus-face',
  },
];

const impactStats = [
  {
    icon: <Users size={20} />,
    tone: 'blue',
    value: '120K+',
    label: 'Regular Users',
    desc: 'Across 40+ countries and regions',
  },
  {
    icon: <Sparkles size={20} />,
    tone: 'orange',
    value: '25K+',
    label: 'Success Stories',
    desc: 'People who achieved their goals',
  },
  {
    icon: <Award size={20} />,
    tone: 'purple',
    value: '5K+',
    label: 'Scholarships Awarded',
    desc: 'Global education opportunities',
  },
  {
    icon: <Briefcase size={20} />,
    tone: 'green',
    value: '10K+',
    label: 'Job Placements',
    desc: 'Connecting talent with opportunity',
  },
];

const impactExtra = [
  { icon: <Globe2 size={18} />, value: '40+', label: 'Countries Reached' },
  { icon: <Handshake size={18} />, value: '300+', label: 'Partner Organizations' },
  { icon: <Calendar size={18} />, value: '1,500+', label: 'Events Hosted' },
  { icon: <Rocket size={18} />, value: '98%', label: 'User Satisfaction' },
];

/* ==========================================================================
   HERO
   ========================================================================== */
const SuccessHero: React.FC = () => (
  <section className="section section-blue-bg ss-page-hero">
    <div className="container ss-page-hero-grid">
      <div className="ss-page-hero-content">
        <div className="hero-tag-pill">SUCCESS STORIES</div>
        <h1 className="ss-page-hero-title">
          Real Stories. Real Success.{' '}
          <span className="eco2-title-accent">Real Impact.</span>
        </h1>
        <p className="ss-page-hero-desc">
          Discover how the Tumbo Digital Inclusion Ecosystem is transforming lives through education,
          employment, entrepreneurship, community development and strategic partnerships across South
          Africa.
        </p>
        <div className="hero-btn-group">
          <a href="#featured-story" className="btn btn-primary">
            Explore Stories <ArrowRight size={16} />
          </a>
          <Link to="/partners" className="btn btn-outline ss-page-outline">
            Become a Partner
          </Link>
        </div>
      </div>
      <div className="ss-page-hero-visual">
        <img
          src={successHero}
          alt="Community leader presenting the Tumbo digital community engagement app"
          className="ss-page-hero-img"
        />
      </div>
    </div>
  </section>
);

/* ==========================================================================
   FEATURED STORY
   ========================================================================== */
const FeaturedStory: React.FC = () => (
  <section id="featured-story" className="section ss-featured-section">
    <div className="container">
      <div className="ss-featured-card">
        <div className="ss-featured-top">
          <div className="ss-featured-media">
            <img
              src={successFeatured}
              alt="Community success story celebration at an EMA Tumbo event"
              className="ss-featured-img"
            />
          </div>
          <div className="ss-featured-copy">
            <div className="section-tag">FEATURED STORY</div>
            <h2 className="ss-featured-title">
              Meet Our Inspiring <span className="highlight-blue">Success Story</span>
            </h2>
            <p className="ss-featured-desc">
              Discover how one opportunity changed a life. Read the inspiring journey of a student who
              transformed their future through Tumbo Eye 2.0.
            </p>

            <div className="ss-featured-divider" />

            <div className="ss-testimonial">
              <div className="ss-testimonial-head">
                <img src={successAvatar} alt="Sarah Johnson" className="ss-testimonial-avatar" />
                <div>
                  <h3 className="ss-testimonial-name">Sarah Johnson</h3>
                  <p className="ss-testimonial-role">Software Engineer at Google</p>
                </div>
              </div>
              <div className="ss-testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <p className="ss-testimonial-quote">
                &ldquo;Through Tumbo Eye 2.0, I discovered a scholarship and mentorship that helped me
                start my career at Google. The platform completely changed my future.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="ss-impact-row">
          {impactItems.map((item) => (
            <div key={item.label} className="ss-impact-item">
              <div className="ss-impact-icon" aria-hidden="true">
                {item.icon}
              </div>
              <span className="ss-impact-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ss-featured-actions">
        <button className="btn btn-primary" onClick={() => alert('Read Full Story')}>
          Read Full Story <ArrowRight size={16} />
        </button>
        <button className="btn btn-outline ss-page-outline" onClick={() => alert('Watch Interview')}>
          Watch Interview
        </button>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   COMMUNITY IMPACT STORIES
   ========================================================================== */
const CommunityImpact: React.FC = () => (
  <section id="community-impact" className="section ss-community-section">
    <div className="container">
      <div className="ss-section-header text-center">
        <h2 className="ss-section-title">
          Stories That Inspire <span className="highlight-blue">Change</span>
        </h2>
        <p className="ss-section-subtitle">
          Every partnership, sponsorship and programme creates opportunities that strengthen
          communities and improve lives.
        </p>
      </div>

      <div className="ss-community-grid">
        {communityStories.map((story) => (
          <article key={story.title} className="ss-story-card">
            <div className="ss-story-media">
              <img src={story.image} alt="" className={`ss-story-img ${story.focus}`} />
            </div>
            <div className="ss-story-body">
              <h3 className="ss-story-title">{story.title}</h3>
              <p className="ss-story-desc">{story.desc}</p>
              <button className="ss-story-link" onClick={() => alert(`Read: ${story.title}`)}>
                Read Story <ArrowRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="ss-discover-box text-center">
        <h3 className="ss-discover-title">Discover More Inspiring Stories</h3>
        <p className="ss-discover-desc">Thousands of lives transformed — Yours could be next.</p>
        <button className="btn btn-primary" onClick={() => alert('View All Success Stories')}>
          View All Success Stories <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   VIDEO TESTIMONIALS
   ========================================================================== */
const VideoTestimonials: React.FC = () => (
  <section id="video-testimonials" className="section ss-video-section">
    <div className="container">
      <div className="ss-section-header text-center">
        <div className="section-tag">VIDEO TESTIMONIALS</div>
        <h2 className="ss-section-title">
          Hear Their Stories in Their <span className="highlight-blue">Own Words</span>
        </h2>
        <p className="ss-section-subtitle">
          Watch inspiring video testimonials from students, professionals, entrepreneurs, and
          scholarship recipients who achieved success through Tumbo Eye 2.0.
        </p>
      </div>

      <div className="ss-video-layout">
        <button className="ss-video-main" onClick={() => alert("Play Ayesha Khan's Journey")}>
          <img src={videoMain} alt="Ayesha Khan's Journey" className="ss-video-main-img ss-focus-video-main" />
          <span className="ss-video-play" aria-hidden="true">
            <Play size={28} fill="#fff" color="#fff" />
          </span>
          <span className="ss-video-caption">
            <strong>From Scholarship to Success:</strong>
            <span>Ayesha Khan&apos;s Journey</span>
          </span>
          <span className="ss-video-controls" aria-hidden="true">
            <span className="ss-video-progress">
              <span className="ss-video-progress-fill" />
            </span>
            <span className="ss-video-controls-row">
              <span>02:24 / 05:30</span>
              <span className="ss-video-controls-icons">
                <Volume2 size={14} />
                <Maximize2 size={14} />
              </span>
            </span>
          </span>
        </button>

        <div className="ss-video-list">
          {videoList.map((item) => (
            <button
              key={item.title}
              className="ss-video-item"
              onClick={() => alert(`Play: ${item.title}`)}
            >
              <img src={item.image} alt="" className={`ss-video-thumb ${item.focus}`} />
              <span className="ss-video-item-copy">
                <strong>
                  <span className="ss-video-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.title}
                </strong>
                <span>{item.person}</span>
              </span>
              <span className="ss-video-item-play" aria-hidden="true">
                <Play size={14} fill="currentColor" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="ss-video-banner">
        <div className="ss-video-banner-icon" aria-hidden="true">
          <Play size={22} fill="currentColor" />
        </div>
        <div className="ss-video-banner-copy">
          <h3>Watch More inspiring Stories</h3>
          <p>Hundreds of success stories. Endless inspiration.</p>
        </div>
        <button className="btn ss-video-banner-btn" onClick={() => alert('View All Videos')}>
          View All Videos <ArrowRight size={15} />
        </button>
      </div>
    </div>
  </section>
);

/* ==========================================================================
   OUR IMPACT
   ========================================================================== */
const OurImpact: React.FC = () => (
  <section className="section ss-our-impact-section">
    <div className="container">
      <div className="ss-section-header text-center">
        <div className="section-tag">OUR IMPACT</div>
        <h2 className="ss-section-title">
          Changing Lives Through <span className="highlight-blue">Opportunities</span>
        </h2>
        <p className="ss-section-subtitle">
          Thousands of students, professionals, and entrepreneurs have transformed their futures with
          Tumbo Eye 2.0.
        </p>
      </div>

      <div className="ss-stats-grid">
        {impactStats.map((stat) => (
          <article key={stat.label} className="ss-stat-card">
            <div className={`ss-stat-icon ss-stat-icon-${stat.tone}`} aria-hidden="true">
              {stat.icon}
            </div>
            <h3 className="ss-stat-value">{stat.value}</h3>
            <p className="ss-stat-label">{stat.label}</p>
            <p className="ss-stat-desc">{stat.desc}</p>
          </article>
        ))}
      </div>

      <div className="ss-extra-stats">
        {impactExtra.map((item) => (
          <div key={item.label} className="ss-extra-stat">
            <span className="ss-extra-icon" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ==========================================================================
   FINAL CTA
   ========================================================================== */
const NextSuccessCta: React.FC = () => (
  <section className="section ss-next-section">
    <div className="container">
      <div className="ss-next-banner">
        <div className="ss-next-copy">
          <p className="ss-next-eyebrow">
            <Trophy size={16} strokeWidth={2.2} aria-hidden="true" />
            YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h2 className="ss-next-title">Be Our Next Success Story</h2>
          <p className="ss-next-desc">
            Start your journey today and unlock opportunities that can change your future.
          </p>
          <div className="ss-next-actions">
            <button className="btn ss-next-primary" onClick={() => alert('Join Tumbo Eye 2.0')}>
              Join Tumbo Eye 2.0
            </button>
            <Link to="/opportunities" className="btn ss-next-outline">
              Explore Opportunities
            </Link>
          </div>
        </div>
        <img src={ctaGrad} alt="" className="ss-next-visual" />
      </div>
    </div>
  </section>
);

/* ==========================================================================
   PAGE
   ========================================================================== */
export const SuccessStories: React.FC = () => (
  <>
    <SuccessHero />
    <FeaturedStory />
    <CommunityImpact />
    <VideoTestimonials />
    <OurImpact />
    <NextSuccessCta />
  </>
);

export default SuccessStories;
