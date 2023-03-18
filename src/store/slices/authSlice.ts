import { toast } from '@/components/shared'
import { StateCreator } from 'zustand'
import { IAuth } from '../types'

const createAuthSlice: StateCreator<IAuth> = (set, get) => ({
  user: null,
  token: '',
  loadUser: () => {
    if (localStorage.getItem('user')) {
      let User = JSON.parse(localStorage.getItem('user') || '{}')
      set((state) => ({ ...state, user: User }))
    }
  },
  login: async (data, router) => {
    try {
      let res = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then((res) => res.json())

      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        return router.push('/dashboard')
      }
    } catch (err) {
      toast({
        type: 'error',
        message: 'wrong credentials!',
      })
    }
  },
  logout: async (router) => {
    try {
      await fetch('/api/signout')
      localStorage.removeItem('user')
      router.replace('/signin')
    } catch (err) {
      console.log(err)
    }
  },
  register: async (data, router) => {
    try {
    } catch (err) {}
  },
})

export default createAuthSlice
