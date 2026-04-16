import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  cookies().delete('jaco-admin')
  return NextResponse.json({ ok: true })
}
