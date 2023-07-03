import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export type SignInType = z.infer<typeof signInSchema>

export const memberSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email().nonempty(),
  phone: z.string().nonempty(),
  role: z.string().nonempty(),
  password: z.string().optional(),
})

export type memberType = z.infer<typeof memberSchema>

export const profileSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  gender: z.string().nonempty(),
  email: z.string().email().nonempty(),
  phone: z.string().nonempty(),
  role: z.string().nonempty(),
  jobTitle: z.string().nullish(),
  avatar: z.any().optional(),
})

export type profileType = z.infer<typeof profileSchema>

export const changePassSchema = z.object({
  passwordOld: z.string().nonempty(),
  password: z.string().nonempty(),
  passwordConfirmation: z.string().nonempty(),
})

export type changePassType = z.infer<typeof changePassSchema>

export type userType = profileType & {
  _id?: string
  password?: string
}
