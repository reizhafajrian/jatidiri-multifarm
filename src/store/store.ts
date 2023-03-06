import { create } from 'zustand'

interface State {
  isEmptyMsg: string
  isLoading: boolean
  isError: any
}

export const useStore = create<State>()((set) => ({
  isEmptyMsg: 'Harap masukkan data',
  isLoading: false,
  isError: {},
}))
