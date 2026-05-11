import { NextResponse } from "next/server";
import { getItem } from "@/lib/data";

export const dynamic = "force-dynamic";

type Body = { itemId?: unknown; count?: unknown };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const itemId = typeof body.itemId === "string" ? body.itemId : null;
  const count = typeof body.count === "number" ? body.count : null;
  if (!itemId || count === null || count < 1 || count > 10) {
    return NextResponse.json({ ok: false, error: "invalid payload" }, { status: 400 });
  }

  const item = await getItem(itemId);
  if (!item) {
    return NextResponse.json({ ok: false, error: "item not found" }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    itemId,
    total: count,
    subtotal: item.price * count,
  });
}
