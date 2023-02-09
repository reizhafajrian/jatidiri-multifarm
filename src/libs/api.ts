'use client'
interface IProps {
  url: string
  method?: string
  body?: object
  json?: boolean
}

export const fetcher = async ({ url, method, body, json = true }: IProps) => {
  const res = await fetch(url, {
    method: method ?? 'get',
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('API error')
  }

  if (json) {
    const data = await res.json()
    return data
  }
}
