import { StateCreator } from 'zustand';
export interface IExpandState {
  setExpanded(data?: Boolean): void;
  isExpanded?: Boolean;
}

const createExpandSlice: StateCreator<IExpandState> = (set, get) => ({
  isExpanded: true,
  setExpanded: (data: Boolean) => {
    set((state) => ({
      ...state,
      isExpanded: data,
    }))
  },
})

export default createExpandSlice
