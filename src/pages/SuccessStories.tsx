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
import { Reveal } from '../components/Reveal';
import { AnimatedStat } from '../components/AnimatedStat';

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
  { icon: <Briefcase size={22} strokeWidth={2} />, label: 'Career Pathways' },
  { icon: <GraduationCap size={22} strokeWidth={2} />, label: 'Bursary Support' },
  { icon: <FileText size={22} strokeWidth={2} />, label: 'Skills Growth' },
  { icon: <Share2 size={22} strokeWidth={2} />, label: 'Community Impact' },
];

const communityStories = [
  {
    title: 'PCB Power Valves & Nkangala TVET Bursaries',
    desc: 'Through strategic partnerships, deserving students received bursary support, creating pathways toward higher education, professional development and long-term employment opportunities.',
    image: story1,
    focus: 'ss-focus-face',
    placeholder: false,
  },
  {
    title: 'IPT Mpumalanga U12 Netball Sponsorship',
    desc: 'Supporting grassroots sport by sponsoring young athletes, encouraging participation, teamwork and the development of future sporting talent.',
    image: story2,
    focus: 'ss-focus-face-high',
    placeholder: false,
  },
  {
    title: 'Community Athlete Sponsorship',
    desc: "Proudly supporting community athletes participating in one of South Africa's most iconic endurance events, promoting health, perseverance and community excellence.",
    image: story3,
    focus: 'ss-focus-face',
    placeholder: false,
  },
  {
    title: 'School of Excellence (SoE) Social Club',
    desc: 'Partnering with annual sporting events that unite communities through multiple sporting codes while identifying and nurturing emerging talent.',
    image: story4,
    focus: 'ss-focus-face',
    placeholder: false,
  },
  {
    title: 'Youth Leadership Impact',
    desc: 'Illustrative placeholder until official testimonials are supplied—highlighting how Tumbo helps community leaders access programmes that create real local impact.',
    image: story5,
    focus: 'ss-focus-face-high',
    placeholder: true,
  },
  {
    title: 'Career Growth Journey',
    desc: 'Illustrative placeholder until official success stories arrive—showing how Tumbo resources and verified opportunities support professional development.',
    image: story6,
    focus: 'ss-focus-face-close',
    placeholder: true,
  },
];

const videoList = [
  {
    title: 'Scholarship Success',
    person: 'Placeholder — University pathway story',
    image: videoThumb1,
    icon: <GraduationCap size={16} strokeWidth={2.2} />,
    focus: 'ss-focus-face',
  },
  {
    title: 'Career Growth Journey',
    person: 'Placeholder — Professional development story',
    image: videoThumb2,
    icon: <TrendingUp size={16} strokeWidth={2.2} />,
    focus: 'ss-focus-face',
  },
  {
    title: 'Entrepreneur Story',
    person: 'Placeholder — Startup founder story',
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
    label: 'Community Members',
    desc: 'Growing verified community reach',
  },
  {
    icon: <Sparkles size={20} />,
    tone: 'orange',
    value: '25K+',
    label: 'Opportunities Shared',
    desc: 'Connecting people to pathways',
  },
  {
    icon: <Award size={20} />,
    tone: 'purple',
    value: '5K+',
    label: 'Learning Outcomes',
    desc: 'Education and skills support',
  },
  {
    icon: <Briefcase size={20} />,
    tone: 'green',
    value: '10K+',
    label: 'Career Connections',
    desc: 'Linking talent with opportunity',
  },
];

const impactExtra = [
  { icon: <Globe2 size={18} />, value: '50+', label: 'Communities Reached' },
  { icon: <Handshake size={18} />, value: '300+', label: 'Partner Organizations' },
  { icon: <Calendar size={18} />, value: '1,500+', label: 'Events Hosted' },
  { icon: <Rocket size={18} />, value: '98%', label: 'Positive Feedback' },
];

/* ==========================================================================
   HERO
   ========================================================================== */
