import { toast } from '@/components/shared'
import { Get } from '@/lib/api'
import { StateCreator } from 'zustand'

export interface ISearchState {
  searchType: string
  searchKeyword: string
  searchLoading: boolean
  searchResults: any[]
  searchHandler: (keyword: string) => void
}

const createSearchSlice: StateCreator<ISearchState> = (set, get) => ({
  searchType: '',
  searchKeyword: '',
  searchLoading: false,
  searchResults: [],
  searchHandler: async (keyword) => {
    try {
      set({ searchLoading: true })
      const res = await Get(
        `/api/search?type=${get().searchType}&search=${keyword}`
      )

      set({
        searchLoading: false,
        searchResults: res.data,
        searchKeyword: keyword,
      })
    } catch (err: any) {
      toast({
        type: 'error',
        message: err.data.error,
      })
    }
  },
})

export default createSearchSlice
