import { useRef } from 'react'
import { Shield, Zap, Globe, ArrowRight, GitFork, CheckSquare, Code, Share2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import FAQ from '../components/FAQ'
import Logo from '../components/Logo'

// Stacking Card Component
const StackingCard = ({ index, title, description, image, icon, reverse = false }: any) => {
  return (
    <div 
      className="stacking-card"
      style={{ 
        position: 'sticky', 
        top: `calc(10vh + ${index * 40}px)`, 
        marginBottom: '10vh',
        zIndex: index 
      }}
    >
      <div className={`card stack-card-inner ${reverse ? 'reverse' : ''}`}>
        <div style={{ flex: 1 }}>
          <div className="card-icon">{icon}</div>
          <h3 className="heading-md">{title}</h3>
          <p className="text-lg mt-4">{description}</p>
        </div>
        <div style={{ flex: 1, borderRadius: 16, overflow: 'hidden', border: '1px solid var(--surface-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <img src={image} alt={title} style={{ width: '100%', display: 'block' }} />
        </div>
      </div>
    </div>
  )
}

// Horizontal Scroll Component
const HorizontalScrollSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Map vertical scroll (0 to 1) to horizontal translation (0% to -66.66%)
  // We have 3 items, each taking 100vw. To see the last one, we must translate by -66.66% of the container width (which is 300vw).
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"])

  const horizontalItems = [
    {
      title: "Comment on PRs & Issues",
      desc: "Attach code snippets and branch references instantly.",
      image: "/RC_comment.png",
      icon: <Code size={24} />
    },
    {
      title: "Frictionless Sharing",
      desc: "Share specific lines of code instantly.",
      image: "/RC_share_popup.png",
      icon: <Share2 size={24} />
    },
    {
      title: "Shared via RepoChat",
      desc: "Perfect context, automatically formatted.",
      image: "/RC_shared_via_RC.png",
      icon: <GitFork size={24} />
    }
  ]

  return (
    <section ref={targetRef} style={{ position: 'relative', height: '400vh', background: 'var(--bg-alt)' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {/* Background glow for this section */}
        <div className="mesh-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', opacity: 0.05 }} />

        <motion.div style={{ x, display: 'flex', width: '300vw' }}>
          {horizontalItems.map((item, i) => (
            <div key={i} style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5vw' }}>
              <div className="card horizontal-item-card">
                <div className="card-icon" style={{ marginBottom: 24 }}>{item.icon}</div>
                <h3 className="heading-lg mb-4">{item.title}</h3>
                <p className="text-lg mb-10" style={{ maxWidth: 600 }}>{item.desc}</p>
                <div style={{ width: '100%', borderRadius: 24, overflow: 'hidden', border: '1px solid var(--surface-border)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function Landing() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.85])
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0])

  return (
    <>
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1" />
        <div className="mesh-glow mesh-glow-2" />
      </div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="hero" style={{ minHeight: '130vh' }}>
        <div className="hero-content">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <Logo size={56} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1}>
            <h1 className="heading-xl">
              GitHub, now with<br /><span className="text-gradient">Multiplayer.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={2}>
            <p className="hero-subtitle">
              The missing real-time collaboration layer for GitHub. Direct messages, group chats, code context sharing, and smart triage — right where you code.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={3}>
            <div className="hero-actions">
              <a href="#install" className="btn btn-primary btn-lg">
                <Globe size={20} /> Add to Chrome — It's Free
              </a>
              <a href="https://github.com/10lint/RepoChat" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                <GitFork size={20} /> Star on GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* MASSIVE HERO MOCKUP (Animated) */}
        <motion.div 
          className="container" 
          style={{ width: '100%', scale: heroScale, opacity: heroOpacity, marginTop: 80 }}
        >
          <div className="hero-mockup-wrapper" style={{ padding: 0, background: '#000' }}>
            <img src="/RC_main_UI.png" alt="RepoChat Main UI" style={{ width: '100%', display: 'block' }} />
          </div>
        </motion.div>
      </section>

      {/* STACKING CARDS SECTION */}
      <section className="section" style={{ position: 'relative', zIndex: 10, background: 'var(--bg)', paddingBottom: '20vh' }}>
        <div className="container" style={{ position: 'relative' }}>
          
          <div className="section-header" style={{ marginBottom: '10vh' }}>
            <div className="badge mb-6"><Zap size={14} /> Core Features</div>
            <h2 className="heading-lg">Everything you need,<br />right where you code.</h2>
          </div>

          <StackingCard 
            index={1} 
            title="Dev DNA & Context" 
            description="Share personalized development context and environments seamlessly with your team. No more 'works on my machine'."
            image="/RC_Dev_DNA.png"
            icon={<GitFork size={24} />}
          />
          
          <StackingCard 
            index={2} 
            title="Smart Triage Action Sheet" 
            description="Manage issues directly from chat. Apply labels, assign users, and close issues inline without ever losing your train of thought."
            image="/RC_triage.png"
            icon={<CheckSquare size={24} />}
            reverse={true}
          />
          
          <StackingCard 
            index={3} 
            title="Built-in Pad" 
            description="Jot down notes, snippets, and to-do lists directly in your sidebar. Your personal scratchpad synced to the cloud."
            image="/RC_pad.png"
            icon={<Code size={24} />}
          />
          
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      <HorizontalScrollSection />

      {/* PRICING PREVIEW */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="badge mb-6"><Zap size={14} /> Pricing</div>
              <h2 className="heading-lg">Transparent Pricing.</h2>
              <p>Start free, upgrade for unlimited power.</p>
            </div>
          </ScrollReveal>
          <div className="pricing-grid">
            <ScrollReveal delay={1}>
              <div className="pricing-card">
                <h3 className="heading-md">Free</h3>
                <p className="text-secondary mt-2">Everything you need to get started.</p>
                <div className="mt-8 mb-8">
                  <span className="price">$0</span><span className="price-period">/mo</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> 15 Friends & 5 Groups</li>
                  <li><span className="check">✓</span> GitHub Context Sharing</li>
                  <li><span className="check">✓</span> Smart Triage Actions</li>
                  <li><span className="x-mark">✗</span> <span className="disabled">Cloud Data Sync</span></li>
                </ul>
                <a href="#install" className="btn btn-secondary btn-lg mt-8" style={{ width: '100%' }}>Get Started Free</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="pricing-card featured">
                <h3 className="heading-md" style={{ color: 'var(--primary-light)' }}>Pro</h3>
                <p className="text-secondary mt-2">Unlimited limits & cloud sync.</p>
                <div className="mt-8 mb-8">
                  <span className="price text-gradient">$4.99</span><span className="price-period">/mo</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="check" style={{ color: 'var(--primary-light)' }}>✓</span> <strong>Unlimited</strong> Friends & Groups</li>
                  <li><span className="check" style={{ color: 'var(--primary-light)' }}>✓</span> <strong>Unlimited</strong> Pad & Lists</li>
                  <li><span className="check" style={{ color: 'var(--primary-light)' }}>✓</span> Continuous Cloud Data Sync</li>
                  <li><span className="check" style={{ color: 'var(--primary-light)' }}>✓</span> Priority Support</li>
                </ul>
                <a href="#install" className="btn btn-accent btn-lg mt-8" style={{ width: '100%' }}>Upgrade to Pro</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ & SECURITY TRUST */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            
            <ScrollReveal>
              <div className="badge mb-6"><Shield size={14} /> Security First</div>
              <h2 className="heading-md mb-6">Your data, highly secured.</h2>
              <p className="text-lg mb-8">
                RepoChat is built on a foundation of trust. Every message, note, and setting is protected by PostgreSQL Row Level Security (RLS). 
              </p>
              <ul className="pricing-features" style={{ marginTop: 0 }}>
                <li><span className="check">✓</span> GitHub OAuth Authentication (No passwords)</li>
                <li><span className="check">✓</span> Complete Data Isolation per user</li>
                <li><span className="check">✓</span> Encrypted in transit and at rest</li>
              </ul>
              <div className="mt-8">
                <a href="/security" className="btn btn-secondary">Read our Security Promise <ArrowRight size={16}/></a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="heading-md mb-8">FAQs</h2>
              <FAQ />
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--surface-border)' }}>
        <div className="mesh-glow mesh-glow-1" style={{ top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
              <h2 className="heading-xl mb-6">Start collaborating.</h2>
              <p className="text-lg mb-10">Join the developers bringing multiplayer to their GitHub workflow.</p>
              <a href="#install" className="btn btn-primary btn-lg" style={{ transform: 'scale(1.1)' }}>
                <Globe size={20} /> Add to Chrome — Free
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
