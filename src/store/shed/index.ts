import { create } from 'zustand'
import * as h from './handler'

export const useShedStore = create<IState>(() => ({
  shed_code: '',
  shed: {} as IShed,
  shedDetail: {} as IShedDetail,

  addShed: h.addShedHandler,
  addShedDetail: h.addShedDetailHandler,
  addShedAnimal: h.addShedAnimalHandler,
}))

interface IState {
  shed_code: string
  shed: IShed
  shedDetail: IShedDetail

  addShed: (payload: IShed & { uid: string }) => Promise<void>
  addShedDetail: (payload: IShedDetail & { uid: string }) => Promise<void>
  addShedAnimal: (payload: IShedAnimal & { uid: string }) => Promise<void>
}

interface IShed {
  shed_code: string
  animal_type: string
  animal_weight: string
  feed: string
  feed_weight: number
  age_range: string
  description: string
}

interface IShedDetail {
  updatedAt?: Date
  feed_date?: Date
  feed_type?: string
  feed_price?: number
  feed_stock?: number
  vitamin_date?: Date
  vitamin_type?: string
  vitamin_price?: number
  vaccine_date?: Date
  vaccine_type?: string
  vaccine_price?: number
  anthelmintic_date?: Date
  anthelmintic_type?: string
  anthelmintic_price?: number
}

interface IShedAnimal {
  eartag_code: string
  description: string
}

export type { IState, IShed, IShedDetail, IShedAnimal }
