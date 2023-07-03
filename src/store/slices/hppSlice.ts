import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { hppType } from "@/lib/schemas/hpp"

export interface IHppState {
  hppStatus?: string
  changeStatusHpp: (data: hppType) => any
  editHpp: (data: hppType) => any
}

const createHppSlice: StateCreator<IHppState> = () => ({
  hppStatus: "all",
  changeStatusHpp: async (data) => {
    try {
      const url = `/api/${data.animal}/update`
      return await Api.put({ url, data, isFormData: true })
    } catch (err) {
      throw err
    }
  },
  editHpp: async (data) => {
    try {
      const url = `/api/hpp/update?animal_type=${data.animal}`
      return await Api.put({ url, data, isFormData: true })
    } catch (err: any) {
      throw err
    }
  },
})

export default createHppSlice
