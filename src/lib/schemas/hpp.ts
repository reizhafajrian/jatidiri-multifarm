import { z } from "zod"

export const hppSchema = z.object({
  eartag_code: z.string().nonempty(),
  hpp_price: z.any().optional(),
  sell_price: z.coerce.number().min(1),
  description: z.string().nullish(),
  buyer: z.string().nonempty(),
  phone: z.coerce.number().min(1),

  _id: z.string().optional(),
  animal: z.string().optional(),
  status: z.string().optional(),
})

export type hppType = Partial<z.infer<typeof hppSchema>>
