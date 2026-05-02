import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

export type Profile = {
  id: string
  username: string
  full_name?: string
  avatar_url: string
  is_pro?: boolean
}

type AuthContextType = {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
})

export const useAuth = () => useContext(AuthContext)

async function fetchProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, full_name, avatar_url, is_pro')
    .eq('id', userId)
    .single()

  if (error) {
    console.warn('[RepoChat] Profile fetch error:', error.message)
    return null
  }
  return data as Profile
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize session on mount
  useEffect(() => {
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        setUser(session.user)
        const p = await fetchProfile(session.user.id)
        setProfile(p)
      }
      setLoading(false)
    }

    initSession()

    // Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event: string, session: Session | null) => {
        if (session?.user) {
          setUser(session.user)
          const p = await fetchProfile(session.user.id)
          setProfile(p)
        } else {
          setUser(null)
          setProfile(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: window.location.origin + '/pricing',
      },
    })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
