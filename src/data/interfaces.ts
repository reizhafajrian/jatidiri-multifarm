export interface ILayoutProps {
  children: React.ReactNode
  params?: any
}

export interface IModal {
  isOpen: boolean
  closeModal: any
}

export interface IPageProps {
  params?: any
}

export interface ICategoryProps {
  category?: string
  data?: any
  cardList?: {
    icon: any
    title: string
    value: number | string
    label?: string
  }[]
  isOpen?: boolean
  closeModal?: any
}
