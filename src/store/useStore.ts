import { thisMonthValue } from '@/hooks/useFilterDate'
import { create } from 'zustand'
import createAnimalSlice from './slices/animalSlice'
import createAuthSlice from './slices/authSlice'
import createCategorySlice from './slices/categorySlice'
import createExpandSlice, { IExpandState } from './slices/expandSlice'
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
  IShedState
} from './types'

interface IState
  extends IAuth,
    IAnimalState,
    IShedState,
    ICategoryState,
    IMilkState,
    IHppState,
    IExpandState,
    ISearchState {
  filterByDate: string
}

const useStore = create<IState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAnimalSlice(...a),
  ...createShedSlice(...a),
  ...createExpandSlice(...a),
  ...createCategorySlice(...a),
  ...createMilkSlice(...a),
  ...createHppSlice(...a),
  ...createSearchSlice(...a),
  filterByDate: thisMonthValue,
}))

export default useStore
