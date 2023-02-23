import { create } from 'zustand'

interface State {
  isEmptyMsg: string
  isLoading: boolean
  isError: any
  reset: () => void
}

export const useStore = create<State>()((set) => ({
  isEmptyMsg: 'Harap masukkan data',
  isLoading: false,
  isError: {},
  reset: () =>
    set({
      isLoading: false,
      isError: {},
    }),
}))
