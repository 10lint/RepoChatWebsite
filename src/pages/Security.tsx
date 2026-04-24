import { Shield, Lock, Eye, Database, Key, Bug } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const securityFeatures = [
  { icon: <Database size={24} />, title: 'Row Level Security (RLS)', desc: 'Every single database table is protected with PostgreSQL Row Level Security policies. Users can only SELECT, INSERT, UPDATE, or DELETE their own data. Even if someone obtained your database URL, they cannot access another user\'s messages, notes, or settings.' },
  { icon: <Key size={24} />, title: 'GitHub OAuth Authentication', desc: 'We never see, store, or process your GitHub password. Authentication is handled entirely through GitHub\'s OAuth 2.0 flow. Your credentials stay with GitHub at all times.' },
  { icon: <Lock size={24} />, title: 'Encryption in Transit & at Rest', desc: 'All data transmitted between your browser and our servers is encrypted using TLS/SSL. All data stored in our database is encrypted at rest using AES-256 encryption provided by our infrastructure provider.' },
  { icon: <Eye size={24} />, title: 'Complete Data Isolation', desc: 'Your messages, notes, friend lists, and settings are completely isolated from other users. Our RLS policies ensure that database queries can never return data belonging to another user, even in the event of a bug in our application code.' },
  { icon: <Shield size={24} />, title: 'Minimal Permissions', desc: 'The RepoChat Chrome extension requests only the minimum permissions necessary: storage (for preferences), activeTab (for GitHub context), and scripting (for the chat UI). We do not request access to your browsing history, bookmarks, or other sensitive data.' },
  { icon: <Bug size={24} />, title: 'Responsible Disclosure', desc: 'If you discover a security vulnerability in RepoChat, please report it to us privately at alexcj10@yahoo.com. We take all security reports seriously and will respond within 48 hours. We appreciate responsible disclosure and will credit reporters if desired.' },
]

export default function Security() {
  return (
    <div className="legal-page">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="badge mb-4"><Shield size={14} /> Security</div>
            <h1 className="heading-lg">Security at<br /><span className="text-gradient">Every Layer</span></h1>
            <p>We built RepoChat with security as a foundational requirement, not an afterthought.</p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800, margin: '0 auto' }}>
          {securityFeatures.map((f, i) => (
            <ScrollReveal key={i} delay={(i % 3) + 1}>
              <div className="card">
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ marginBottom: 0, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h3 className="heading-sm">{f.title}</h3>
                    <p className="text-secondary mt-2" style={{ lineHeight: 1.8 }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Summary */}
        <ScrollReveal>
          <div className="section" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <h2 className="heading-md">Our Security Promise</h2>
            <p className="text-secondary text-lg mt-4" style={{ lineHeight: 1.8 }}>
              We believe that developer tools should be trustworthy by default. RepoChat is designed so that even if our application code had a vulnerability, the database-level security (RLS) would still prevent unauthorized access to your data.
            </p>
            <p className="text-secondary mt-4">
              Questions about our security practices? Contact us at <a href="mailto:alexcj10@yahoo.com" style={{ color: 'var(--primary)' }}>alexcj10@yahoo.com</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
