export default function Logo({ size = 32, className = '' }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="rc-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="rc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer Glow shape */}
      <rect x="10" y="10" width="80" height="80" rx="24" fill="url(#rc-gradient)" opacity="0.1" filter="url(#rc-glow)" />
      
      {/* Background Squircle */}
      <rect x="10" y="10" width="80" height="80" rx="24" fill="url(#rc-gradient)" />
      
      {/* Inner Icon: Speech Bubbles / Branches */}
      <path 
        d="M32 36C32 31.5817 35.5817 28 40 28H60C64.4183 28 68 31.5817 68 36V52C68 56.4183 64.4183 60 60 60H50L36 72V60H32V36Z" 
        fill="#ffffff" 
        opacity="0.95" 
      />
      <path 
        d="M68 64C68 68.4183 64.4183 72 60 72H50L36 84V72H32" 
        stroke="rgba(255,255,255,0.4)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Git node dot inside bubble */}
      <circle cx="42" cy="44" r="5" fill="#8b5cf6" />
      <circle cx="58" cy="44" r="5" fill="#8b5cf6" />
    </svg>
  )
}
