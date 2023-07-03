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
        set((state) => ({ ...state, animalTitle: "kambing" }))
        break
      case "sheep":
        set((state) => ({ ...state, animalTitle: "domba" }))
        break
      case "cow":
        set((state) => ({ ...state, animalTitle: "sapi" }))
    }
  },
  setGenderTitle: () => {
    switch (get().gender) {
      case "true":
        set((state) => ({ ...state, genderTitle: "jantan" }))
        break
      case "false":
        set((state) => ({ ...state, genderTitle: "betina" }))
    }
  },
  setFilter: ({ originMale, originFemale, vaccine }) => {
    originMale && set((state) => ({ ...state, originMale }))
    originFemale && set((state) => ({ ...state, originFemale }))
    vaccine && set((state) => ({ ...state, vaccine }))
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
