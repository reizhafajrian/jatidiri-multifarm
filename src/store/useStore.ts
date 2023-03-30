import { format } from 'date-fns'
import { create } from 'zustand'
import createAnimalSlice from './slices/animalSlice'
import createAuthSlice from './slices/authSlice'
import createCategorySlice from './slices/categorySlice'
import createHppSlice from './slices/hppSlice'
import createMilkSlice from './slices/milkSlice'
import createSearchSlice, { ISearchState } from './slices/searchSlice'
import createShedSlice from './slices/shedSlice'
import {
  IAnimalState,
  IAuth,
  ICategoryState,
  IHppState,
  IMilkState,
  IShedState,
} from './types'

interface IState
  extends IAuth,
    IAnimalState,
    IShedState,
    ICategoryState,
    IMilkState,
    IHppState,
    ISearchState {
  dashboardFilterParams: string
  filterByDateAnimals: string
}

const shape = 'yyyy-MM-dd'
const today = new Date()
const now = format(today, shape)

const useStore = create<IState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAnimalSlice(...a),
  ...createShedSlice(...a),
  ...createCategorySlice(...a),
  ...createMilkSlice(...a),
  ...createHppSlice(...a),
  ...createSearchSlice(...a),
  dashboardFilterParams: `start=${now}&end=${now}`,
  filterByDateAnimals: `start=${now}&end=${now}`,
}))

export default useStore
