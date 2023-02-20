export interface IUser {
  email: string
  password: string
  name?: string
  whatsapp_number?: string
  role?: string
}

export interface ILayoutProps {
  children: React.ReactNode
  params?: any
}

export interface IPageProps {
  params?: any
}

export interface IAnimalProps {
  animal_type?: 'goat' | 'sheep' | 'cow'
  gender?: 'male' | 'female'
}

export interface IAnimalFields {
  type: string
  arrival_date: Date
  birth_date: Date
  female_origin: string
  male_origin: string
  origin: string
  weight: number
  purchase_price: number
  gender: string
  description: string
  certificate: any
}

export interface ICempekFields {
  type: string
  birth_date: Date
  female_origin: string
  male_origin: string
  birth_weight: number
  birth_condition: string
  gender: string
  description: string
}

export interface ICategoryProps {
  category?: string
  data?: any
  cardList?: {
    icon: any
    title: string
    value: string
    label?: string
  }[]
}

export interface IFilterShedInfo {
  feed: {
    name: string
  }
  vitamin: {
    name: string
  }
  vaccine: {
    name: string
  }
  anthelmintic: {
    name: string
  }
}
