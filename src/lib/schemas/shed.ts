import { z } from "zod"

const REQUIRED_ERROR = "Data required"
const INVALID_ERROR = "Data invalid"

const validations = {
  required_error: REQUIRED_ERROR,
  invalid_type_error: INVALID_ERROR,
}

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
})

export type shedType = z.infer<typeof shedSchema>

export const shedDetailSchema = (categories: any) => {
  let shape = {}

  if (categories.feed) {
    shape = {
      ...shape,
      data_feed_date: z.coerce.date(validations),
      data_feed_type: z.string(validations),
      data_feed_stock: z.coerce
        .number(validations)
        .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  if (categories.vitamin) {
    shape = {
      ...shape,
      data_vitamin_date: z.coerce.date(validations),
      data_vitamin_type: z.string(validations),
      data_vitamin_stock: z.coerce
        .number(validations)
        .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  if (categories.vaccine) {
    shape = {
      ...shape,
      data_vaccine_date: z.coerce.date(validations),
      data_vaccine_type: z.string(validations),
      data_vaccine_stock: z.coerce
        .number(validations)
        .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  if (categories.anthelmintic) {
    shape = {
      ...shape,
      data_anthelmintic_date: z.coerce.date(validations),
      data_anthelmintic_type: z.string(validations),
      data_anthelmintic_stock: z.coerce
        .number(validations)
        .min(1, { message: REQUIRED_ERROR }),
      // data_feed_price: z.coerce.number(validations).min(1, { message: REQUIRED_ERROR }),
    }
  }

  return z.object(shape)
}

export const shedAnimalSchema = z.object({
  eartag_code: z.string(validations),
  description: z.string(),
})