const SuccessHero: React.FC = () => (
  <section className="section section-blue-bg ss-page-hero">
    <div className="container ss-page-hero-grid">
      <Reveal className="ss-page-hero-content">
        <p className="ss-page-hero-brand">Tumbo</p>
        <div className="hero-tag-pill">SUCCESS STORIES</div>
        <h1 className="ss-page-hero-title">
          Real Stories. Real Success.{' '}
          <span className="eco2-title-accent">Real Impact.</span>
        </h1>
        <p className="ss-page-hero-desc">
          Discover how Tumbo is transforming lives through education, employment, entrepreneurship,
          community development and strategic partnerships across South Africa.
        </p>
        <div className="hero-btn-group">
          <a href="#featured-story" className="btn btn-primary">
            Explore Stories <ArrowRight size={16} />
          </a>
          <Link to="/partners" className="btn btn-outline ss-page-outline">
            Become a Partner
          </Link>
        </div>
        <p className="ss-coming-soon-note">
          Additional verified stories &amp; testimonials — pending organisation content
        </p>
      </Reveal>
      <Reveal className="ss-page-hero-visual" delay={0.1}>
        <img
          src={successHero}
          alt="Community leader presenting the Tumbo digital community engagement app"
          className="ss-page-hero-img"
        />
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   FEATURED STORY
   ========================================================================== */
const FeaturedStory: React.FC = () => (
  <section id="featured-story" className="section ss-featured-section">
    <div className="container">
      <Reveal>
        <div className="ss-featured-card">
          <div className="ss-featured-top">
            <div className="ss-featured-media">
              <img
                src={successFeatured}
                alt="Community success story celebration at an EMA Tumbo event"
                className="ss-featured-img"
              />
              <span className="ss-placeholder-badge">Featured example</span>
            </div>
            <div className="ss-featured-copy">
              <div className="section-tag">FEATURED STORY</div>
              <h2 className="ss-featured-title">
                Meet Our Inspiring <span className="highlight-blue">Success Story</span>
              </h2>
              <p className="ss-featured-desc">
                Discover how one opportunity can change a life. This featured layout showcases the
                journey style we&apos;ll use when official testimonials and images are supplied.
              </p>

              <div className="ss-featured-divider" />

              <div className="ss-testimonial">
                <div className="ss-testimonial-head">
                  <img src={successAvatar} alt="" className="ss-testimonial-avatar" />
                  <div>
                    <h3 className="ss-testimonial-name">Featured Community Member</h3>
                    <p className="ss-testimonial-role">Illustrative placeholder profile</p>
                  </div>
                </div>
                <div className="ss-testimonial-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#facc15" color="#facc15" />
                  ))}
                </div>
                <p className="ss-testimonial-quote">
                  &ldquo;Through Tumbo, I discovered opportunities and support that helped me take
                  the next step in my journey. Official quotes will replace this placeholder once
                  approved stories are provided.&rdquo;
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
      </Reveal>

      <Reveal className="ss-featured-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => alert('Full stories will be published once organisation content is ready.')}
        >
          Read Full Story <ArrowRight size={16} />
        </button>
        <button
          type="button"
          className="btn btn-outline ss-page-outline"
          onClick={() => alert('Video interviews — Coming Soon')}
        >
          Watch Interview
        </button>
        <p className="ss-coming-soon-note">Story detail pages &amp; video playback — Coming Soon</p>
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   COMMUNITY IMPACT STORIES
   ========================================================================== */
