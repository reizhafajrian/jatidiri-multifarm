import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/domba') {
    return NextResponse.redirect(new URL('/domba/pejantan', request.url))
  }

  if (pathname === '/kambing') {
    return NextResponse.redirect(new URL('/kambing/pejantan', request.url))
  }

  if (pathname === '/sapi') {
    return NextResponse.redirect(new URL('/sapi/pejantan', request.url))
  }
}
