import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/toast"

export interface IShed {
  _id?: string
  shed_code?: string
  animal_type?: string
  animal_weight?: string
  average_weight?: number
  average_age?: number
  feed?: string
  feed_weight?: number
  age_range?: string
  description?: string
}

export interface IShedDetail {
  _id?: string
  updated_at?: Date
  shed_code?: string

  data_feed_date?: Date
  data_feed_type?: string
  data_feed_price?: number
  data_feed_stock?: number
  data_vitamin_date?: Date
  data_vitamin_type?: string
  data_vitamin_price?: number
  data_vitamin_stock?: number
  data_vaccine_date?: Date
  data_vaccine_type?: string
  data_vaccine_price?: number
  data_vaccine_stock?: number
  data_anthelmintic_date?: Date
  data_anthelmintic_type?: string
  data_anthelmintic_price?: number
  data_anthelmintic_stock?: number
}

export interface IShedAnimal {
  id?: string
  eartag_code?: string
  description?: string
}

export interface IShedState {
  shed_id: string
  shed_code: string
  // shed: IShed
  // shedDetail: IShedDetail

  addShed: (data: IShed) => void
  addShedData: (data: IShedDetail) => void
  addShedAnimal: (data: IShedAnimal) => void
  changeShedAnimal: (shed_code: string, eartag_code?: string) => void
}

const initialState = {
  shed_id: "",
  shed_code: "",
}

const createShedSlice: StateCreator<IShedState> = () => ({
  ...initialState,
  addShed: async (data) => {
    try {
      const res = await Api.post({ url: "/api/shed/create", data })
      toast({ type: "success", message: res.message })
      window.location.replace(`/shed/${data.animal_type}`)
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  addShedData: async (data) => {
    try {
      const body = {}

      const res = await Api.post({ url: "/api/shed/data/create", data: body })
      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  addShedAnimal: async (data) => {
    try {
      const { id, eartag_code: ear_tag, description } = data
      const res = await Api.put({
        url: `/api/shed/add-animal/${id}`,
        data: { ear_tag, description },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
  changeShedAnimal: async (shed_code, eartag_code) => {
    try {
      const res = await Api.put({
        url: `/api/shed/add-animal/${shed_code}`,
        data: { ear_tag: eartag_code },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
})

export default createShedSlice
