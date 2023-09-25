import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/toast"

export interface ISearchState {
  searchType: string
  searchKeyword: string
  searchLoading: boolean
  searchResults: any[]
  searchHandler: (keyword: string) => void
}

const initialstate = {
  searchType: "",
  searchKeyword: "",
  searchLoading: false,
  searchResults: [],
}

const createSearchSlice: StateCreator<ISearchState> = (set, get) => ({
  ...initialstate,
  searchHandler: async (keyword) => {
    try {
      set({ searchLoading: true })
      const res = await Api.get(
        `/api/search?type=${get().searchType}&search=${keyword}`
      )

      set({
        searchLoading: false,
        searchResults: res.data,
        searchKeyword: keyword,
      })
    } catch (err: any) {
      toast({ type: "error", message: err?.data?.error||"something went wrong" })
    }
  },
})

export default createSearchSlice
