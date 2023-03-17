import { useAuthStore } from '@/store/auth'

export const Get = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `bearer ${useAuthStore.getState().token}`,
    },
  }).then((res) => res.json())

  return res
}

type postType = {
  url: string
  body?: any
  formData?: any
}

export const Post = async ({ url, body, formData }: postType) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    ...(formData && { body: formData }),
    headers: {
      Authorization: `bearer ${useAuthStore.getState().token ?? undefined}`,
      ...(!formData && { 'Content-Type': 'application/json' }),
    },
  }).then((res) => res.json())

  return res
}

export const Delete = async (url: string) => {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `bearer ${useAuthStore.getState().token}`,
    },
  }).then((res) => res.json())

  return res
}

export const Put = async ({ url, body, formData }: postType) => {
  const res = await fetch(url, {
    method: 'PUT',
    credentials: 'include',
    ...(body && { body: JSON.stringify(body) }),
    ...(formData && { body: formData }),
    headers: {
      Authorization: `bearer ${useAuthStore.getState().token ?? undefined}`,
      ...(!formData && { 'Content-Type': 'application/json' }),
    },
  }).then((res) => res.json())

  return res
}
