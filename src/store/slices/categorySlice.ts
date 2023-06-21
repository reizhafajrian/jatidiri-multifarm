import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/Toast"

export interface ICategory {
  _id?: string
  category?: string
  created_by?: string
  type?: string
  stock?: number
  price?: number
}

interface IFeedInfo {
  total_type: number
  total_usage: number
  total_stock: number
}

interface IOtherInfo {
  cow_value: string
  sheep_value: string
  goat_value: string
}

export interface ICategoryInfo {
  feedInfo?: IFeedInfo
  vitaminInfo?: IOtherInfo
  vaccineInfo?: IOtherInfo
  anthelminticInfo?: IOtherInfo
}

export interface ICategoryState {
  feedInfo?: IFeedInfo
  vitaminInfo?: IOtherInfo
  vaccineInfo?: IOtherInfo
  anthelminticInfo?: IOtherInfo

  setCategoryInfo: (data: ICategoryInfo) => void
  addCategory: (data: ICategory) => void
  editCategory: (data: ICategory) => void
  deleteCategory: (data: ICategory) => void
}

const createCategorySlice: StateCreator<ICategoryState> = (set) => ({
  setCategoryInfo: (data) => {
    set((state) => ({
      ...state,
      feedInfo: data.feedInfo,
      vitaminInfo: data.vitaminInfo,
      vaccineInfo: data.vaccineInfo,
      anthelminticInfo: data.anthelminticInfo,
    }))
  },
  addCategory: async (data) => {
    try {
      const { category, created_by, type, stock, price } = data
      const res = await Api.post({
        url: `/api/${category}/create`,
        data: {
          [`${category}_type`]: type,
          [`${category}_stock`]: stock,
          [`${category}_price_${category === "feed" ? "kgs" : "pcs"}`]: price,
          created_by,
        },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  editCategory: async (data) => {
    try {
      const { _id, category, type, stock, price } = data

      const res = await Api.post({
        url: `/api/${category}/update`,
        data: {
          data: [
            {
              _id,
              [`${category}_type`]: type,
              [`${category}_stock`]: stock,
              [`${category}_price_${category === "feed" ? "kgs" : "pcs"}`]:
                price,
            },
          ],
        },
      })

      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
  deleteCategory: async (data) => {
    try {
      const res = await Api.delete(`/api/${data.category}/delete/${data._id}`)
      toast({ type: "success", message: res.message })
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
})

export default createCategorySlice
