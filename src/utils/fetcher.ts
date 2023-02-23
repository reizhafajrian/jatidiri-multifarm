import Cookies from 'js-cookie'

export const fetcher = async (props: {
  url: string
  method?: string
  body?: any
  token?: string
  formData?: FormData
}) => {
  const { url, method = 'get', body, token, formData } = props

  const headers: any = {
    // Accept: 'application/json',
    // 'Content-Type': formData ? 'multipart/form-data' : 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  } else {
    const jwt = Cookies.get('token')
    if (jwt) {
      headers.Authorization = `Bearer ${jwt}`
    }
  }

  const options = {
    method,
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    ...(formData && { body: formData }),
    headers,
  }

  const res = await fetch(url, { ...options })

  const data = await res.json()
  return data
}
