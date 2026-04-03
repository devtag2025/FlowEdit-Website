import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request:Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // After a successful Google sign-in on the website, send the user
      // to the dashboard app. NEXT_PUBLIC_DASHBOARD_URL is the full URL
      // of the separate flowedit-dashboard app (e.g. https://app.flowedit.video).
      const dashboardUrl =
        process.env.NEXT_PUBLIC_DASHBOARD_URL ||
        process.env.NEXT_PUBLIC_BASE_URL ||
        origin;

      return NextResponse.redirect(`${dashboardUrl}/dashboard`);
    }
  }

  // Auth failed → back to website login page with error flag
  return NextResponse.redirect(`${origin}/login?error=auth-code-error`);
}