import { z } from "zod"

export const categorySchema = z.object({
  type: z.string(),
  stock: z.coerce.number().min(1),
  price: z.coerce.number().min(1),

  _id: z.string().optional(),
  category: z.string().optional(),
  name: z.string().optional(),
  used: z.coerce.number().optional(),
  stocks: z.coerce.number().optional(),
})

export type categoryType = Partial<z.infer<typeof categorySchema>>

export interface IFeedInfo {
  total_type: number
  total_usage: number
  total_stock: number
}

export interface IOtherInfo {
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
