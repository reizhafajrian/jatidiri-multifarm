import { create } from 'zustand'
import {
  addCategoryHandler,
  deleteCategoryHandler,
  editCategoryHandler,
} from './handlers'

export const useCategoryStore = create<IState>((set) => ({
  formValues: {} as ICategory,
  feed: {} as IFeed,
  feedInfo: {} as IFeedInfo,
  feedList: [],
  vitamin: {} as IVitamin,
  vitaminInfo: {} as IVitaminInfo,
  vitaminList: [],
  anthelmintic: {} as IAnthelmintic,
  anthelminticInfo: {} as IAnthelminticInfo,
  anthelminticList: [],
  addCategory: addCategoryHandler,
  editCategory: editCategoryHandler,
  deleteCategory: deleteCategoryHandler,
}))

interface IState {
  formValues: ICategory

  feed: IFeed
  feedInfo: IFeedInfo
  feedList: IFeed[]
  vitamin: IVitamin
  vitaminInfo: IVitaminInfo
  vitaminList: IVitamin[]
  anthelmintic: IAnthelmintic
  anthelminticInfo: IAnthelminticInfo
  anthelminticList: IAnthelmintic[]

  addCategory: (payload: ICategory) => Promise<any>
  editCategory: (payload: ICategory) => Promise<any>
  deleteCategory: (payload: ICategory) => Promise<any>
}

interface ICategory {
  _id?: string
  category?: string
  created_by?: string
  type?: string
  stock?: number
  price?: number
}

interface IFeed {
  feed_type: string
  feed_stock: number
  feed_price: number
}

interface IFeedInfo {
  total_type: number
  total_usage: number
  total_stock: number
}

interface IVitamin {
  vitamin_type: string
  vitamin_stock: number
  vitamin_price: number
}

interface IVitaminInfo {
  cow_value: string
  sheep_value: string
  goat_value: string
}

interface IAnthelmintic {
  anthelmintic_type: string
  anthelmintic_stock: number
  anthelmintic_price: number
}

interface IAnthelminticInfo {
  cow_value: string
  sheep_value: string
  goat_value: string
}

export type {
  IState,
  ICategory,
  IFeed,
  IFeedInfo,
  IVitamin,
  IVitaminInfo,
  IAnthelmintic,
  IAnthelminticInfo,
}
