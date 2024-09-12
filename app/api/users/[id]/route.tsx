import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(req: NextRequest, params: Props) {
  const err = false;

  if (err) {
    return NextResponse.json({ error: "errah" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "giolo" });
}

export async function PUT(req: NextRequest, params: Props) {
  const body = await req.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    // validate req body
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  // update
  return NextResponse.json({ id: 1, name: "giolo" });
}

export function DELETE(req: NextRequest, params: Props) {
  // update
  return NextResponse.json({ id: 1, name: "giolo" });
}
