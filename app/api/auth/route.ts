// app/api/auth/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(req: Request) {
  const { event, session } = await req.json();

  if (event === "SIGNED_IN") {
    const { email } = session.user;

    // Check if user exists in Prisma DB
    let user = await prisma.user.findUnique({
      where: { email },
    });

    // If user doesn't exist, create a new one
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          createdAt: new Date(),
        },
      });
    }

    return NextResponse.json({ message: "User synced" });
  }

  return NextResponse.json({ error: "Unhandled event" }, { status: 400 });
}
