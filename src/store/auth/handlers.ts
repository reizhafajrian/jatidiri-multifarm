import { IChangePass, IUser } from '@/store/auth'
import { fetcher } from '@/utils/fetcher'
import { setCookie } from 'cookies-next'

export const signInHandler = async (payload: IUser) => {
  const res = await fetcher({
    url: '/api/auth/login',
    method: 'post',
    body: payload,
  })

  setCookie('token', res.data.token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    // httpOnly: true,
  })

  return res
}

export const addMemberHandler = async (payload: IUser) => {
  return
}

export const editMemberHandler = async (payload: IUser) => {
  return
}

export const deleteMemberHandler = async (payload: string) => {
  return
}

export const editProfileHandler = async (payload: IUser) => {
  return
}

export const changePassHandler = async (payload: IChangePass) => {
  return
}
