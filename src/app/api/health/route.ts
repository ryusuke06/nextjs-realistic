import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    uptime: process.uptime(),
    rss: process.memoryUsage().rss,
    pid: process.pid,
    timestamp: new Date().toISOString(),
  });
}
