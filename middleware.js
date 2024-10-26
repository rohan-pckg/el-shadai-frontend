import { NextResponse } from 'next/server';


export function middleware(req) {
    const { pathname } = req.nextUrl;

    // Log to check if the token is accessible
    console.log("Token in middleware:", req.cookies.get('token'));

    // Check if the user is trying to access a protected route
    if (!req.cookies.get('token') && pathname.startsWith('/admin')) {
        // Redirect to the login page if the user is not authenticated
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}
