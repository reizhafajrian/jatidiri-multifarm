import { z } from "zod"

export const milkSchema = z.object({
  eartag_code: z.string(),
  milk: z.coerce.number().min(1),
  milk_date: z.coerce.date(),

  _id: z.string().optional(),
  history_milk: z.any().optional(),
  animal_id: z.any().optional(),
})

export type milkType = Partial<z.infer<typeof milkSchema>>

export const incomeSchema = z.object({
  income_created_at: z.coerce.date(),
  milk_total: z.coerce.number().min(1),
  milk_price: z.coerce.number().min(1),
  income_total: z.coerce.number().min(1),
  buyer: z.string(),
})

export type incomeType = Partial<z.infer<typeof incomeSchema>>
