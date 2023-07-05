import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { incomeType, milkType } from "@/lib/schemas/milk"
import { toast } from "@/components/ui/toast"

export interface IMilkInfo {
  income_total?: number
  income_date?: Date
  history_income_total?: string
  history_income_date?: Date
  income_percentage?: number

  milk_total?: number
  milk_price?: number
  milk_date?: Date
  milk_percentage?: number
}

export interface IMilkState {
  milkStatus: string
  incomeHistory: Array<any>

  addMilk: (data: milkType) => any
  editMilk: (data: milkType) => any
  changeMilkStatus: (id: string, status: string) => any
  setMilkHistory: (start: Date, end: Date) => Promise<number | undefined>
  addIncome: (data: incomeType) => any
  setIncomeHistory: (start: Date, end: Date) => void
}

const initialState = {
  milkStatus: "all",
  incomeHistory: [],
}

const createMilkSlice: StateCreator<IMilkState> = (set) => ({
  ...initialState,
  addMilk: async (data) => {
    try {
      return await Api.post({
        url: "/api/milk/create",
        data: {
          amount: data.milk,
          animal_id: data.eartag_code,
          milk_created_at: data.milk_date?.toISOString(),
        },
      })
    } catch (err) {
      throw err
    }
  },
  editMilk: async (data) => {
    try {
      return await Api.put({
        url: "/api/milk/update",
        data: {
          _id: data._id,
          amount: data.milk,
          animal_id: data.animal_id,
          date: data.milk_date,
        },
        isFormData: true,
      })
    } catch (err) {
      throw err
    }
  },
  setMilkHistory: async (start, end) => {
    try {
      const s = start.toISOString()
      const e = end.toISOString()
      if (start !== null && end !== null) {
        const res = await Api.get(`/api/milk/get/history?start=${s}&end=${e}`)
        return res.data
      }
    } catch (err: any) {
      if (err.status === 404) {
        toast({ type: "error", message: "result none" })
      }
    }
  },
  changeMilkStatus: async (_id, status) => {
    try {
      return await Api.put({
        url: "/api/milk/status/update",
        data: { _id, milk_status: status },
        isFormData: true,
      })
    } catch (err) {
      throw err
    }
  },
  addIncome: async (data) => {
    try {
      return await Api.post({
        url: "/api/milk/income/create",
        data,
      })
    } catch (err) {
      throw err
    }
  },
  setIncomeHistory: async (start, end) => {
    try {
      const s = start.toISOString()
      const e = end.toISOString()
      if (start !== null && end !== null) {
        const res = await Api.get(`/api/milk/income/get?start=${s}&end=${e}`)
        set((state) => ({ ...state, incomeHistory: res.data }))
      }
    } catch (err: any) {
      if (err.status === 404) {
        toast({ type: "error", message: "result none" })
      }
    }
  },
})

export default createMilkSlice
