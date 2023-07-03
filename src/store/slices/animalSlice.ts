import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { adultType, cempekType } from "@/lib/schemas/animal"

interface IFilter {
  originMale?: string
  originFemale?: string
  vaccine?: string
}

export interface IAnimalState extends IFilter {
  animal: string
  animalTitle: string
  gender: string
  genderTitle: string
  type: string
  undefinedClusterTotal: number

  setAnimalTitle: () => void
  setGenderTitle: () => void
  setFilter: (data: IFilter) => void
  addAdultAnimal: (data: adultType) => any
  editAdultAnimal: (data: adultType) => any
  addCempekAnimal: (data: cempekType) => any
  editCempekAnimal: (data: cempekType) => any
  deleteAnimal: (animal: string, type: string, id: string) => any
}

const initialState = {
  animal: "",
  animalTitle: "",
  gender: "",
  genderTitle: "",
  type: "",
  originMale: "all",
  originFemale: "all",
  vaccine: "all",
  undefinedClusterTotal: 0,
}

const createAnimalSlice: StateCreator<IAnimalState> = (set, get) => ({
  ...initialState,
  setAnimalTitle: () => {
    switch (get().animal) {
      case "goat":
        set((s) => ({ ...s, animalTitle: "kambing" }))
        break
      case "sheep":
        set((s) => ({ ...s, animalTitle: "domba" }))
        break
      case "cow":
        set((s) => ({ ...s, animalTitle: "sapi" }))
    }
  },
  setGenderTitle: () => {
    switch (get().gender) {
      case "true":
        set((s) => ({ ...s, genderTitle: "jantan" }))
        break
      case "false":
        set((s) => ({ ...s, genderTitle: "betina" }))
    }
  },
  setFilter: ({ originMale, originFemale, vaccine }) => {
    originMale && set((s) => ({ ...s, originMale }))
    originFemale && set((s) => ({ ...s, originFemale }))
    vaccine && set((s) => ({ ...s, vaccine }))
  },
  addAdultAnimal: async (data) => {
    try {
      const url = `/api/${get().animal}/create`
      return await Api.post({
        url,
        data: { ...data, gender: get().gender },
        isFormData: true,
      })
    } catch (err) {
      throw err
    }
  },
  editAdultAnimal: async (data) => {
    try {
      const url = `/api/${get().animal}/update`
      return await Api.put({
        url,
        data: { ...data, gender: get().gender },
        isFormData: true,
      })
    } catch (err) {
      throw err
    }
  },
  addCempekAnimal: async (data) => {
    try {
      const url = `/api/${get().animal}/cempek/create`
      return await Api.post({ url, data, isFormData: true })
    } catch (err) {
      throw err
    }
  },
  editCempekAnimal: async (data) => {
    try {
      const url = `/api/${get().animal}/cempek/update`
      return await Api.put({ url, data, isFormData: true })
    } catch (err) {
      throw err
    }
  },
  deleteAnimal: async (animal, type, id) => {
    try {
      const isCempek = type === "cempek"
      const url = `/api/${animal}${isCempek ? "/cempek" : ""}/delete/${id}`
      return await Api.delete(url)
    } catch (err) {
      throw err
    }
  },
})

export default createAnimalSlice
