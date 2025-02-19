import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { toast, Toaster } from "react-hot-toast";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/";
    
  const token = request.cookies.get('auth')?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(
      new URL("/movies", request.nextUrl)
    );
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/movies/:path*", "/create-movie" , '/edit-movie'],
};