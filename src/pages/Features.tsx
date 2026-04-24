import { MessageSquare, GitPullRequest, Tag, ClipboardList, Pin, Star, Palette, Users, Smile, Eye, FolderOpen, Archive } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const features = [
  { icon: <MessageSquare size={24} />, title: 'Real-Time DM & Group Chat', desc: 'Send messages to friends or create group chats. All conversations happen in real-time with instant delivery and read receipts. Support for both compact and expanded layouts.', details: ['1-on-1 direct messaging', 'Group chats with admin controls', 'Real-time message delivery', 'Read receipts and typing indicators'] },
  { icon: <GitPullRequest size={24} />, title: 'GitHub Context Sharing', desc: 'Attach Pull Requests, Issues, Branches, and Code snippets to any message. Share context from the exact page you\'re on with a single click.', details: ['PR and Issue context cards', 'Branch and code file references', 'Auto-detected context from current page', 'Personalized messages per recipient'] },
  { icon: <Tag size={24} />, title: 'Smart Triage', desc: 'Label and comment on GitHub Issues without ever leaving the chat. Apply labels, add comments, and manage your issue workflow inline.', details: ['Apply GitHub labels directly', 'Comment on issues from chat', 'Visual label color matching', 'Action sheet UI for quick actions'] },
  { icon: <ClipboardList size={24} />, title: 'Pad — Notes & Tasks', desc: 'A built-in notepad for quick thoughts, code snippets, and task lists. Pin important notes, mark tasks complete, and keep everything organized.', details: ['Quick note creation with titles', 'Task completion tracking', 'Pin and star important notes', 'Cloud sync for Pro users'] },
  { icon: <Pin size={24} />, title: 'Pin Messages', desc: 'Pin important messages to the top of any chat. Set expiry times for temporary pins or pin permanently for critical context.', details: ['Pin with optional expiry', 'Visual pin indicator', 'Quick unpin from context menu', 'Up to 5 pins on Free, unlimited on Pro'] },
  { icon: <Star size={24} />, title: 'Star Messages', desc: 'Star messages you want to revisit later. View all starred messages in a dedicated panel for quick reference.', details: ['Star any message instantly', 'Dedicated starred messages panel', 'Bulk unstar actions', 'Up to 50 on Free, unlimited on Pro'] },
  { icon: <Smile size={24} />, title: 'Message Reactions', desc: 'React to messages with emoji. Express yourself without typing a full reply.', details: ['Quick emoji reactions', 'Multiple reactions per message', 'Visual reaction counts', 'One-tap to react'] },
  { icon: <FolderOpen size={24} />, title: 'Custom Chat Lists', desc: 'Organize your chats into custom groups. Create lists for different projects, teams, or contexts.', details: ['Create named lists', 'Add any chat to a list', 'Quick filter by list', 'Drag to reorder'] },
  { icon: <Eye size={24} />, title: 'Online Presence', desc: 'See who\'s online in real-time. Know when your teammates are available before messaging them.', details: ['Real-time online/offline status', 'Last seen timestamps', 'Visual presence indicators', 'Privacy-respecting design'] },
  { icon: <Archive size={24} />, title: 'Archive & Clear', desc: 'Archive conversations you\'re done with. Clear chat history for a fresh start without deleting the contact.', details: ['Archive completed chats', 'Clear chat history per contact', 'Restore archived chats anytime', 'Separate archived section'] },
  { icon: <Palette size={24} />, title: 'Theming & Personalization', desc: 'Make RepoChat yours. Choose accent colors, switch between light and dark mode, and pick your preferred layout.', details: ['20+ accent color options', 'Light and dark mode', 'Compact and expanded layouts', 'Persistent theme preferences'] },
  { icon: <Users size={24} />, title: 'Group Management', desc: 'Full admin controls for group chats. Promote members, manage roles, update group info, and control who can join.', details: ['Admin and member roles', 'Promote/demote members', 'Custom group avatars', 'Group description editing'] },
]

export default function Features() {
  return (
    <div className="legal-page">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="badge mb-4"><Star size={14} /> Features</div>
            <h1 className="heading-lg">Built for the Way<br /><span className="text-gradient">Developers Actually Work</span></h1>
            <p>Every feature designed to keep you in flow on GitHub.</p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 900, margin: '0 auto' }}>
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={(i % 3) + 1}>
              <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
                <div>
                  <div className="card-icon">{f.icon}</div>
                  <h3 className="heading-sm">{f.title}</h3>
                  <p className="text-secondary mt-2" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {f.details.map((d, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
