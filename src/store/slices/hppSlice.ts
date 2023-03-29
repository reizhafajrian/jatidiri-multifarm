import { StateCreator } from 'zustand'
import { IHppState } from '../types'

const createHppSlice: StateCreator<IHppState> = (set, get) => ({
  hppStatus: 'all',
  editHpp: async (data) => {},
})

export default createHppSlice
