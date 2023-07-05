import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import {
  categoryType,
  ICategoryInfo,
  IFeedInfo,
  IOtherInfo,
} from "@/lib/schemas/category"

export interface ICategoryState {
  feedInfo?: IFeedInfo
  vitaminInfo?: IOtherInfo
  vaccineInfo?: IOtherInfo
  anthelminticInfo?: IOtherInfo

  setCategoryInfo: (data: ICategoryInfo) => void
  addCategory: (data: categoryType) => any
  editCategory: (data: categoryType) => any
  deleteCategory: (category: string, _id: string) => any
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
      const { category, type, stock, price } = data
      return await Api.post({
        url: `/api/${category}/create`,
        data: {
          [`${category}_type`]: type,
          [`${category}_stock`]: stock,
          [`${category}_price_${category === "feed" ? "kgs" : "pcs"}`]: price,
        },
      })
    } catch (err: any) {
      throw err
    }
  },
  editCategory: async (data) => {
    try {
      const { _id, category, type, stock, price } = data
      return await Api.put({
        url: `/api/${category}/update`,
        data: {
          _id,
          [`${category}_type`]: type,
          [`${category}_stock`]: stock,
          [`${category}_price_${category === "feed" ? "kgs" : "pcs"}`]: price,
        },
        isFormData: true,
      })
    } catch (err: any) {
      throw err
    }
  },
  deleteCategory: async (category, _id) => {
    try {
      return await Api.delete(`/api/${category}/delete/${_id}`)
    } catch (err: any) {
      throw err
    }
  },
})

export default createCategorySlice
