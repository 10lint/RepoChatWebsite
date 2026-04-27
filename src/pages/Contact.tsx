import { useState } from 'react'
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="legal-page">
      <div className="container">

        {/* ─── Hero ─── */}
        <ScrollReveal>
          <div className="section-head" style={{ marginBottom: 'var(--space-m)' }}>
            <div className="badge mb-6"><MessageSquare size={14} /> Contact</div>
            <h1 className="h2">Get in <span className="gradient-text">Touch</span></h1>
            <p>Have a question, found a bug, or want to say hi? We'd love to hear from you.</p>
          </div>
        </ScrollReveal>

        {/* ─── Contact Form ─── */}
        <ScrollReveal delay={1}>
          <div className="security-grid-card" style={{
            borderRadius: 20, padding: '36px 32px',
            maxWidth: 540, margin: '0 auto',
            '--card-glow': 'rgba(139, 92, 246, 0.4)',
            '--card-glow-bg': 'rgba(139, 92, 246, 0.3)',
          } as React.CSSProperties}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}><CheckCircle2 size={28} style={{ color: '#10b981' }} /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Message Sent!</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>We'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Send us a message</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 24 }}>We'll respond within 48 hours</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="contact-form-row">
                  <div>
                    <label htmlFor="contact-name" className="contact-label">Name</label>
                    <input id="contact-name" type="text" className="form-input" placeholder="Your name" required
                      style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10 }} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="contact-label">Email</label>
                    <input id="contact-email" type="email" className="form-input" placeholder="you@example.com" required
                      style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10 }} />
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label htmlFor="contact-subject" className="contact-label">Subject</label>
                  <input id="contact-subject" type="text" className="form-input" placeholder="What's this about?" required
                    style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10 }} />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="contact-message" className="contact-label">Message</label>
                  <textarea id="contact-message" className="form-input" placeholder="Tell us more..." required
                    style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, minHeight: 120 }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{
                  width: '100%', justifyContent: 'center', borderRadius: 10, padding: '12px 24px',
                }}>
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
