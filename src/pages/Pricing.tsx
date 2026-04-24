import { Zap, Globe } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import FAQ from '../components/FAQ'

export default function Pricing() {
  return (
    <div className="legal-page">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="badge mb-4"><Zap size={14} /> Pricing</div>
            <h1 className="heading-lg">Simple, Transparent<br /><span className="text-gradient">Pricing</span></h1>
            <p>Start free. Upgrade when you need more. Cancel anytime.</p>
          </div>
        </ScrollReveal>

        <div className="pricing-grid">
          <ScrollReveal delay={1}>
            <div className="pricing-card">
              <h3 className="heading-sm">Free</h3>
              <p className="text-secondary text-sm mt-2">For getting started</p>
              <div className="mt-4"><span className="price">$0</span><span className="price-period">/month</span></div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Up to 15 Friends</li>
                <li><span className="check">✓</span> Up to 5 Groups</li>
                <li><span className="check">✓</span> Up to 10 Pad entries</li>
                <li><span className="check">✓</span> Up to 3 Custom Lists</li>
                <li><span className="check">✓</span> Up to 5 Pinned Messages</li>
                <li><span className="check">✓</span> Up to 50 Starred Messages</li>
                <li><span className="check">✓</span> GitHub Context Sharing</li>
                <li><span className="check">✓</span> Smart Triage</li>
                <li><span className="check">✓</span> Message Reactions</li>
                <li><span className="check">✓</span> Interface Personalization</li>
                <li><span className="x-mark">✗</span> <span className="disabled">Unlimited Everything</span></li>
                <li><span className="x-mark">✗</span> <span className="disabled">Cloud Data Sync</span></li>
                <li><span className="x-mark">✗</span> <span className="disabled">Priority Support</span></li>
              </ul>
              <a href="#install" className="btn btn-secondary mt-6" style={{ width: '100%', justifyContent: 'center' }}><Globe size={16} /> Get Started Free</a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3 className="heading-sm" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>Pro <Zap size={16} style={{ color: 'var(--primary)' }} /></h3>
              <p className="text-secondary text-sm mt-2">For power users</p>
              <div className="mt-4"><span className="price text-gradient">$4.99</span><span className="price-period">/month</span></div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> <strong>Unlimited</strong> Friends</li>
                <li><span className="check">✓</span> <strong>Unlimited</strong> Groups</li>
                <li><span className="check">✓</span> <strong>Unlimited</strong> Pad entries</li>
                <li><span className="check">✓</span> <strong>Unlimited</strong> Custom Lists</li>
                <li><span className="check">✓</span> <strong>Unlimited</strong> Pinned Messages</li>
                <li><span className="check">✓</span> <strong>Unlimited</strong> Starred Messages</li>
                <li><span className="check">✓</span> All Free features included</li>
                <li><span className="check">✓</span> Continuous Cloud Data Sync</li>
                <li><span className="check">✓</span> Priority Access to Features</li>
                <li><span className="check">✓</span> Premium Developer Support</li>
              </ul>
              <a href="#install" className="btn btn-primary mt-6" style={{ width: '100%', justifyContent: 'center' }}>Upgrade to Pro</a>
              <p className="text-center text-muted text-xs mt-4">Secure checkout via Dodo Payments. Cancel anytime.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ */}
        <div className="section">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="heading-md">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}><FAQ /></ScrollReveal>
        </div>
      </div>
    </div>
  )
}
