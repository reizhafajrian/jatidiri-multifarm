import { Post } from '@/libs/api'
import { serialize } from 'cookie'

export async function POST(request: Request) {
  const body = await request.json()

  const res = await Post('/auth/login', body)

  return new Response(null, {
    status: 200,
    headers: {
      'Set-Cookie': serialize('token', res.data.token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  })
}
