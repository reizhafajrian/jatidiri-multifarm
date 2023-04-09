import { z } from 'zod'

const REQUIRED_ERROR = 'Data required'
const INVALID_ERROR = 'Data invalid'

const validations = {
  required_error: REQUIRED_ERROR,
  invalid_type_error: INVALID_ERROR,
}

// AUTH
export const signinSchema = z.object({
  email: z.string(validations).email(),
  password: z.string(validations).min(1, REQUIRED_ERROR),
})

export const memberSchema = z.object({
  firstName: z.string(validations).nonempty(REQUIRED_ERROR),
  lastName: z.string(validations).nonempty(REQUIRED_ERROR),
  email: z.string(validations).email().nonempty(REQUIRED_ERROR),
  phone: z.string(validations).nonempty(REQUIRED_ERROR),
  role: z.string(validations).nonempty(REQUIRED_ERROR),
  password: z.string(validations).nonempty(REQUIRED_ERROR),
})

export const editMemberSchema = z.object({
  firstName: z.string(validations).nonempty(REQUIRED_ERROR),
  lastName: z.string(validations).nonempty(REQUIRED_ERROR),
  email: z.string(validations).email().nonempty(REQUIRED_ERROR),
  phone: z.string(validations).nonempty(REQUIRED_ERROR),
  role: z.string(validations).nonempty(REQUIRED_ERROR),
  jobTitle: z.string(validations).nullish(),
  avatar: z.array(z.any(), validations).nullish(),
  // password: z.string(validations),
})

export const changePassSchema = z.object({
  passwordOld: z.string(validations).nonempty(REQUIRED_ERROR),
  password: z.string(validations).nonempty(REQUIRED_ERROR),
  passwordConfirmation: z.string(validations).nonempty(REQUIRED_ERROR),
})

// ANIMALS
const animalSchema = {
  type: z.string(validations),
  birth_date: z.coerce.date(validations),
  origin_female: z.string(validations),
  origin_male: z.string(validations),
  description: z.string().optional(),
  // created_by: z.string(validations),
}

export const adultSchema = z.object({
  ...animalSchema,
  arrival_date: z.coerce.date(validations),
  origin: z.string(validations),
  weight: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
  purchase_price: z.coerce
    .number(validations)
    .min(1, { message: REQUIRED_ERROR }),
  files: z.any().optional(),
})

export const cempekSchema = z.object({
  ...animalSchema,
  birth_weight: z.coerce
    .number(validations)
    .min(1, { message: REQUIRED_ERROR }),
  birth_condition: z.string(validations),
  gender: z.string(validations),
})

// SHED
export const shedSchema = z.object({
  // shed_code: z.string(validations),
  animal_type: z.string(validations),
  // animal_weight: z.coerce
  //   .number(validations)
  //   .min(1, { message: REQUIRED_ERROR }),
  default_feed: z.string(validations),
  // feed_weight: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
  // age_range: z.string(validations),
  description: z.string().optional(),
  // created_by: z.string(validations),
})

export const shedDetailSchema = (categories: any) => {
  let shape = {}

  if (categories.feed) {
    shape = {
      ...shape,
      data_feed_date: z.coerce.date(validations),
      data_feed_type: z.string(validations),
      // data_feed_stock: z.coerce
      //   .number(validations)
      //   .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  if (categories.vitamin) {
    shape = {
      ...shape,
      data_vitamin_date: z.coerce.date(validations),
      data_vitamin_type: z.string(validations),
      // data_vitamin_stock: z.coerce
      //   .number(validations)
      //   .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  if (categories.vaccine) {
    shape = {
      ...shape,
      data_vaccine_date: z.coerce.date(validations),
      data_vaccine_type: z.string(validations),
      // data_vaccine_stock: z.coerce
      //   .number(validations)
      //   .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  if (categories.anthelmintic) {
    shape = {
      ...shape,
      data_anthelmintic_date: z.coerce.date(validations),
      data_anthelmintic_type: z.string(validations),
      // data_anthelmintic_stock: z.coerce
      //   .number(validations)
      //   .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  return z.object(shape)
}

export const shedAnimalSchema = z.object({
  eartag_code: z.string(validations),
  description: z.string(),
})

// CATEGORY
export const categorySchema = z.object({
  type: z.string(validations),
  stock: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
  price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
})

// MILK
export const milkSchema = z.object({
  eartag_code: z.string(validations),
  milk: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
  milk_date: z.coerce.date(validations),
})

export const incomeSchema = z.object({
  income_total: z.coerce
    .number(validations)
    .min(1, { message: REQUIRED_ERROR }),
  income_date: z.coerce.date(validations),
})

// HPP
export const hppSchema = z.object({
  eartag_code: z.string(validations).nonempty(REQUIRED_ERROR),
  hpp_price: z.coerce.number(validations).min(0, { message: REQUIRED_ERROR }),
  sell_price: z.coerce
    .number(validations)
    .min(1, { message: REQUIRED_ERROR }),
  description: z.string().nullish(),
})
