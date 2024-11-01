import { NextResponse } from 'next/server';

export function middleware(req) {
  // Get the token from cookies
const token = req.cookies.get('token')?.value; // Use ?.value to access the cookie value directly

  // Check if token exists
  if (!token) {
    // Redirect to login if not authenticated
    console.log("Redirecting to login, token not found");
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If token exists, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Protect the /admin route
};
