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

  addShed: (payload: IShed) => Promise<any>
  addShedDetail: (payload: IShedDetail) => Promise<any>
  addShedAnimal: (payload: IShedAnimal & { uid: string }) => Promise<void>
}

interface IShed {
  _id?: string
  shed_code?: string
  animal_type?: string
  animal_weight?: string
  feed?: string
  feed_weight?: number
  age_range?: string
  description?: string
  created_by?: string
}

interface IShedDetail {
  _id?: string
  updated_at?: Date
  shed_code?: string
  created_by?: string

  data_feed_date?: Date
  data_feed_type?: string
  data_feed_price?: number
  data_feed_stock?: number
  data_vitamin_date?: Date
  data_vitamin_type?: string
  data_vitamin_price?: number
  data_vaccine_date?: Date
  data_vaccine_type?: string
  data_vaccine_price?: number
  data_anthelmintic_date?: Date
  data_anthelmintic_type?: string
  data_anthelmintic_price?: number
}

interface IShedAnimal {
  eartag_code: string
  description: string
}

export type { IState, IShed, IShedDetail, IShedAnimal }
