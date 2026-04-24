import ScrollReveal from '../components/ScrollReveal'

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <ScrollReveal>
          <div className="legal-content">
            <h1 className="heading-lg">Privacy Policy</h1>
            <p className="last-updated">Last updated: April 24, 2026</p>

            <p>RepoChat ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension and related services.</p>

            <h2>1. Information We Collect</h2>

            <h3>1.1 Information from GitHub OAuth</h3>
            <p>When you sign in with GitHub, we receive:</p>
            <ul>
              <li>Your GitHub username and display name</li>
              <li>Your GitHub avatar URL</li>
              <li>Your GitHub user ID</li>
              <li>An OAuth access token (used to interact with GitHub on your behalf)</li>
            </ul>
            <p>We <strong>never</strong> receive or store your GitHub password.</p>

            <h3>1.2 Messages & Content</h3>
            <p>We store the messages you send through RepoChat, including:</p>
            <ul>
              <li>Direct messages to other users</li>
              <li>Group chat messages</li>
              <li>Notes and tasks created in the Pad feature</li>
              <li>GitHub context attached to messages (PR/Issue URLs, metadata)</li>
              <li>Message reactions and stars</li>
            </ul>

            <h3>1.3 Usage Data</h3>
            <p>We collect minimal usage data including:</p>
            <ul>
              <li>Online/offline presence status and last seen timestamps</li>
              <li>Chat preferences (theme, accent color, layout)</li>
              <li>Feature usage patterns (aggregate, non-identifying)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the RepoChat service</li>
              <li>Deliver messages and notifications to intended recipients</li>
              <li>Display your profile to other users (username, avatar)</li>
              <li>Manage your subscription and billing (Pro users)</li>
              <li>Detect and prevent abuse or violations of our Terms of Service</li>
            </ul>

            <h2>3. How We Store Your Data</h2>
            <p>All data is stored securely in <strong>Supabase</strong>, a PostgreSQL-based cloud database with enterprise-grade security. Key protections include:</p>
            <ul>
              <li><strong>Row Level Security (RLS)</strong>: Every table has RLS policies ensuring users can only access their own data</li>
              <li><strong>Encrypted at rest</strong>: All database storage is encrypted</li>
              <li><strong>Encrypted in transit</strong>: All connections use TLS/SSL</li>
              <li><strong>Isolated access</strong>: No user can read or modify another user's messages, notes, or settings</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Supabase</strong> — Database, authentication, and file storage (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a>)</li>
              <li><strong>Dodo Payments</strong> — Payment processing for Pro subscriptions (<a href="https://dodopayments.com/privacy" target="_blank" rel="noopener noreferrer">Dodo Payments Privacy Policy</a>)</li>
              <li><strong>GitHub OAuth</strong> — Authentication (<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>)</li>
            </ul>
            <p>We do not sell, trade, or share your personal data with any other third parties.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your data for as long as your account is active. When you delete your account:</p>
            <ul>
              <li>Your profile data is permanently deleted</li>
              <li>Your messages remain in group chats for continuity but are anonymized</li>
              <li>Your notes and custom lists are permanently deleted</li>
              <li>Your presence data is removed immediately</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> your personal data at any time through the extension</li>
              <li><strong>Delete</strong> your account and associated data by contacting us</li>
              <li><strong>Export</strong> your data upon request</li>
              <li><strong>Withdraw consent</strong> for data processing at any time</li>
            </ul>

            <h2>7. Cookies & Local Storage</h2>
            <p>RepoChat uses browser <strong>localStorage</strong> to store:</p>
            <ul>
              <li>Authentication session tokens</li>
              <li>Theme and layout preferences</li>
              <li>Cached data for offline functionality (Free tier)</li>
            </ul>
            <p>We do not use tracking cookies or analytics cookies.</p>

            <h2>8. Children's Privacy</h2>
            <p>RepoChat is not intended for use by anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of material changes by posting the updated policy on this page with a revised "Last updated" date.</p>

            <h2>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:alexcj10@yahoo.com">alexcj10@yahoo.com</a></li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
