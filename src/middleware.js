// pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function middleware(req) {
  if (req.geo.country === "CA") {
    return NextResponse.redirect("https://www.forcefinancecoin.ca/");
  }
}
