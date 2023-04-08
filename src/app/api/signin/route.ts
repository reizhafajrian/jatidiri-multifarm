import axios from 'axios'
import { serialize } from 'cookie'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const baseUrl = process.env.API_BASE_URL

  const res = await axios.post(`${baseUrl}/auth/login`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return NextResponse.json(res.data, {
    status: 200,
    headers: {
      'Set-Cookie': serialize('token', res.data.data.token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  })
}
