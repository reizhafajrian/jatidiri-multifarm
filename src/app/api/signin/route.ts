import { serialize } from 'cookie'

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)

  const res = await fetch(process.env.API_BASE_URL + '/auth/login', {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())

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
