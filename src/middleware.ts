import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/sheep') {
    return NextResponse.redirect(new URL('/sheep/male', request.url))
  }

  if (pathname === '/goat') {
    return NextResponse.redirect(new URL('/goat/male', request.url))
  }

  if (pathname === '/cow') {
    return NextResponse.redirect(new URL('/cow/male', request.url))
  }

  if (pathname === '/shed') {
    return NextResponse.redirect(new URL('/shed/goat', request.url))
  }
}
