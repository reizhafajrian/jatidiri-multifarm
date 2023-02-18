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
