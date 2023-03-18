export interface IUser {
  id?: string
  first_name?: string
  last_name?: string
  gender?: string
  email: string
  password: string
  phone_number?: string
  job_title?: string
  role?: string

  name?: string
}

export interface IChangePass {
  old_pass: string
  new_pass: string
  confirm_pass: string
}

export interface IAuth {
  user: IUser | null
  token: string
  logout: (router: any) => void
  loadUser: () => void
  login: (data: IUser, router: any) => void
  register: (data: IUser, router: any) => void
  // addMember: (data: IUser, router: any) => void
  // editMember: (payload: IUser) => Promise<void>
  // deleteMember: (payload: string) => Promise<void>
  // editProfile: (payload: IUser) => Promise<void>
  // changePassword: (payload: IChangePass) => Promise<void>
}

export interface IAnimal {
  animal?: string

  _id?: string
  type?: string
  eartag_code?: string
  cempek?: string
  arrival_date?: Date
  birth_date?: Date
  origin_female?: string
  origin_male?: string
  origin?: string
  weight?: number
  purchase_price?: number
  files?: any
  birth_weight?: number
  birth_condition?: string
  gender?: string
  description?: string
  created_by?: string
}

interface IAnimalTitle {
  name: string
  title: string
}

interface IAnimalFilter {
  originMale?: string
  originFemale?: string
}

export interface IAnimalState {
  animal: IAnimalTitle
  animalList: IAnimalTitle[]
  originMale: string
  originFemale: string

  setAnimal: (value: string) => void
  setFilter: (data: IAnimalFilter) => void
  addAnimal: (data: IAnimal, router: any) => void
  editAnimal: (data: IAnimal, router: any) => void
  deleteAnimal: (id: string) => void
}

// SHED
export interface IShed {
  _id?: string
  shed_code?: string
  animal_type?: string
  animal_weight?: string
  feed?: string
  feed_weight?: number
  age_range?: string
  description?: string
  created_by?: string
}

export interface IShedDetail {
  _id?: string
  updated_at?: Date
  shed_code?: string
  created_by?: string

  data_feed_date?: Date
  data_feed_type?: string
  data_feed_price?: number
  data_feed_stock?: number
  data_vitamin_date?: Date
  data_vitamin_type?: string
  data_vitamin_price?: number
  data_vaccine_date?: Date
  data_vaccine_type?: string
  data_vaccine_price?: number
  data_anthelmintic_date?: Date
  data_anthelmintic_type?: string
  data_anthelmintic_price?: number
}

export interface IShedAnimal {
  id?: string
  created_by?: string
  eartag_code?: string
  description?: string
}

export interface IShedState {
  // shed_code: string
  // shed: IShed
  // shedDetail: IShedDetail

  addShed: (data: IShed, router: any) => void
  addShedData: (data: IShedDetail) => void
  addShedAnimal: (data: IShedAnimal) => void
}
