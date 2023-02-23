import * as Yup from 'yup'
const isEmptyMsg = 'Harap masukkan data'

export const signinSchema = Yup.object().shape({
  email: Yup.string().email().required(isEmptyMsg),
  password: Yup.string().required(isEmptyMsg),
})

export const memberSchema = Yup.object().shape({
  name: Yup.string().required(isEmptyMsg),
  whatsapp_number: Yup.string().required(isEmptyMsg),
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
  purchase_price: Yup.number().required(isEmptyMsg),
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

export const shedDataSchema = Yup.object().shape({
  feed_date: Yup.date(),
  feed_type: Yup.string(),
  feed_price: Yup.number(),
  feed_stock: Yup.number(),
  vitamin_date: Yup.date(),
  vitamin_type: Yup.string(),
  vitamin_price: Yup.number(),
  vaccine_date: Yup.date(),
  vaccine_type: Yup.string(),
  vaccine_price: Yup.number(),
  anthelmintic_date: Yup.date(),
  anthelmintic_type: Yup.string(),
  anthelmintic_price: Yup.number(),
})

export const shedAnimalSchema = Yup.object().shape({
  eartag_code: Yup.string().required(isEmptyMsg),
  description: Yup.string(),
})

export const categorySchema = Yup.object().shape({
  type: Yup.string().required(isEmptyMsg),
  stock: Yup.number().required(isEmptyMsg),
  price: Yup.number().required(isEmptyMsg),
})

export const milkSchema = Yup.object().shape({
  eartag_code: Yup.string().required(isEmptyMsg),
  milk: Yup.number().required(isEmptyMsg),
  milk_date: Yup.date().required(isEmptyMsg),
})

export const hppSchema = Yup.object().shape({
  eartag_code: Yup.string().required(isEmptyMsg),
  hpp: Yup.number().required(isEmptyMsg),
  selling_price: Yup.number().required(isEmptyMsg),
  description: Yup.string(),
})
