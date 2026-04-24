import { Link } from 'react-router-dom'
import { MessageSquare, GitFork } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: 4 }}>
              <div className="nav-logo-icon"><MessageSquare size={18} /></div>
              RepoChat
            </div>
            <p>The developer chat extension built for GitHub. Collaborate without leaving your code.</p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/security">Security</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/security">Security</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://github.com/alexcj10/repochat" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <GitFork size={14} /> GitHub
            </a>
            <a href="mailto:alexcj10@yahoo.com">Email Support</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RepoChat. All rights reserved.</span>
          <span>Made with ❤️ for developers</span>
        </div>
      </div>
    </footer>
  )
}
