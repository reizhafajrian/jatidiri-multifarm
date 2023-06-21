import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/Toast"

export interface ICertificate {
  organization: string
  prefix: string
  tag: string
  issueDate: string
  exportTag: string
  registrationNum: string
  lambPlanId: string
  colour: string
  conception: string
  gender: string
  grade: string
  birthDate: string
  breeder: string
  owner: string
  notes: string
}

export interface IAnimal {
  animal?: string
  _id?: string
  type?: string
  eartag_code?: string
  cempek?: string
  arrival_date?: Date
  birth_date?: Date
  origin_female?: string
  origin_male?: string
  origin?: string
  weight?: number
  sell_price?: number
  purchase_price?: number
  status?: string
  files?: any
  birth_weight?: number
  birth_condition?: string
  gender?: string
  description?: string
  created_by?: string
}

interface IAnimalTitle {
  name: string
  title: string
}

interface IAnimalFilter {
  originMale?: string
  originFemale?: string
  vaccine?: string
}

export interface IAnimalState {
  animal: IAnimalTitle
  type: string
  originMale: string
  originFemale: string
  vaccine: string

  setAnimal: (value: string) => void
  setFilter: (data: IAnimalFilter) => void
  addAnimal: (data: IAnimal) => void
  editAnimal: (data: IAnimal) => void
  deleteAnimal: (id: string) => void
}

const animalTitleList = [
  { name: "goat", title: "Kambing" },
  { name: "sheep", title: "Domba" },
  { name: "cow", title: "Sapi" },
]

const initialState = {
  animal: { name: "", title: "" },
  type: "",
  originMale: "all",
  originFemale: "all",
  vaccine: "all",
}

const createAnimalSlice: StateCreator<IAnimalState> = (set, get) => ({
  ...initialState,
  setFilter: ({ originMale, originFemale, vaccine }) => {
    originMale && set((state) => ({ ...state, originMale }))
    originFemale && set((state) => ({ ...state, originFemale }))
    vaccine && set((state) => ({ ...state, vaccine }))
  },
  setAnimal: (name) => {
    const animal = animalTitleList.find((item) => item.name === name)
    set((state) => ({ ...state, animal }))
  },
  addAnimal: async (data) => {
    try {
      const isCempek = data.cempek === "true"
      const animal = get().animal.name

      const formData = new FormData()
      for (let value in data) {
        if (value.includes("_date")) {
          formData.append(value, data[value].toISOString())
          continue
        }
        formData.append(value, data[value])
      }
      if (data.files) formData.set("files", data.files[0])

      const res = await Api.post({
        url: isCempek
          ? `/api/${animal}/cempek/create`
          : `/api/${animal}/create`,
        data: isCempek ? data : formData,
      })

      toast({ type: "success", message: res.message })
      window.location.replace(`/${animal}/male`)
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  editAnimal: async (data) => {
    try {
      const isCempek = data.cempek === "true"
      const formData = new FormData()
      const animal = get().animal.name

      for (let value in data) {
        if (value.includes("_date")) {
          formData.append(value, data[value].toISOString())
          continue
        }
        formData.append(value, data[value])
      }
      if (data.files) formData.set("files", data.files[0])

      const res = await Api.post({
        url: isCempek
          ? `/api/${animal}/cempek/update`
          : `/api/${animal}/update`,
        data: { data: [Object.fromEntries(formData)] },
      })

      toast({ type: "success", message: res.message })
      window.location.replace(`/${animal}/male`)
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  deleteAnimal: async (id) => {
    try {
      const res = await Api.delete(`/api/${get().animal.name}/delete/${id}`)
      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
})

export default createAnimalSlice
