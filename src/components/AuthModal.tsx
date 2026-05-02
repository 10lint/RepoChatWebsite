import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Logo from './Logo'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

// Animated SVG path that draws itself — gives a premium "hand-drawn" feel
function AnimatedIllustration() {
  return (
    <div className="auth-modal-illustration">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer orbit ring */}
        <motion.circle
          cx="100" cy="100" r="80"
          stroke="rgba(139, 92, 246, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner orbit ring */}
        <motion.circle
          cx="100" cy="100" r="55"
          stroke="rgba(139, 92, 246, 0.15)"
          strokeWidth="1"
          strokeDasharray="4 8"
          fill="none"
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        {/* Animated draw-in circle path */}
        <motion.circle
          cx="100" cy="100" r="68"
          stroke="url(#authGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Chat bubble path — draws in */}
        <motion.path
          d="M80 85 Q80 75 90 75 L110 75 Q120 75 120 85 L120 105 Q120 115 110 115 L95 115 L85 125 L87 115 L90 115 Q80 115 80 105 Z"
          stroke="rgba(139, 92, 246, 0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(139, 92, 246, 0.06)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
        />
        {/* Code brackets inside bubble */}
        <motion.path
          d="M95 90 L90 95 L95 100"
          stroke="rgba(139, 92, 246, 0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.8 }}
        />
        <motion.path
          d="M105 90 L110 95 L105 100"
          stroke="rgba(139, 92, 246, 0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 2.0 }}
        />
        {/* Floating dots */}
        <motion.circle
          cx="40" cy="60" r="3"
          fill="rgba(139, 92, 246, 0.4)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        <motion.circle
          cx="160" cy="140" r="2.5"
          fill="rgba(139, 92, 246, 0.3)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 1, delay: 2.7 }}
        />
        <motion.circle
          cx="155" cy="55" r="2"
          fill="rgba(6, 182, 212, 0.4)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 1, delay: 2.9 }}
        />
        <motion.circle
          cx="50" cy="150" r="2"
          fill="rgba(6, 182, 212, 0.3)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 1, delay: 3.1 }}
        />
        <defs>
          <linearGradient id="authGrad" x1="20" y1="20" x2="180" y2="180">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signIn } = useAuth()

  const handleSignIn = async () => {
    await signIn()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="auth-modal-overlay" onClick={onClose}>
          <motion.div
            className="auth-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="auth-modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="auth-modal-close" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>

            <AnimatedIllustration />

            <div className="auth-modal-logo">
              <Logo size={24} />
              <span>RepoChat</span>
            </div>

            <h2 className="auth-modal-title">Sign in to continue</h2>
            <p className="auth-modal-desc">
              Connect your GitHub account to upgrade to Pro and unlock all features.
            </p>

            <button className="auth-modal-github-btn" onClick={handleSignIn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>

            <p className="auth-modal-footer">
              We only read your public profile. No repo access required.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
