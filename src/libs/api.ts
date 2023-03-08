import { cookies } from 'next/headers'

const baseUrl = process.env.API_BASE_URL

export const Get = async (url: string) => {
  const res = await fetch(`${baseUrl}${url}`, {
    headers: {
      Authorization: `bearer ${cookies().get('token')?.value!}`,
    },
    cache: 'no-store',
  }).then((res) => res.json())

  return res
}

export const Post = async (url: string, body?: any, formData?: any) => {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'post',
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    ...(formData && { body: formData }),
    headers: {
      Authorization: `bearer ${cookies().get('token')?.value!}`,
      ...(!formData && { 'Content-Type': 'application/json' }),
    },
  }).then((res) => res.json())

  return res
}
