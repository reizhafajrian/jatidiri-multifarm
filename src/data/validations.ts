import * as Yup from 'yup'
const isEmptyMsg = 'Harap masukkan data'

export const signinSchema = Yup.object().shape({
  email: Yup.string().email().required(isEmptyMsg),
  password: Yup.string().required(isEmptyMsg),
})

export const changePassSchema = Yup.object().shape({
  old_pass: Yup.string().required(isEmptyMsg),
  new_pass: Yup.string().required(isEmptyMsg),
  confirm_pass: Yup.string().required(isEmptyMsg),
})

export const editProfileSchema = Yup.object().shape({
  avatar: Yup.array().required(isEmptyMsg),
  first_name: Yup.string().required(isEmptyMsg),
  last_name: Yup.string().required(isEmptyMsg),
  email: Yup.string().email().required(isEmptyMsg),
  gender: Yup.string().required(isEmptyMsg),
  phone_number: Yup.string().required(isEmptyMsg),
  job_title: Yup.string().required(isEmptyMsg),
})

export const memberSchema = Yup.object().shape({
  name: Yup.string().required(isEmptyMsg),
  phone_number: Yup.string().required(isEmptyMsg),
  role: Yup.string().required(isEmptyMsg),
  email: Yup.string().email().required(isEmptyMsg),
  password: Yup.string().required(isEmptyMsg),
})

export const animalSchema = Yup.object().shape({
  type: Yup.string().required(isEmptyMsg),
  arrival_date: Yup.date().required(isEmptyMsg),
  birth_date: Yup.date().required(isEmptyMsg),
  origin_female: Yup.string().required(isEmptyMsg),
  origin_male: Yup.string().required(isEmptyMsg),
  origin: Yup.string().required(isEmptyMsg),
  weight: Yup.number().required(isEmptyMsg),
  purchase_price: Yup.string()
    .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
    .required(isEmptyMsg),
  files: Yup.array().required(isEmptyMsg),
  description: Yup.string(),
})

export const cempekSchema = Yup.object().shape({
  type: Yup.string().required(isEmptyMsg),
  birth_date: Yup.date().required(isEmptyMsg),
  female_origin: Yup.string().required(isEmptyMsg),
  male_origin: Yup.string().required(isEmptyMsg),
  birth_weight: Yup.number().required(isEmptyMsg),
  birth_condition: Yup.string().required(isEmptyMsg),
  gender: Yup.string().required(isEmptyMsg),
  description: Yup.string(),
})

export const shedSchema = Yup.object().shape({
  shed_code: Yup.string().required(isEmptyMsg),
  animal_type: Yup.string().required(isEmptyMsg),
  animal_weight: Yup.number().required(isEmptyMsg),
  feed: Yup.string().required(isEmptyMsg),
  feed_weight: Yup.number().required(isEmptyMsg),
  age_range: Yup.string().required(isEmptyMsg),
  description: Yup.string(),
})

export const shedDataSchema = (categories: any) => {
  let shape = {}

  if (categories.feed) {
    shape = {
      ...shape,
      feed_date: Yup.date().required(isEmptyMsg),
      feed_type: Yup.string().required(isEmptyMsg),
      feed_price: Yup.string()
        .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
        .required(isEmptyMsg),
      feed_stock: Yup.number().required(isEmptyMsg),
    }
  }

  if (categories.vitamin) {
    shape = {
      ...shape,
      vitamin_date: Yup.date().required(isEmptyMsg),
      vitamin_type: Yup.string().required(isEmptyMsg),
      vitamin_price: Yup.string()
        .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
        .required(isEmptyMsg),
    }
  }

  if (categories.vaccine) {
    shape = {
      ...shape,
      vaccine_date: Yup.date().required(isEmptyMsg),
      vaccine_type: Yup.string().required(isEmptyMsg),
      vaccine_price: Yup.string()
        .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
        .required(isEmptyMsg),
    }
  }

  if (categories.anthelmintic) {
    shape = {
      ...shape,
      anthelmintic_date: Yup.date().required(isEmptyMsg),
      anthelmintic_type: Yup.string().required(isEmptyMsg),
      anthelmintic_price: Yup.string()
        .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
        .required(isEmptyMsg),
    }
  }

  return Yup.object().shape(shape)
}
export const shedAnimalSchema = Yup.object().shape({
  eartag_code: Yup.string().required(isEmptyMsg),
  description: Yup.string(),
})

export const categorySchema = Yup.object().shape({
  type: Yup.string().required(isEmptyMsg),
  stock: Yup.number().required(isEmptyMsg),
  price: Yup.string()
    .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
    .required(isEmptyMsg),
})

export const milkSchema = Yup.object().shape({
  eartag_code: Yup.string().required(isEmptyMsg),
  milk: Yup.number().required(isEmptyMsg),
  milk_date: Yup.date().required(isEmptyMsg),
})

export const hppSchema = Yup.object().shape({
  eartag_code: Yup.string().required(isEmptyMsg),
  hpp: Yup.number().required(isEmptyMsg),
  selling_price: Yup.string()
    .matches(/(\d)(?=(\d\d\d)+(?!\d))/g, 'invalid input')
    .required(isEmptyMsg),
  description: Yup.string(),
})
