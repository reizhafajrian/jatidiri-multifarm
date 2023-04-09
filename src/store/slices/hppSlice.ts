import { toast } from '@/components/shared'
import { Post } from '@/lib/api'
import { StateCreator } from 'zustand'
import { IHppState } from '../types'

const createHppSlice: StateCreator<IHppState> = (set, get) => ({
  hppStatus: 'all',
  editHpp: async (data, animal) => {
    try {

      
      const url = `/api/hpp/update?animal_type=${animal}`

      const res = await Post({
        url,
        data: { data: [data] },
      })

      toast({
        type: 'success',
        message: res.message,
      })
    } catch (err: any) {
      return toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
})

export default createHppSlice
