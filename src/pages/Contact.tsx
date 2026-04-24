import { useState } from 'react'
import { Send, Mail, GitFork, MessageSquare } from 'lucide-react'
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
        <ScrollReveal>
          <div className="section-header">
            <div className="badge mb-4"><MessageSquare size={14} /> Contact</div>
            <h1 className="heading-lg">Get in Touch</h1>
            <p>Have a question, found a bug, or want to say hi? We'd love to hear from you.</p>
          </div>
        </ScrollReveal>

        <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto', alignItems: 'start' }}>
          {/* Contact Form */}
          <ScrollReveal delay={1}>
            <div className="card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                  <h3 className="heading-sm">Message Sent!</h3>
                  <p className="text-secondary mt-2">Thanks for reaching out. We'll get back to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="heading-sm mb-4">Send us a message</h3>
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" className="form-input" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" className="form-input" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" type="text" className="form-input" placeholder="What's this about?" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" className="form-input" placeholder="Tell us more..." required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div className="card-icon" style={{ marginBottom: 0, width: 40, height: 40 }}><Mail size={18} /></div>
                  <h4 className="heading-sm" style={{ fontSize: '1rem' }}>Email Support</h4>
                </div>
                <p className="text-secondary text-sm">For general questions and support:</p>
                <a href="mailto:alexcj10@yahoo.com" style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 600, display: 'block', marginTop: 8 }}>alexcj10@yahoo.com</a>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div className="card-icon" style={{ marginBottom: 0, width: 40, height: 40 }}><GitFork size={18} /></div>
                  <h4 className="heading-sm" style={{ fontSize: '1rem' }}>Bug Reports</h4>
                </div>
                <p className="text-secondary text-sm">Found a bug? Open an issue on GitHub:</p>
                <a href="https://github.com/alexcj10/repochat/issues" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 600, display: 'block', marginTop: 8 }}>Open an Issue →</a>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div className="card-icon" style={{ marginBottom: 0, width: 40, height: 40 }}><MessageSquare size={18} /></div>
                  <h4 className="heading-sm" style={{ fontSize: '1rem' }}>Response Time</h4>
                </div>
                <p className="text-secondary text-sm">We typically respond within <strong>48 hours</strong>. Pro subscribers receive priority support.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
