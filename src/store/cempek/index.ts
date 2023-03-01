import { create } from 'zustand'
import * as h from './handlers'

export const useCempekStore = create<IState>((set) => ({
  animal_type: 'goat',
  cempek: {} as ICempek,
  cempekList: [],
  addCempek: h.addCempekHandler,
  editCempek: h.editCempekHandler,
  deleteCempek: h.deleteCempekHandler,
}))

interface IState {
  animal_type: 'goat' | 'sheep' | 'cow'
  cempek: ICempek
  cempekList: ICempek[]
  addCempek: (
    payload: ICempek & ICempekProps & { uid: string }
  ) => Promise<void>
  editCempek: (
    payload: ICempek & ICempekProps & { uid: string }
  ) => Promise<void>
  deleteCempek: (payload: string) => Promise<void>
}

interface ICempekProps {
  eartag_code?: string
  animal_type?: 'goat' | 'sheep' | 'cow'
}

interface ICempek {
  _id: string
  type: string
  birth_date: Date
  female_origin: string
  male_origin: string
  birth_weight: number
  birth_condition: string
  gender: string
  description: string
}

export type { IState, ICempek, ICempekProps }
