import { create } from 'zustand'
import * as h from './handlers'

export const useAnimalStore = create<IState>((set, get) => ({
  addAnimal: h.addAnimalHandler,
  editAnimal: h.editAnimalHandler,
  deleteAnimal: h.deleteAnimalHandler,

  eartag_code: '',
  origin_male: 'all',
  origin_female: 'all',
  animalTitle: h.animalTitle,
  genderTitle: h.genderTitle,
  animalTColumns: h.animalTColumns,
  cempekTColumns: h.cempekTColumns,
}))

// INTERFACES
interface IState {
  addAnimal: (payload: IAnimal) => Promise<any>
  editAnimal: (payload: IAnimal) => Promise<any>
  deleteAnimal: (payload: IAnimal) => Promise<any>
  animalTColumns: any
  cempekTColumns: any

  // animal?: 'goat' | 'sheep' | 'cow'
  // type?: 'cempek' | 'male' | 'female'
  eartag_code: string
  origin_male: string
  origin_female: string
  animalTitle: (payload: string) => string
  genderTitle: (payload: string) => string
}

interface IAnimal {
  animal?: string

  _id?: string
  type?: string
  eartag_code?: string
  // cempek?: 'true' | 'false'
  cempek?: string
  arrival_date?: Date
  birth_date?: Date
  origin_female?: string
  origin_male?: string
  origin?: string
  weight?: number
  purchase_price?: number
  files?: any
  birth_weight?: number
  birth_condition?: string
  // gender?: 'true' | 'false'
  gender?: string
  description?: string
  created_by?: string
}

export type { IState, IAnimal }
