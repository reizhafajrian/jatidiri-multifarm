import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/Toast"

export interface IMilk {
  _id?: string
  eartag_code?: string
  milk?: number
  milk_date?: Date
  // history_milk_date?: Date
  history_milk?: number
  animal_id?: string
  created_by?: string
}

export interface IMilkInfo {
  income_total?: number
  income_date?: Date
  history_income_total?: string
  history_income_date?: Date
  income_percentage?: number

  milk_total?: number
  milk_date?: Date
  milk_percentage?: number
  created_by?: string
}

export interface IMilkState {
  // milk: IMilk
  // milkInfo: IMilkInfo
  // milkList: IMilk[]
  milkStatus: string
  // milkHistory: number
  incomeHistory: number
  addMilk: (data: IMilk) => void
  editMilk: (data: IMilk) => void
  setMilkHistory: (start: Date, end: Date) => Promise<number | undefined>
  changeMilkStatus: (id: string, status: string) => void
  addIncome: (data: IMilkInfo) => void
  setIncomeHistory: (start: Date, end: Date) => void
}

const initialState = {
  milkStatus: "all",
  incomeHistory: 0,
}

const createMilkSlice: StateCreator<IMilkState> = (set) => ({
  ...initialState,
  addMilk: async (data) => {
    try {
      const { created_by, milk, milk_date, eartag_code } = data

      const res = await Api.post({
        url: "/api/milk/create",
        data: {
          amount: milk,
          animal_id: eartag_code,
          milk_created_at: milk_date?.toISOString(),
          created_by,
        },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  editMilk: async (data) => {
    try {
      const { _id, animal_id, created_by, milk, milk_date } = data

      const res = await Api.post({
        url: "/api/milk/update",
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

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  setMilkHistory: async (start, end) => {
    try {
      const s = start.toISOString()
      const e = end.toISOString()
      if (start !== null && end !== null) {
        const { data } = await Api.get(
          `/api/milk/get/history?start=` + s + "&end=" + e
        )
        return data
      }
    } catch (err: any) {
      console.log(err)
      if (err.status === 404) {
        toast({ type: "error", message: "result none" })
      }
    }
  },
  changeMilkStatus: async (_id, status) => {
    try {
      const data = [{ _id, status }]

      const res = await Api.post({
        url: "/api/milk/status/update",
        data: { data },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  addIncome: async (data) => {
    try {
      const { created_by, income_date, income_total } = data

      const res = await Api.post({
        url: "/api/milk/income/create",
        data: {
          amount: income_total,
          income_created_at: income_date?.toISOString(),
          created_by,
        },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  setIncomeHistory: async (start, end) => {
    try {
      const s = start.toISOString()
      const e = end.toISOString()
      if (start !== null && end !== null) {
        const res = await Api.get(
          `/api/milk/income/get/history?start=` + s + "&end=" + e
        )
        set((state) => ({ ...state, incomeHistory: res.data }))
      }
    } catch (err: any) {
      console.log(err)
      if (err.status === 404) {
        toast({ type: "error", message: "result none" })
      }
    }
  },
})

export default createMilkSlice
