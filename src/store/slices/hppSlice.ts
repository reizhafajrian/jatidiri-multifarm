import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { hppType } from "@/lib/schemas/hpp"
import { toast } from "@/components/ui/toast"

export interface IHppState {
  hppStatus?: string
  editHpp: (data: hppType, animal: string) => void
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
