// middleware.js
import { NextResponse } from 'next/server';

// Define a function to check if the user is authenticated
const isAuthenticated = (req) => {
  // Implement your authentication logic here
  // For example, check for a cookie or token in the headers
  const token = req.cookies.get('token'); // Example using a cookie
  return !!token; // Return true if authenticated, false otherwise
};

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the user is trying to access an admin route
  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated(req)) {
      // Redirect to login page if not authenticated
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to continue if authenticated or not in admin routes
  return NextResponse.next();
}

// Define the routes where the middleware should apply
export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to all admin routes
};
