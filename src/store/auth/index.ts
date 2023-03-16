import { create } from 'zustand'
import * as h from './handlers'

export const useAuthStore = create<IState>((set) => ({
  user: {
    id: '63e5bdd29536b95a6759a525',
    first_name: 'john',
    last_name: 'doe',
    email: 'johndoe@gmail.com',
  } as IUser,

  token: '',
  signIn: h.signInHandler,
  addMember: h.addMemberHandler,
  editMember: h.editMemberHandler,
  deleteMember: h.deleteMemberHandler,
  editProfile: h.editProfileHandler,
  changePassword: h.changePassHandler,
}))

interface IState {
  user: IUser
  token: string
  signIn: (payload: IUser) => Promise<void>
  addMember: (payload: IUser) => Promise<void>
  editMember: (payload: IUser) => Promise<void>
  deleteMember: (payload: string) => Promise<void>
  editProfile: (payload: IUser) => Promise<void>
  changePassword: (payload: IChangePass) => Promise<void>
}

interface IUser {
  id?: string
  first_name?: string
  last_name?: string
  gender?: string
  email: string
  password: string
  phone_number?: string
  job_title?: string
  role?: string
}

interface IChangePass {
  old_pass: string
  new_pass: string
  confirm_pass: string
}

export type { IState, IUser, IChangePass }
