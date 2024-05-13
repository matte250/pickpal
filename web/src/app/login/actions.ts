"use server"

import { redirect } from "next/navigation"
import { createSupabaseClient } from "../../utils/createSupabaseClient"

export async function login() {
    const supabase = createSupabaseClient.server()
    const { error } = await supabase.auth.signInAnonymously()
  
    if (error) {
        console.error('Error logging in:', error.message)
        redirect('/error')
    }
  
    redirect('/')
}
  