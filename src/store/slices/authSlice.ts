import { toast } from '@/components/shared'
import { Delete, Get, Post } from '@/lib/api'
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
      toast({
        type: 'error',
        message: 'Something went wrong!',
      })
    }
  },
  register: async (data, router) => {
    try {
      const res = await Post({ url: '/api/auth/register', data })

      toast({
        type: 'success',
        message: res.message,
      })
      router.refresh()
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.error,
      })
    }
  },
  updateUser: async (data, router) => {
    try {
      const res = await Post({
        url: '/api/user/update',
        data: { data: [data] },
      })

      toast({
        type: 'success',
        message: res.message,
      })
      router.refresh()
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.error,
      })
    }
  },
  updateProfile: async (data, router) => {
    try {
      console.log({ data })

      const res = await Post({
        url: '/api/user/update',
        data: { data: [data] },
      })

      const resNewData = await Get('/api/user/get/detail/' + data._id)

      localStorage.setItem('user', JSON.stringify(resNewData.data))

      toast({
        type: 'success',
        message: res.message,
      })
      router.refresh()
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.error,
      })
    }
  },
  changeRole: async (data, router) => {
    try {
      const res = await Post({
        url: '/api/user/role/update',
        data: { data: [data] },
      })

      toast({
        type: 'success',
        message: res.message,
      })
      router.refresh()
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
  deleteUser: async (id, router) => {
    try {
      const res = await Delete('/api/user/delete/' + id)

      toast({
        type: 'success',
        message: res.message,
      })
      router.refresh()
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
  changePass: async (data) => {
    try {
      const res = await Post({
        url: '/api/user/password/update',
        data,
      })

      toast({
        type: 'success',
        message: res.message,
      })
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }

  }
})

export default createAuthSlice
