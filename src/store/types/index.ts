export interface IUser {
  avatar?: any
  id?: string
  _id?: string
  firstName?: string
  lastName?: string
  gender?: string
  email: string
  password: string
  phone?: string
  jobTitle?: string
  role?: string

  name?: string
}

export interface IChangePass {
  passwordOld: string
  password: string
  passwordConfirmation: string
}

export interface IAuth {
  token: string
  user: IUser | null
  logout: (router: any) => void
  loadUser: () => void
  login: (data: IUser, router: any) => void
  register: (data: IUser, router: any) => void
  updateUser: (data: IUser, router: any) => void
  updateProfile: (data: IUser, router: any) => void
  changePass: (data: { password: string; passwordConfirmation: string }) => void
  changeRole: (data: { _id: string; role: string }, router: any) => void
  deleteUser: (id: string, router: any) => void
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
  sell_price?: number
  purchase_price?: number
  status?: string
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
  type: string
  originMale: string
  originFemale: string

  setAnimal: (value: string) => void
  setFilter: (data: IAnimalFilter) => void
  addAnimal: (data: IAnimal, router: any) => void
  editAnimal: (data: IAnimal, router?: any) => void
  deleteAnimal: (id: string) => void
}

// SHED
export interface IShed {
  _id?: string
  shed_code?: string
  animal_type?: string
  animal_weight?: string
  average_weight?: number
  average_age?: number
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
  shed_id: string
  shed_code: string
  // shed: IShed
  // shedDetail: IShedDetail

  addShed: (data: IShed, router: any) => void
  addShedData: (data: IShedDetail) => void
  addShedAnimal: (data: IShedAnimal) => void
  changeShedAnimal: (shed_code: string, eartag_code?: string) => void
}

// CATEGORY
export interface ICategory {
  _id?: string
  category?: string
  created_by?: string
  type?: string
  stock?: number
  price?: number
}

interface IFeedInfo {
  total_type: number
  total_usage: number
  total_stock: number
}

interface IOtherInfo {
  cow_value: string
  sheep_value: string
  goat_value: string
}

export interface ICategoryInfo {
  feedInfo?: IFeedInfo
  vitaminInfo?: IOtherInfo
  vaccineInfo?: IOtherInfo
  anthelminticInfo?: IOtherInfo
}

export interface ICategoryState {
  feedInfo?: IFeedInfo
  vitaminInfo?: IOtherInfo
  vaccineInfo?: IOtherInfo
  anthelminticInfo?: IOtherInfo

  setCategoryInfo: (data: ICategoryInfo) => void
  addCategory: (data: ICategory) => void
  editCategory: (data: ICategory) => void
  deleteCategory: (data: ICategory) => void
}

// MILK
export interface IMilk {
  _id?: string
  eartag_code?: string
  milk?: number
  milk_date?: Date
  // history_milk_date?: Date
  history_milk?: number
  animal_id?: string
  created_by?: string
}

export interface IMilkInfo {
  income_total?: number
  income_date?: Date
  history_income_total?: string
  history_income_date?: Date
  income_percentage?: number

  milk_total?: number
  milk_date?: Date
  milk_percentage?: number
  created_by?: string
}

export interface IMilkState {
  // milk: IMilk
  // milkInfo: IMilkInfo
  // milkList: IMilk[]
  milkStatus: string
  // milkHistory: number
  incomeHistory: number
  addMilk: (data: IMilk) => void
  editMilk: (data: IMilk) => void
  setMilkHistory: (start: Date, end: Date) => Promise<number | undefined>
  changeMilkStatus: (id: string, status: string) => void
  addIncome: (data: IMilkInfo) => void
  setIncomeHistory: (start: Date, end: Date) => void
}

// export interface IHpp {
//   type?: string
//   origin?: string
//   weight?: number
//   age?: number
//   purchase_price?: number
//   feed_price?: number
//   other_price?: number
//   hpp?: number
//   selling_price?: number
//   status?: { name: string; value: string }
// }

// HPP
export interface IHppState {
  // hpp: IHpp
  // hppList: IHpp[]
  hppStatus: string
  editHpp: (data: IEditHpp, animal: string) => void
}

export interface IEditHpp {
  _id?: string
  eartag_code?: string
  hpp_price?: number
  sell_price?: number
  description?: string
}
