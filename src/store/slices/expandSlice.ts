import { StateCreator } from 'zustand';
export interface IExpandState {
  setExpanded(data?: boolean): void;
  isExpanded?: boolean;
}

const createExpandSlice: StateCreator<IExpandState> = (set, get) => ({
  isExpanded: true,
  setExpanded: (data: boolean) => {
    set((state) => ({
      ...state,
      isExpanded: data,
    }))
  },
})

export default createExpandSlice
