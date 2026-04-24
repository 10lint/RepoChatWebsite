import { MessageSquare, GitPullRequest, Tag, ClipboardList, Pin, Star, Palette, Zap, Users, Shield, ArrowRight, Globe } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import FAQ from '../components/FAQ'

const features = [
  { icon: <MessageSquare size={22} />, title: 'Real-Time Chat', desc: 'DM friends and create groups directly on GitHub. Never switch tabs to communicate.' },
  { icon: <GitPullRequest size={22} />, title: 'GitHub Context', desc: 'Attach PRs, Issues, Branches, and Code to messages. Every conversation has context.' },
  { icon: <Tag size={22} />, title: 'Smart Triage', desc: 'Label and comment on GitHub Issues directly from chat. Manage your workflow inline.' },
  { icon: <ClipboardList size={22} />, title: 'Pad & Notes', desc: 'Quick notes and tasks synced to the cloud. Your personal scratchpad on GitHub.' },
  { icon: <Pin size={22} />, title: 'Pin & Star', desc: 'Pin important messages and star what matters. Never lose critical context again.' },
  { icon: <Palette size={22} />, title: 'Theming', desc: 'Accent colors, light/dark mode, compact/expanded layout. Make it yours.' },
]

const steps = [
  { num: '1', title: 'Install the Extension', desc: 'Add RepoChat to Chrome in one click. No sign-ups, no downloads.' },
  { num: '2', title: 'Sign In with GitHub', desc: 'Authenticate with your GitHub account securely via OAuth. We never see your password.' },
  { num: '3', title: 'Start Chatting', desc: 'Open any GitHub page and start collaborating with developers in real-time.' },
]

export default function Landing() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
        <div className="hero-content">
          <ScrollReveal>
            <div className="badge mb-4">
              <Zap size={14} /> Built for developers, by developers
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h1 className="heading-xl">
              Chat on GitHub,<br /><span className="text-gradient">Right Where You Code</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="hero-subtitle">
              The only Chrome extension that brings real-time messaging, GitHub context sharing, and issue triage directly into your GitHub workflow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="hero-actions">
              <a href="#install" className="btn btn-primary btn-lg">
                <Globe size={20} /> Add to Chrome — It's Free
              </a>
              <a href="#features" className="btn btn-secondary btn-lg">
                See Features <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={4}>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value text-gradient">100%</span>
                <span className="stat-label">Free to Start</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value text-gradient">Real-time</span>
                <span className="stat-label">Messaging</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value text-gradient">Secure</span>
                <span className="stat-label">RLS Protected</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="badge mb-4"><Star size={14} /> Features</div>
              <h2 className="heading-lg">Everything You Need,<br />Built Into GitHub</h2>
              <p>No more context switching. RepoChat brings collaboration tools directly to where you work.</p>
            </div>
          </ScrollReveal>
          <div className="features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="card">
                  <div className="card-icon">{f.icon}</div>
                  <h3 className="heading-sm">{f.title}</h3>
                  <p className="text-secondary mt-2">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="badge mb-4"><Zap size={14} /> How It Works</div>
              <h2 className="heading-lg">Up and Running in<br /><span className="text-gradient">Under 60 Seconds</span></h2>
              <p>Three simple steps to transform your GitHub experience.</p>
            </div>
          </ScrollReveal>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="step-card">
                  <div className="step-number">{s.num}</div>
                  <h3 className="heading-sm">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="badge mb-4"><Users size={14} /> Pricing</div>
              <h2 className="heading-lg">Simple, Transparent Pricing</h2>
              <p>Start free, upgrade when you're ready. No hidden fees.</p>
            </div>
          </ScrollReveal>
          <div className="pricing-grid">
            <ScrollReveal delay={1}>
              <div className="pricing-card">
                <h3 className="heading-sm">Free</h3>
                <p className="text-secondary text-sm mt-2">For getting started</p>
                <div className="mt-4">
                  <span className="price">$0</span>
                  <span className="price-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> Up to 15 Friends</li>
                  <li><span className="check">✓</span> Up to 5 Groups</li>
                  <li><span className="check">✓</span> Up to 10 Pad entries</li>
                  <li><span className="check">✓</span> GitHub Context Sharing</li>
                  <li><span className="check">✓</span> Smart Triage</li>
                  <li><span className="check">✓</span> Interface Personalization</li>
                  <li><span className="x-mark">✗</span> <span className="disabled">Unlimited Everything</span></li>
                  <li><span className="x-mark">✗</span> <span className="disabled">Cloud Data Sync</span></li>
                </ul>
                <a href="#install" className="btn btn-secondary mt-6" style={{ width: '100%', justifyContent: 'center' }}>Get Started Free</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="pricing-card featured">
                <div className="popular-badge">Most Popular</div>
                <h3 className="heading-sm" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>Pro <Zap size={16} style={{ color: 'var(--primary)' }} /></h3>
                <p className="text-secondary text-sm mt-2">For power users</p>
                <div className="mt-4">
                  <span className="price text-gradient">$4.99</span>
                  <span className="price-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> Unlimited Friends</li>
                  <li><span className="check">✓</span> Unlimited Groups</li>
                  <li><span className="check">✓</span> Unlimited Pad entries</li>
                  <li><span className="check">✓</span> Unlimited Pins & Stars</li>
                  <li><span className="check">✓</span> Unlimited Custom Lists</li>
                  <li><span className="check">✓</span> Continuous Cloud Sync</li>
                  <li><span className="check">✓</span> Priority Feature Access</li>
                  <li><span className="check">✓</span> Premium Developer Support</li>
                </ul>
                <a href="#install" className="btn btn-primary mt-6" style={{ width: '100%', justifyContent: 'center' }}>Upgrade to Pro</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECURITY TRUST */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="badge mb-4"><Shield size={14} /> Security</div>
              <h2 className="heading-lg">Your Data, Your Control</h2>
              <p>Enterprise-grade security from day one. Every table protected with Row Level Security.</p>
            </div>
          </ScrollReveal>
          <div className="features-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { title: 'Row Level Security', desc: 'Every database table is protected with PostgreSQL RLS policies. Users can only access their own data.' },
              { title: 'GitHub OAuth', desc: 'We never see or store your password. Authentication is handled entirely by GitHub\'s secure OAuth flow.' },
              { title: 'Data Isolation', desc: 'Your messages, notes, and settings are completely isolated. No other user can read or modify your data.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="card">
                  <div className="card-icon"><Shield size={22} /></div>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p className="text-secondary mt-2">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="heading-lg">Frequently Asked Questions</h2>
              <p>Got questions? We've got answers.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <FAQ />
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 600, margin: '0 auto' }}>
              <h2 className="heading-lg">Ready to Transform Your<br /><span className="text-gradient">GitHub Workflow?</span></h2>
              <p className="text-secondary text-lg mt-4">Join developers who are already collaborating smarter on GitHub.</p>
              <div className="hero-actions mt-8">
                <a href="#install" className="btn btn-primary btn-lg"><Globe size={20} /> Add to Chrome — It's Free</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
