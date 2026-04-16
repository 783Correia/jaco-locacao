import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.ADMIN_PASSWORD) {
    cookies().set('jaco-admin', process.env.ADMIN_SECRET!, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 })
}