const CommunityImpact: React.FC = () => (
  <section id="community-impact" className="section ss-community-section">
    <div className="container">
      <Reveal className="ss-section-header text-center">
        <h2 className="ss-section-title">
          Stories That Inspire <span className="highlight-blue">Change</span>
        </h2>
        <p className="ss-section-subtitle">
          Every partnership, sponsorship and programme creates opportunities that strengthen
          communities and improve lives.
        </p>
      </Reveal>

      <div className="ss-community-grid">
        {communityStories.map((story, i) => (
          <Reveal key={story.title} delay={i * 0.05}>
            <article className="ss-story-card">
              <div className="ss-story-media">
                <img src={story.image} alt="" className={`ss-story-img ${story.focus}`} />
                {story.placeholder && <span className="ss-placeholder-badge">Placeholder</span>}
              </div>
              <div className="ss-story-body">
                <h3 className="ss-story-title">{story.title}</h3>
                <p className="ss-story-desc">{story.desc}</p>
                <button
                  type="button"
                  className="ss-story-link"
                  onClick={() =>
                    alert(
                      story.placeholder
                        ? 'Official story content will replace this placeholder soon.'
                        : `Full write-up for "${story.title}" will be available soon.`,
                    )
                  }
                >
                  Read Story <ArrowRight size={14} />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="ss-discover-box text-center">
        <h3 className="ss-discover-title">Discover More Inspiring Stories</h3>
        <p className="ss-discover-desc">
          More verified success stories will appear here as organisation content is approved.
        </p>
        <Link to="/opportunities" className="btn btn-primary">
          Explore Opportunities <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   VIDEO TESTIMONIALS
   ========================================================================== */
const VideoTestimonials: React.FC = () => (
  <section id="video-testimonials" className="section ss-video-section">
    <div className="container">
      <Reveal className="ss-section-header text-center">
        <div className="section-tag">VIDEO TESTIMONIALS</div>
        <h2 className="ss-section-title">
          Hear Their Stories in Their <span className="highlight-blue">Own Words</span>
        </h2>
        <p className="ss-section-subtitle">
          Video testimonials from students, professionals, entrepreneurs and scholarship recipients
          will be published here. Layout is ready—media is coming soon.
        </p>
      </Reveal>

      <div className="ss-video-layout">
        <Reveal>
          <button
            type="button"
            className="ss-video-main"
            onClick={() => alert('Video playback — Coming Soon')}
          >
            <img
              src={videoMain}
              alt="Featured video testimonial placeholder"
              className="ss-video-main-img ss-focus-video-main"
            />
            <span className="ss-placeholder-badge ss-placeholder-badge-video">Coming Soon</span>
            <span className="ss-video-play" aria-hidden="true">
              <Play size={28} fill="#fff" color="#fff" />
            </span>
            <span className="ss-video-caption">
              <strong>Featured Video Story:</strong>
              <span>Official interview coming soon</span>
            </span>
            <span className="ss-video-controls" aria-hidden="true">
              <span className="ss-video-progress">
                <span className="ss-video-progress-fill" />
              </span>
              <span className="ss-video-controls-row">
                <span>00:00 / 00:00</span>
                <span className="ss-video-controls-icons">
                  <Volume2 size={14} />
                  <Maximize2 size={14} />
                </span>
              </span>
            </span>
          </button>
        </Reveal>

        <div className="ss-video-list">
          {videoList.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <button
                type="button"
                className="ss-video-item"
                onClick={() => alert(`"${item.title}" video — Coming Soon`)}
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
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="ss-video-banner">
          <div className="ss-video-banner-icon" aria-hidden="true">
            <Play size={22} fill="currentColor" />
          </div>
          <div className="ss-video-banner-copy">
            <h3>Watch More Inspiring Stories</h3>
            <p>A growing library of community stories will be added as content is approved.</p>
          </div>
          <Link to="/contact" className="btn ss-video-banner-btn">
            Share Your Story <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==========================================================================
   OUR IMPACT
   ========================================================================== */
const OurImpact: React.FC = () => (
  <section className="section ss-our-impact-section">
    <div className="container">
      <Reveal className="ss-section-header text-center">
        <div className="section-tag">OUR IMPACT</div>
        <h2 className="ss-section-title">
          Changing Lives Through <span className="highlight-blue">Opportunities</span>
        </h2>
        <p className="ss-section-subtitle">
          Tumbo continues to connect communities with education, employment and development
          pathways across South Africa.
        </p>
      </Reveal>

      <div className="ss-stats-grid">
        {impactStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <article className="ss-stat-card">
              <div className={`ss-stat-icon ss-stat-icon-${stat.tone}`} aria-hidden="true">
                {stat.icon}
              </div>
              <h3 className="ss-stat-value">
                <AnimatedStat value={stat.value} />
              </h3>
              <p className="ss-stat-label">{stat.label}</p>
              <p className="ss-stat-desc">{stat.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="ss-extra-stats">
        {impactExtra.map((item) => (
          <Reveal key={item.label}>
            <div className="ss-extra-stat">
              <span className="ss-extra-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <strong>
                  <AnimatedStat value={item.value} />
                </strong>
                <span>{item.label}</span>
              </div>
            </div>
          </Reveal>
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
      <Reveal>
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
              <Link to="/opportunities" className="btn ss-next-primary">
                Explore Opportunities
              </Link>
              <Link to="/contact" className="btn ss-next-outline">
                Contact Tumbo
              </Link>
            </div>
            <p className="ss-coming-soon-note ss-coming-soon-note-light">
              Account registration — Coming Soon
            </p>
          </div>
          <img src={ctaGrad} alt="" className="ss-next-visual" />
        </div>
      </Reveal>
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
