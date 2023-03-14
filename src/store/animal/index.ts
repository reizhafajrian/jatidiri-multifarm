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
  addAnimal: (payload: IPayload) => Promise<any>
  editAnimal: (payload: IPayload) => Promise<any>
  deleteAnimal: (payload: IPayload) => Promise<any>
  animalTColumns: any
  cempekTColumns: any

  animal?: 'goat' | 'sheep' | 'cow'
  type?: 'cempek' | 'male' | 'female'
  eartag_code: string
  origin_male: string
  origin_female: string
  animalTitle: (payload: string) => string
  genderTitle: (payload: string) => string
}

interface IPayload extends IAnimal, IAnimalProps {
  uid?: string
}

interface IAnimalProps {
  animal?: 'goat' | 'sheep' | 'cow'
  type?: 'cempek' | 'male' | 'female'
}

interface IAnimal {
  _id?: string
  eartag_code?: string
  cempek?: 'true' | 'false'
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
  gender?: 'true' | 'false'
  description?: string
}

export type { IState, IAnimalProps, IAnimal, IPayload }
