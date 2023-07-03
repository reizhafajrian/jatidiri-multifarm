import { z } from "zod"

export const adultSchema = z.object({
  type: z.string(),
  cempek: z.string(),
  arrival_date: z.coerce.date(),
  birth_date: z.coerce.date(),
  origin: z.string(),
  origin_female: z.string(),
  origin_male: z.string(),
  weight: z.coerce.number().min(1),
  purchase_price: z.coerce.number().min(1),
  supplier: z.string(),

  _id: z.string().optional(),
  pejantan: z.boolean().optional(),
  files: z.any().optional(),
  description: z.string().optional(),
  eartag_code: z.string().optional(),
})

export type adultType = z.infer<typeof adultSchema>

export const cempekSchema = z.object({
  type: z.string(),
  cempek: z.string(),
  gender: z.string(),
  birth_date: z.coerce.date(),
  indukan_id: z.string(),
  pejantan_id: z.string(),
  weight: z.coerce.number().min(1),
  birth_condition: z.string(),

  _id: z.string().optional(),
  files: z.any().optional(),
  description: z.string().optional(),
  eartag_code: z.string().optional(),
})

export type cempekType = z.infer<typeof cempekSchema>

export type animalType = Partial<
  adultType &
    cempekType & {
      status: string
      animal: string
      sell_price: number
    }
>

export interface ICertificate {
  organization: string
  prefix: string
  tag: string
  issueDate: string
  exportTag: string
  registrationNum: string
  lambPlanId: string
  colour: string
  conception: string
  gender: string
  grade: string
  birthDate: string
  breeder: string
  owner: string
  notes: string
}
