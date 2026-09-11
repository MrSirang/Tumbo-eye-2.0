import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
  CircleHelp,
  GraduationCap,
  IdCard,
  Search,
  Send,
  X,
} from 'lucide-react';
import tomeMascot from '../assets/tome-mascot.png';
import tumisoRobot from '../assets/tumiso-robot.png';

type ChatRole = 'user' | 'assistant';

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const QUICK_ACTIONS = [
  {
    id: 'jobs',
    label: 'Find job opportunities',
    icon: Search,
    reply:
      'Great choice! Browse open roles on our Opportunities page — filter by Jobs to see listings that match you.',
  },
  {
    id: 'scholarships',
    label: 'Find scholarships',
    icon: GraduationCap,
    reply:
      'I can help you explore scholarships. Head to Opportunities and select Scholarships to see funding options.',
  },
  {
    id: 'services',
    label: 'Find services near me',
    icon: Building2,
    reply:
      'Looking for local services? Check Opportunities for community services, shops, and support near you.',
  },
  {
    id: 'apply',
    label: 'How to apply on Tumbo',
    icon: IdCard,
    reply:
      'To apply: open any opportunity, tap View Details, then Apply. Create a free Tumbo account if you haven’t signed up yet.',
  },
  {
    id: 'general',
    label: 'General questions',
    icon: CircleHelp,
    reply:
      'Ask me anything about Tumbo — opportunities, partners, resources, or how to get started. What would you like to know?',
  },
] as const;

const DEMO_REPLIES = [
  'Thanks for your message! I’m ToMe — your Tumbo AI assistant. Live answers are coming soon; for now I can guide you around the site.',
  'Got it. Try the quick actions above, or visit Opportunities to explore jobs, scholarships, and more.',
  'I’m here to help you navigate Tumbo. Check Resources for guides, or Opportunities to find your next step.',
];

let messageSeq = 0;
const nextId = () => `tome-msg-${++messageSeq}`;

export const ToMeChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyIndex = useRef(0);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 180);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  const pushAssistant = (text: string) => {
    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: nextId(), role: 'assistant', text }]);
      setTyping(false);
    }, 650);
  };

  const handleQuickAction = (action: (typeof QUICK_ACTIONS)[number]) => {
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: 'user', text: action.label },
    ]);
    pushAssistant(action.reply);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setInput('');
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text }]);
    const reply = DEMO_REPLIES[replyIndex.current % DEMO_REPLIES.length];
    replyIndex.current += 1;
    pushAssistant(reply);
  };

  const showWelcome = messages.length === 0 && !typing;

  return (
    <div className={`tome-root${open ? ' is-open' : ''}`}>
      {open && (
        <div
          className="tome-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Chat with ToMe"
        >
          <header className="tome-header">
            <div className="tome-header-identity">
              <img src={tumisoRobot} alt="" className="tome-header-avatar" />
              <div>
                <strong>ToMe by Tumbo</strong>
                <span className="tome-status">
                  <span className="tome-status-dot" aria-hidden="true" />
                  Online
                </span>
              </div>
            </div>
            <button
              type="button"
              className="tome-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X size={18} strokeWidth={2.2} />
            </button>
          </header>

          <div className="tome-body" ref={bodyRef}>
            {showWelcome ? (
              <div className="tome-welcome">
                <img src={tomeMascot} alt="" className="tome-welcome-avatar" />
                <h2 className="tome-welcome-title">Hi! I&apos;m ToMe 👋</h2>
                <p className="tome-welcome-subtitle">
                  Your AI Assistant <strong>by Tumbo</strong>
                </p>
                <p className="tome-welcome-desc">
                  I can help you find opportunities, answer questions, and guide you around
                  Tumbo.
                </p>
                <div className="tome-actions">
                  {QUICK_ACTIONS.map((action) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={action.id}
                        type="button"
                        className="tome-action"
                        onClick={() => handleQuickAction(action)}
                      >
                        <span className="tome-action-icon" aria-hidden="true">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="tome-messages">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`tome-bubble tome-bubble-${msg.role}`}
                  >
                    {msg.role === 'assistant' && (
                      <img src={tumisoRobot} alt="" className="tome-bubble-avatar" />
                    )}
                    <p>{msg.text}</p>
                  </div>
                ))}
                {typing && (
                  <div className="tome-bubble tome-bubble-assistant tome-typing">
                    <img src={tumisoRobot} alt="" className="tome-bubble-avatar" />
                    <span className="tome-typing-dots" aria-label="ToMe is typing">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                )}
                {!showWelcome && (
                  <div className="tome-actions tome-actions-inline">
                    {QUICK_ACTIONS.slice(0, 3).map((action) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={action.id}
                          type="button"
                          className="tome-action"
                          onClick={() => handleQuickAction(action)}
                          disabled={typing}
                        >
                          <span className="tome-action-icon" aria-hidden="true">
                            <Icon size={15} strokeWidth={2} />
                          </span>
                          {action.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          <form className="tome-composer" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              aria-label="Message ToMe"
              disabled={typing}
            />
            <button
              type="submit"
              className="tome-send"
              aria-label="Send message"
              disabled={!input.trim() || typing}
            >
              <Send size={16} strokeWidth={2.2} />
            </button>
          </form>
          <p className="tome-disclaimer">
            ToMe can make mistakes. Please verify important information.
          </p>
        </div>
      )}

      <button
        type="button"
        className="tome-launcher"
        aria-expanded={open}
        aria-label={open ? 'Close ToMe chat' : 'Chat with ToMe'}
        onClick={() => setOpen((v) => !v)}
      >
        {!open && (
          <span className="tome-launcher-label">
            <strong>Chat with ToMe</strong>
            <span>Your Tumbo AI Assistant</span>
          </span>
        )}
        <span className="tome-launcher-fab">
          {open ? (
            <X size={22} strokeWidth={2.4} color="#fff" />
          ) : (
            <img src={tomeMascot} alt="" />
          )}
        </span>
      </button>
    </div>
  );
};
