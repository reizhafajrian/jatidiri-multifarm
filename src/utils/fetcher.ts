import Cookies from 'js-cookie'

export const fetcher = async (props: {
  url: string
  method?: string
  body?: any
  token?: string
  formData?: FormData
}) => {
  const { url, method = 'get', body, token, formData } = props

  let Authorization

  if (token) {
    Authorization = `Bearer ${token}`
  } else {
    const jwt = Cookies.get('token')
    if (jwt) {
      Authorization = `Bearer ${jwt}`
    }
  }

  const res = await fetch(url, {
    method,
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    ...(formData && { body: formData }),
    headers: {
      Authorization,
      'Content-Type': !formData ? 'application/json' : undefined,
    },
  })

  const data = await res.json()
  return data
}
