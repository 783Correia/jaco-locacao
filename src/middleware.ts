import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/seoblog') && !pathname.startsWith('/seoblog/login')) {
    const session = request.cookies.get('jaco-admin');
    if (!session || session.value !== process.env.ADMIN_SECRET) {
      return NextResponse.redirect(new URL('/seoblog/login', request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set('x-next-pathname', pathname);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|frota|logos|.*\\.mp4$).*)'],
};
