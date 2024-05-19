import { CookieOptions, createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Code from https://supabase.com/docs/guides/auth/server-side/nextjs
export const createSupabaseClient = {
  browser: () => createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  ),
  server: () => {
    const cookieStore = cookies()

    return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      }
    )
  }
}