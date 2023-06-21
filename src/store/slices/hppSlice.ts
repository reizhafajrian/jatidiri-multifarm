import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/Toast"

export interface IHppState {
  // hpp: IHpp
  // hppList: IHpp[]
  hppStatus: string
  editHpp: (data: IEditHpp, animal: string) => void
}

export interface IEditHpp {
  _id?: string
  eartag_code?: string
  hpp_price?: number
  sell_price?: number
  buyer?: number
  phoneNumber?: number
  description?: string
}

const createHppSlice: StateCreator<IHppState> = () => ({
  hppStatus: "all",
  editHpp: async (data, animal) => {
    try {
      const res = await Api.post({
        url: `/api/hpp/update?animal_type=${animal}`,
        data: { data: [data] },
      })

      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      return toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
})

export default createHppSlice
