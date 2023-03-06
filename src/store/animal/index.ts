import { create } from 'zustand'
import * as h from './handlers'

export const useAnimalStore = create<IState>((set, get) => ({
  eartag_code: '',

  // ADULT
  animal: {} as IAnimal,
  addAnimal: h.addAnimalHandler,
  editAnimal: h.editAnimalHandler,
  deleteAnimal: h.deleteAnimalHandler,
  animalTColumns: h.animalTColumns,

  // CEMPEK
  cempek: {} as ICempek,
  addCempek: h.addCempekHandler,
  editCempek: h.editCempekHandler,
  deleteCempek: h.deleteCempekHandler,
  cempekTColumns: h.cempekTColumns,

  // OTHERS
  gender: undefined,
  animal_type: undefined,
  animalTitle: h.animalTitle,
  genderTitle: h.genderTitle,
  animalFormContent: {},
}))

interface IState {
  eartag_code: string
  // ADULT
  animal: IAnimal
  addAnimal: (payload: IAnimal & IAnimalProps & { uid: string }) => Promise<any>
  editAnimal: (
    payload: IAnimal & IAnimalProps & { uid: string }
  ) => Promise<void>
  deleteAnimal: (payload: string) => Promise<void>
  animalTColumns: any

  // CEMPEK
  cempek: ICempek
  addCempek: (
    payload: ICempek & IAnimalProps & { uid: string }
  ) => Promise<void>
  editCempek: (
    payload: ICempek & IAnimalProps & { uid: string }
  ) => Promise<void>
  deleteCempek: (payload: string) => Promise<void>
  cempekTColumns: any

  // OTHERS
  gender?: 'true' | 'false'
  animal_type?: 'goat' | 'sheep' | 'cow'
  animalFormContent: any
  animalTitle: (payload: string) => string
  genderTitle: (payload: string) => string
}

// INTERFACES
interface IAnimalProps {
  eartag_code?: string
  animal_type?: 'goat' | 'sheep' | 'cow'
  gender?: 'false' | 'true'
}

interface IAnimal {
  _id?: string
  type: string
  arrival_date: Date
  birth_date: Date
  origin_female: string
  origin_male: string
  origin: string
  weight: number
  purchase_price: number
  description: string
  files: any
}

interface ICempek {
  _id?: string
  type: string
  birth_date: Date
  female_origin: string
  male_origin: string
  birth_weight: number
  birth_condition: string
  gender: string
  description: string
}

export type { IState, IAnimalProps, IAnimal, ICempek }
