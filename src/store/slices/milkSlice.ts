import { toast } from '@/components/shared'
import { Get, Post } from '@/lib/api'
import { StateCreator } from 'zustand'
import { IMilkState } from '../types'

const createMilkSlice: StateCreator<IMilkState> = (set, get) => ({
  milkStatus: 'all',
  milkHistory: 0,
  incomeHistory: 0,
  addMilk: async (data) => {
    try {
      const { created_by, milk, milk_date, eartag_code } = data

      const res = await Post({
        url: '/api/milk/create',
        data: {
          amount: milk,
          animal_id: eartag_code,
          milk_created_at: milk_date?.toISOString(),
          created_by,
        },
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
  },
  editMilk: async (data) => {
    try {
      const { _id, animal_id, created_by, milk, milk_date } = data

      const res = await Post({
        url: '/api/milk/update',
        data: {
          data: [
            {
              _id,
              amount: milk,
              animal_id,
              date: milk_date?.toISOString(),
              created_by,
            },
          ],
        },
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
  },
  setMilkHistory: async (start, end) => {
    try {
      const s = start.toISOString()
      const e = end.toISOString()
      if (start !== null && end !== null) {
        const res = await Get(`/api/milk/get/history?start=` + s + '&end=' + e)

        set((state) => ({ ...state, milkHistory: res.data }))
      }
    } catch (err: any) {
      // if (err.status === 404) {
      //   toast({
      //     type: 'error',
      //     message: 'result none',
      //   })
      // } else {
      //   console.log(err)
      // }
    }
  },
  changeMilkStatus: async (_id, status) => {
    try {
      const data = [{ _id, status }]

      const res = await Post({
        url: '/api/milk/status/update',
        data: { data },
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
  },
  addIncome: async (data) => {
    try {
      const { created_by, income_date, income_total } = data

      const res = await Post({
        url: '/api/milk/income/create',
        data: {
          amount: income_total,
          income_created_at: income_date?.toISOString(),
          created_by,
        },
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
  },
  setIncomeHistory: async (start, end) => {
    try {
      const s = start.toISOString()
      const e = end.toISOString()
      if (start !== null && end !== null) {
        const res = await Get(
          `/api/milk/income/get/history?start=` + s + '&end=' + e
        )

        set((state) => ({ ...state, incomeHistory: res.data }))
      }
    } catch (err: any) {
      if (err.status === 404) {
        toast({
          type: 'error',
          message: 'result none',
        })
      } else {
        console.log(err)
      }
    }
  },
})

export default createMilkSlice
