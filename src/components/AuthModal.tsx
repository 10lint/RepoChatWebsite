import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Logo from './Logo'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

// Highly Abstract, "Incomprehensible" Geometric/Alien Animation
function AnimatedIllustration() {
  return (
    <div className="auth-modal-banner-illustration">
      <svg width="100%" height="100%" viewBox="0 0 380 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="deepVoid" cx="190" cy="210" r="250">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          <linearGradient id="alienGlow" x1="0" y1="0" x2="380" y2="420">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>

        {/* Base void glow */}
        <rect x="0" y="0" width="380" height="420" fill="url(#deepVoid)" />

        {/* Mesmerizing rotating neural/fractal mesh */}
        <motion.g
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "190px", originY: "210px" }}
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const x1 = 190 + Math.cos(angle) * 180;
            const y1 = 210 + Math.sin(angle) * 180;
            const x2 = 190 + Math.cos(angle * 2.5) * 80;
            const y2 = 210 + Math.sin(angle * 2.5) * 80;
            return (
              <motion.path
                key={`mesh-${i}`}
                d={`M 190 210 Q ${x2} ${y2} ${x1} ${y1} T ${190 + Math.cos(angle + Math.PI) * 150} ${210 + Math.sin(angle + Math.PI) * 150}`}
                stroke="url(#alienGlow)"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            )
          })}
        </motion.g>

        {/* Strange geometric intersecting rings */}
        <motion.g
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ originX: "190px", originY: "210px" }}
        >
          <circle cx="190" cy="210" r="140" stroke="rgba(14, 165, 233, 0.15)" strokeWidth="1" strokeDasharray="10 30" fill="none" />
          <circle cx="190" cy="210" r="100" stroke="rgba(244, 63, 94, 0.15)" strokeWidth="1" strokeDasharray="5 15" fill="none" />
          
          {/* Orbital anomalies */}
          <motion.circle
            cx="190" cy="70" r="3" fill="#0ea5e9"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="330" cy="210" r="2" fill="#8b5cf6"
            animate={{ scale: [1, 3, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="50" cy="210" r="4" fill="#f43f5e"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.g>

        {/* Abstract mathematical sine waves rippling through space */}
        <motion.path
          d="M -50 210 Q 50 100 190 210 T 430 210"
          stroke="url(#alienGlow)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 20, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M -50 210 Q 50 320 190 210 T 430 210"
          stroke="url(#alienGlow)"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: -20, opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        />

      </svg>
    </div>
  )
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signIn } = useAuth()

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
      document.documentElement.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
      document.documentElement.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
      document.documentElement.classList.remove('modal-open')
    }
  }, [isOpen])

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
