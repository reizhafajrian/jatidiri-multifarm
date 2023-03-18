import { create } from 'zustand'
import createAnimalSlice from './slices/animalSlice'
import createAuthSlice from './slices/authSlice'
import createCategorySlice from './slices/categorySlice'
import createHppSlice from './slices/hppSlice'
import createMilkSlice from './slices/milkSlice'
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
    IHppState {}

const useStore = create<IState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAnimalSlice(...a),
  ...createShedSlice(...a),
  ...createCategorySlice(...a),
  ...createMilkSlice(...a),
  ...createHppSlice(...a),
}))

export default useStore
