import { toast } from '@/components/shared'
import { Post, Put } from '@/lib/api'
import { StateCreator } from 'zustand'
import { IShedState } from '../types'

const createShedSlice: StateCreator<IShedState> = (set, get) => ({
  shed_code: '',
  addShed: async (data, router) => {
    try {
      const res = await Post({ url: '/api/shed/create', data })

      toast({
        type: 'success',
        message: res.message,
      })

      router.replace(`/shed/goat`)
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
  addShedData: async (data) => {
    try {
      const body = {}

      for (let value in data) {
        if (value.includes('_date')) {
          body[value] = data[value].toISOString()
        } else {
          body[value] = data[value]
        }
      }

      const res = await Post({ url: '/api/shed/data/create', data: body })

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
  },
  addShedAnimal: async (data) => {
    try {
      const { id, eartag_code: ear_tag, description } = data
      const url = `/api/shed/add-animal/${id}`
      const res = await Put({
        url,
        data: { ear_tag, description },
      })

      toast({
        type: 'success',
        message: res.message,
      })
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.error,
      })
    }
  },
  changeShedAnimal: async (shed_code, eartag_code) => {
    try {
      const res = await Put({
        url: `/api/shed/add-animal/${shed_code}`,
        data: { ear_tag: eartag_code },
      })

      toast({
        type: 'success',
        message: res.message,
      })
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.error,
      })
    }
  },
})

export default createShedSlice
