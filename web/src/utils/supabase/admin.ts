import { createClient } from "@supabase/supabase-js";

/* Wont work in the browser */
export const createSupabaseClient = () => createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)