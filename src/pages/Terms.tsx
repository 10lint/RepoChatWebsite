import { FileText, CheckCircle, Layers, UserCheck, CreditCard, ShieldAlert, Pen, Lightbulb, Lock, XCircle, AlertTriangle, Scale, RefreshCw, Landmark, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

/* ─── Quick Highlights ─── */
const highlights = [
  { icon: <CheckCircle size={20} />, label: 'Free to Start', sub: 'Generous free tier included', color: '#10b981' },
  { icon: <CreditCard size={20} />, label: 'Cancel Anytime', sub: 'No lock-in, no questions asked', color: '#8b5cf6' },
  { icon: <Pen size={20} />, label: 'You Own Your Data', sub: 'Full content ownership', color: '#3b82f6' },
  { icon: <Lock size={20} />, label: 'Privacy First', sub: 'Governed by our Privacy Policy', color: '#f59e0b' },
]

/* ─── Terms Sections ─── */
const sections = [
  {
    icon: <CheckCircle size={22} />,
    title: '1. Acceptance of Terms',
    color: '#10b981',
    content: 'By installing, accessing, or using RepoChat, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not use the service.',
    items: [],
  },
  {
    icon: <Layers size={22} />,
    title: '2. Description of Service',
    color: '#8b5cf6',
    content: 'RepoChat is a Chrome extension that provides real-time messaging, collaboration, and productivity tools directly within the GitHub website. The service includes direct messaging, group chats, GitHub context sharing, issue triage, notes, and other features as described on our website.',
    items: [],
  },
  {
    icon: <UserCheck size={22} />,
    title: '3. Account Registration',
    color: '#3b82f6',
    content: 'To use RepoChat, you must sign in with a valid GitHub account. You are responsible for:',
    items: [
      'Maintaining the security of your GitHub account',
      'All activities that occur through your RepoChat account',
      'Providing accurate and complete information',
    ],
  },
  {
    icon: <CreditCard size={22} />,
    title: '4. Free and Pro Plans',
    color: '#f59e0b',
    content: '',
    subsections: [
      {
        subtitle: '4.1 Free Plan',
        desc: 'The Free plan provides limited access to RepoChat features, including up to 15 friends, 5 groups, 10 pad entries, 3 custom lists, 5 pinned messages, and 50 starred messages. Free plan data is stored locally in your browser.',
      },
      {
        subtitle: '4.2 Pro Plan',
        desc: 'The Pro plan ($4.99/month) provides unlimited access to all features with continuous cloud data synchronization. Payment is processed securely through Dodo Payments.',
      },
      {
        subtitle: '4.3 Billing',
        items: [
          'Pro subscriptions are billed monthly',
          'You may cancel your subscription at any time',
          'Upon cancellation, your Pro features remain active until the end of the current billing period',
          'Refunds are available for the current billing period if requested within 7 days of charge',
        ],
      },
    ],
    items: [],
  },
  {
    icon: <ShieldAlert size={22} />,
    title: '5. Acceptable Use',
    color: '#ef4444',
    content: 'You agree not to use RepoChat to:',
    items: [
      'Send spam, unsolicited messages, or harassing content',
      'Distribute malware, viruses, or harmful code',
      'Impersonate other users or entities',
      'Attempt to access other users\' data or accounts',
      'Circumvent or disable security features',
      'Use the service for any illegal purpose',
      'Abuse rate limits or overload the service intentionally',
      'Scrape, data-mine, or reverse engineer the service',
    ],
  },
  {
    icon: <Pen size={22} />,
    title: '6. Content Ownership',
    color: '#06b6d4',
    content: 'You retain ownership of all content you create through RepoChat, including messages, notes, and custom lists. By using the service, you grant us a limited license to store, transmit, and display your content solely for the purpose of providing the service.',
    items: [],
  },
  {
    icon: <Lightbulb size={22} />,
    title: '7. Intellectual Property',
    color: '#a855f7',
    content: 'The RepoChat name, logo, design, and underlying code are the intellectual property of RepoChat. You may not copy, modify, distribute, or create derivative works without our written permission.',
    items: [],
  },
  {
    icon: <Lock size={22} />,
    title: '8. Privacy',
    color: '#8b5cf6',
    content: 'Your use of RepoChat is also governed by our Privacy Policy, which describes how we collect, use, and protect your data.',
    items: [],
    hasLink: true,
  },
  {
    icon: <XCircle size={22} />,
    title: '9. Termination',
    color: '#f43f5e',
    content: 'We reserve the right to suspend or terminate your account if you:',
    items: [
      'Violate these Terms of Service',
      'Engage in abusive or harmful behavior',
      'Fail to pay for Pro subscription services',
    ],
    note: 'You may terminate your account at any time by contacting us. Upon termination, your data will be handled as described in our Privacy Policy.',
  },
  {
    icon: <AlertTriangle size={22} />,
    title: '10. Disclaimers',
    color: '#f59e0b',
    content: 'RepoChat is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee:',
    items: [
      'Uninterrupted or error-free service',
      'That the service will meet all your requirements',
      'The accuracy or reliability of any content',
    ],
  },
  {
    icon: <Scale size={22} />,
    title: '11. Limitation of Liability',
    color: '#6366f1',
    content: 'To the maximum extent permitted by law, RepoChat shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, profits, or business opportunities, arising from your use of the service.',
    items: [],
  },
  {
    icon: <ShieldAlert size={22} />,
    title: '12. Indemnification',
    color: '#14b8a6',
    content: 'You agree to indemnify and hold harmless RepoChat from any claims, damages, or expenses arising from your violation of these Terms or your use of the service.',
    items: [],
  },
  {
    icon: <RefreshCw size={22} />,
    title: '13. Changes to Terms',
    color: '#ec4899',
    content: 'We may update these Terms from time to time. Continued use of RepoChat after changes constitutes acceptance of the updated Terms. We will notify users of material changes via the extension or email.',
    items: [],
  },
  {
    icon: <Landmark size={22} />,
    title: '14. Governing Law',
    color: '#10b981',
    content: 'These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.',
    items: [],
  },
  {
    icon: <Mail size={22} />,
    title: '15. Contact',
    color: '#6366f1',
    content: 'For questions about these Terms, contact us at:',
    items: [
      'Email: alexcj10@yahoo.com',
    ],
  },
]

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="container">

        {/* ─── Hero Header ─── */}
        <ScrollReveal>
          <div className="section-head" style={{ marginBottom: 'var(--space-m)' }}>
            <div className="badge mb-6"><FileText size={14} /> Legal</div>
            <h1 className="h2">Terms of<br /><span className="gradient-text">Service</span></h1>
            <p>The rules of the road. Clear, fair, and designed to protect both you and RepoChat.</p>
            <p className="body-sm" style={{ marginTop: 8, color: 'var(--text-muted)' }}>Last updated: April 24, 2026</p>
          </div>
        </ScrollReveal>

        {/* ─── Highlights Bar ─── */}
        <ScrollReveal>
          <div className="rls-stats-grid" style={{
            maxWidth: 900,
            margin: '0 auto var(--space-l)',
          }}>
            {highlights.map((h, i) => (
              <div key={i} className="security-grid-card" style={{
                borderRadius: 16,
                padding: '24px 20px',
                textAlign: 'center',
                '--card-glow': `${h.color}40`,
                '--card-glow-bg': `${h.color}20`,
                background: `
                  radial-gradient(circle at top left, ${h.color}20 0%, transparent 70%),
                  linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                  rgba(15, 15, 20, 0.5)
                `,
                backgroundSize: '100% 100%, 24px 24px, 24px 24px',
              } as React.CSSProperties}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${h.color}15`,
                  border: `1px solid ${h.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: h.color, margin: '0 auto 12px',
                }}>
                  {h.icon}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>{h.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{h.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ─── Sections ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 860, margin: '0 auto' }}>
          {sections.map((section, i) => (
            <ScrollReveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div
                className="security-grid-card"
                style={{
                  borderRadius: 20,
                  padding: '28px 32px',
                  '--card-glow': `${section.color}40`,
                  '--card-glow-bg': `${section.color}30`,
                } as React.CSSProperties}
              >
                {/* Section Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${section.color}15`,
                    border: `1px solid ${section.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: section.color, flexShrink: 0,
                  }}>
                    {section.icon}
                  </div>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em', margin: 0 }}>
                    {section.title}
                  </h2>
                </div>

                {/* Main Content */}
                {section.content && (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: section.items.length > 0 || section.subsections ? 12 : 0 }}>
                    {section.hasLink ? (
                      <>Your use of RepoChat is also governed by our <Link to="/privacy" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Privacy Policy</Link>, which describes how we collect, use, and protect your data.</>
                    ) : section.content}
                  </p>
                )}

                {/* Subsections (for Plans section) */}
                {section.subsections?.map((sub, j) => (
                  <div key={j} style={{ marginBottom: j < (section.subsections?.length ?? 0) - 1 ? 20 : 0 }}>
                    {sub.subtitle && (
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8, opacity: 0.9 }}>
                        {sub.subtitle}
                      </h3>
                    )}
                    {sub.desc && (
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: sub.items ? 12 : 0 }}>
                        {sub.desc}
                      </p>
                    )}
                    {sub.items && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {sub.items.map((item, k) => (
                          <li key={k} style={{
                            display: 'flex', alignItems: 'flex-start', gap: 10,
                            fontSize: '0.84rem', color: 'var(--text-secondary)',
                            lineHeight: 1.6, marginBottom: 6, paddingLeft: 4,
                          }}>
                            <span style={{ color: section.color, flexShrink: 0, fontWeight: 700, fontSize: '0.75rem', marginTop: 3 }}>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Items List */}
                {section.items.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {section.items.map((item, k) => (
                      <li key={k} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontSize: '0.84rem', color: 'var(--text-secondary)',
                        lineHeight: 1.6, marginBottom: 6, paddingLeft: 4,
                      }}>
                        <span style={{ color: section.color, flexShrink: 0, fontWeight: 700, fontSize: '0.75rem', marginTop: 3 }}>
                          {section.title.includes('Acceptable Use') || section.title.includes('Termination') || section.title.includes('Disclaimers') ? '✕' : '✓'}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Note */}
                {section.note && (
                  <p style={{
                    marginTop: 12, fontSize: '0.82rem', fontWeight: 600,
                    color: section.color, opacity: 0.85,
                  }}>
                    {section.note}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  )
}
