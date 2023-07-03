import { z } from "zod"

export const categorySchema = z.object({
  type: z.string(),
  stock: z.coerce.number().min(1),
  price: z.coerce.number().min(1),

  _id: z.string().optional(),
  category: z.string().optional(),
})

export type categoryType = Partial<z.infer<typeof categorySchema>>
