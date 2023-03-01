import { create } from 'zustand'
import * as h from './handlers'

export const useAnimalStore = create<IState>((set, get) => ({
  gender: 'male',
  animal_type: 'goat',
  animal: {} as IAnimal,
  animalList: [],
  headerMenu: () => h.getHeaderMenu(get),
  addAnimal: h.addAnimalHandler,
  editAnimal: h.editAnimalHandler,
  deleteAnimal: h.deleteAnimalHandler,
}))

interface IAnimalProps {
  eartag_code?: string
  animal_type?: 'goat' | 'sheep' | 'cow'
  gender?: 'male' | 'female'
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

interface IState {
  gender: 'male' | 'female'
  animal_type: 'goat' | 'sheep' | 'cow'
  animal: IAnimal
  animalList: IAnimal[]
  headerMenu: () => Array<any>
  addAnimal: (payload: IAnimal & IAnimalProps & { uid: string }) => Promise<any>
  editAnimal: (
    payload: IAnimal & IAnimalProps & { uid: string }
  ) => Promise<void>
  deleteAnimal: (payload: string) => Promise<void>
}

export type { IState, IAnimal, IAnimalProps }
