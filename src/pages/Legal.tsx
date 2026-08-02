import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { Reveal } from '../components/Reveal';

type LegalPageProps = {
  kind: 'privacy' | 'terms';
};

const copy = {
  privacy: {
    tag: 'LEGAL',
    title: 'Privacy Policy',
    body: 'Tumbo is committed to protecting personal information in line with POPIA principles. A full Privacy Policy will be published here once organisational and legal content is finalised.',
  },
  terms: {
    tag: 'LEGAL',
    title: 'Terms & Conditions',
    body: 'The Terms & Conditions that govern use of the Tumbo platform will be published here once organisational and legal content is finalised.',
  },
};

export const LegalPlaceholder: React.FC<LegalPageProps> = ({ kind }) => {
  const content = copy[kind];

  return (
    <section className="section legal-placeholder-section">
      <div className="container legal-placeholder-wrap">
        <Reveal>
          <div className="legal-placeholder-card">
            <span className="legal-placeholder-icon" aria-hidden="true">
              <FileText size={28} />
            </span>
            <div className="section-tag">{content.tag}</div>
            <h1 className="legal-placeholder-title">{content.title}</h1>
            <p className="legal-placeholder-desc">{content.body}</p>
            <p className="legal-placeholder-note">Full legal documentation — Coming Soon</p>
            <div className="legal-placeholder-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Tumbo <ArrowRight size={16} />
              </Link>
              <Link to="/" className="btn btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const PrivacyPage: React.FC = () => <LegalPlaceholder kind="privacy" />;
export const TermsPage: React.FC = () => <LegalPlaceholder kind="terms" />;

export default PrivacyPage;
