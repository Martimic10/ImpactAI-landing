import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("waitlist").insert({
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
    });

    // Unique constraint violation — already on the list
    if (error?.code === "23505") {
      return NextResponse.json(
        { error: "You're already on the waitlist! We'll be in touch." },
        { status: 409 }
      );
    }

    if (error) {
      console.error("Supabase waitlist error:", error);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
