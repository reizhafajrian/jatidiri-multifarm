import { z } from "zod"

export const milkSchema = z.object({
  eartag_code: z.string(),
  milk: z.coerce.number().min(1),
  milk_date: z.coerce.date(),
})

export type milkType = Partial<z.infer<typeof milkSchema>>

export const incomeSchema = z.object({
  income_total: z.coerce.number().min(1),
  income_date: z.coerce.date(),
})

export type incomeType = Partial<z.infer<typeof incomeSchema>>
