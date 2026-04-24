import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'What is RepoChat?', a: 'RepoChat is a Chrome extension that adds a full chat experience directly into GitHub. You can message friends, create groups, share code context, triage issues, and take notes — all without leaving GitHub.' },
  { q: 'Is RepoChat free?', a: 'Yes! RepoChat has a generous free tier with up to 15 friends, 5 groups, 10 pad entries, and more. For unlimited access and cloud sync, the Pro plan is $4.99/month.' },
  { q: 'How do I install RepoChat?', a: 'Simply install the RepoChat extension from the Chrome Web Store. Sign in with your GitHub account, and you\'re ready to chat. The extension appears as a sidebar on any GitHub page.' },
  { q: 'Is my data secure?', a: 'Absolutely. All data is protected with Row Level Security (RLS) on every database table. We use GitHub OAuth for authentication — we never see or store your password. Messages are stored securely in Supabase with per-user isolation.' },
  { q: 'Can I use RepoChat with my team?', a: 'Yes! Create groups for your team, link them to specific repositories, and collaborate in real-time. Admins can manage members, and everyone gets notifications for new messages.' },
  { q: 'What browsers are supported?', a: 'RepoChat currently supports Google Chrome and Chromium-based browsers (Edge, Brave, Arc). Firefox and Safari support is planned for the future.' },
  { q: 'Can I cancel my Pro subscription?', a: 'Yes, you can cancel anytime. Your Pro features will remain active until the end of your billing period. No questions asked.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ maxWidth: 680, margin: '0 auto' }}>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button className={`faq-question ${openIndex === i ? 'open' : ''}`} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {faq.q}
            <ChevronDown size={18} />
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  )
}
