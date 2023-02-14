import Cookies from 'js-cookie'

export const fetcher = async (props: {
  url: string
  method?: string
  body?: object
  token?: string
}) => {
  const { url, method = 'get', body, token } = props

  const headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (token) headers.Authorization = `Bearer ${token}`

  const res = await fetch(url, {
    method,
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    headers,
  })

  const data = await res.json()
  return data
}

interface IUser {
  email: string
  password: string
  name?: string
  whatsapp_number?: string
  role?: string
}

export const register = async (user: IUser) => {
  const res = await fetcher({
    url: '/api/auth/register',
    method: 'post',
    body: user,
  })

  return res
}

export const signin = async (user: IUser) => {
  const res = await fetcher({
    url: '/api/auth/login',
    method: 'post',
    body: user,
  })

  Cookies.set('token', res.data.token, {
    path: '/',
    expires: 60 * 60 * 24 * 7,
    secure: true,
  })

  return res
}
