import { create } from 'zustand'
import { addMilkHandler, editMilkHandler } from './handler'

export const useMilkStore = create<IState>((set) => ({
  milk: {} as IMilk,
  milkInfo: {} as IMilkInfo,
  milkList: [],
  addMilk: addMilkHandler,
  editMilk: editMilkHandler,
}))

interface IState {
  milk: IMilk
  milkInfo: IMilkInfo
  milkList: IMilk[]
  addMilk: (payload: IMilk) => Promise<any>
  editMilk: (payload: IMilk) => Promise<any>
}

interface IMilk {
  _id?: string
  eartag_code?: string
  milk?: number
  milk_date?: Date
  history_milk_date?: Date
  history_milk?: number
  created_by?: string
}

interface IMilkInfo {
  income_total: number
  income_date: Date
  income_percentage: number
  milk_total: number
  milk_date: Date
  milk_percentage: number
}

export type { IMilk, IMilkInfo }
