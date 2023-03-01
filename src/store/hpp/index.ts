import { create } from 'zustand'
import { editHppHandler } from './handlers'

export const useHppStore = create<IState>((set) => ({
  hpp: {} as IHpp,
  hppList: [],
  editHpp: editHppHandler,
}))

interface IState {
  hpp: IHpp
  hppList: IHpp[]
  editHpp: (payload: IEditHpp & { uid: string }) => Promise<void>
}

interface IHpp {
  eartag_code: string
  type: string
  origin: string
  weight: number
  age: number
  purchase_price: number
  feed_price: number
  other_price: number
  hpp: number
  selling_price: number
  status: { name: string; value: string }
}

interface IEditHpp {
  eartag_code: string
  hpp: number
  selling_price: number
  description: string
}

export type { IHpp, IEditHpp }
