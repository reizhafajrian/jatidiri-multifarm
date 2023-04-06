import { StateCreator } from 'zustand'
import { IHppState } from '../types'

const createHppSlice: StateCreator<IHppState> = (set, get) => ({
  status: '',
  editHpp: async (data) => { },
  setHppFilter: (status) => {
    set((state) => ({ ...state, status }))
  }
})

export default createHppSlice
