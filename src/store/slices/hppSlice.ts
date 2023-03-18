import { StateCreator } from 'zustand'
import { IHppState } from '../types'

const createHppSlice: StateCreator<IHppState> = (set, get) => ({
  editHpp: async (data) => {},
})

export default createHppSlice
