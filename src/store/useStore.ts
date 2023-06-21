import { create } from "zustand"

import { thisYearValue } from "@/hooks/useFilterDate"

import createAnimalSlice, { IAnimalState } from "./slices/animalSlice"
import createAuthSlice, { IAuthState } from "./slices/authSlice"
import createCategorySlice, { ICategoryState } from "./slices/categorySlice"
import createExpandSlice, { IExpandState } from "./slices/expandSlice"
import createHppSlice, { IHppState } from "./slices/hppSlice"
import createMilkSlice, { IMilkState } from "./slices/milkSlice"
import createSearchSlice, { ISearchState } from "./slices/searchSlice"
import createShedSlice, { IShedState } from "./slices/shedSlice"

const useStore = create<
  IAuthState &
    IAnimalState &
    IShedState &
    ICategoryState &
    IMilkState &
    IHppState &
    IExpandState &
    ISearchState & { filterByDate: string }
>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAnimalSlice(...a),
  ...createShedSlice(...a),
  ...createExpandSlice(...a),
  ...createCategorySlice(...a),
  ...createMilkSlice(...a),
  ...createHppSlice(...a),
  ...createSearchSlice(...a),
  filterByDate: thisYearValue,
}))

export default useStore
