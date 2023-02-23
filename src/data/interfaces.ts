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

export interface IDInfoProps {
  data: {
    icon: any
    title: string
    value: string
    percentage: string
  }
}

export interface IDAnimalInfoProps {
  data: {
    icon: any
    animal_type: string
    totalAdult: number
    totalCempek: number
  }
}

export interface IDDiagramProps {
  className?: string
  title: string
  children?: React.ReactNode
}

export interface IAnimalProps {
  eartag_code?: string
  animal_type?: 'goat' | 'sheep' | 'cow'
  gender?: 'male' | 'female'
}

export interface IShedProps {
  isOpen?: boolean
  closeModal?: any
  animal_type?: string
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
  isOpen?: boolean
  closeModal?: any
}

export interface IMilkProps {
  isOpen?: boolean
  closeModal?: any
  eartag_code?: string
}

export interface IAnimalFields {
  type: string
  arrival_date: Date
  birth_date: Date
  origin_female: string
  origin_male: string
  origin: string
  weight: number
  purchase_price: number
  description: string
  files: any
  gender?: string
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

export interface IShedFields {
  shed_code: string
  animal_type: string
  animal_weight: number
  feed: string
  feed_weight: number
  age_range: string
  description: string
}

export interface IShedDataFields {
  feed_date?: Date
  feed_type?: string
  feed_price?: number
  feed_stock?: number
  vitamin_date?: Date
  vitamin_type?: string
  vitamin_price?: number
  vaccine_date?: Date
  vaccine_type?: string
  vaccine_price?: number
  anthelmintic_date?: Date
  anthelmintic_type?: string
  anthelmintic_price?: number
}

export interface IShedAnimalFields {
  eartag_code: string
  description: string
}

export interface ICategoryFields {
  type: string
  stock: number
  price: number
}

export interface IMilkFields {
  eartag_code: string
  milk: number
  milk_date: Date
  history_milk_date?: Date
  history_milk?: number
}

export interface IHppFields {
  eartag_code: string
  hpp: number
  selling_price: number
  description: string
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
