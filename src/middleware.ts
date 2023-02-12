import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
const PUBLIC_FILE = /\.(.*)$/

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/signin') ||
    pathname.startsWith('/register') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const jwt = request.cookies.get('token')

  if (!jwt) {
    request.nextUrl.pathname = '/signin'
    return NextResponse.redirect(request.nextUrl)
  }

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
