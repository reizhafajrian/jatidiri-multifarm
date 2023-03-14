import { getCookie } from 'cookies-next'

export const fetcher = async (props: {
  url: string
  method?: string
  body?: any
  formData?: FormData
}) => {
  const { url, method = 'get', body, formData } = props

  const res = await fetch(url, {
    method,
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    ...(formData && { body: formData }),
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
      ...(!formData && { 'Content-Type': 'application/json' }),
    },
  })

  const data = await res.json()
  return data
}

export const get = async (url: string) => {
  const r = await fetch(url, {
    headers: {
      // Authorization: `Bearer ${getCookie('token')}`,
    },
  })

  const data = await r.json()

  return data
}
