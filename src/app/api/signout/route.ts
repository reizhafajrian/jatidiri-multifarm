import { serialize } from 'cookie'

export async function GET() {
  return new Response(null, {
    status: 200,
    headers: {
      'Set-Cookie': serialize('token', '', {
        httpOnly: true,
        path: '/',
        maxAge: 0,
      }),
    },
  })
}
