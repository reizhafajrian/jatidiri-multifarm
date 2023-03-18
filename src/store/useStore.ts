import { create } from 'zustand'
import createAnimalSlice from './slices/animalSlice'
import createAuthSlice from './slices/authSlice'
import createShedSlice from './slices/shedSlice'
import { IAnimalState, IAuth, IShedState } from './types'

const useStore = create<IAuth & IAnimalState & IShedState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAnimalSlice(...a),
  ...createShedSlice(...a),
}))

export default useStore
