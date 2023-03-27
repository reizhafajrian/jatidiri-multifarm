import { create } from 'zustand'
import {
  addCategoryHandler,
  deleteCategoryHandler,
  editCategoryHandler
} from './handlers'

export const useCategoryStore = create<IState>((set) => ({
  formValues: {} as ICategory,

  feed: {} as IFeed,
  feedInfo: {} as IFeedInfo,
  feedList: [],
  vitamin: {} as IVitamin,
  vitaminInfo: [],
  vitaminList: [],
  vaccine: {} as IVaccine,
  vaccineInfo: [],
  vaccineList: [],
  anthelmintic: {} as IAnthelmintic,
  anthelminticInfo: [],
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
  vitaminInfo: []
  vitaminList: IVitamin[]
  vaccine: IVaccine
  vaccineInfo: []
  vaccineList: IVaccine[]
  anthelmintic: IAnthelmintic
  anthelminticInfo: []
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
  feed_type: number
  used: number
  total_stocks: number
}

interface IVitamin {
  vitamin_type: string
  vitamin_stock: number
  vitamin_price: number
}

interface IVitaminInfo {
  result: []
}

interface IVaccine {
  result: []
}

interface IVaccineInfo {
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
  IVaccine,
  IVaccineInfo,
  IVitaminInfo,
  IAnthelmintic,
  IAnthelminticInfo,
}
