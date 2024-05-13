import { NextRequest, NextResponse } from "next/server";
import { createSupabaseClient } from "../utils/createSupabaseClient";

const excludedPaths = ["/login", "/error"];

export async function redirectToLoginMiddleware(request: NextRequest) {
    if(excludedPaths.includes(request.nextUrl.pathname))
    {
        return NextResponse.next();
    }

    const supabase = createSupabaseClient.server();
    const { error } = await supabase.auth.getUser();

    if (error)
    {
        const loginUrl = new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next();
}