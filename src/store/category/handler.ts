import { IAnthelmintic, IFeed, IVitamin } from '@/store/category'

export const addCategoryHandler = async (
  payload: IFeed | IVitamin | (IAnthelmintic & { uid: string })
) => {
  return
}

export const editCategoryHandler = async (
  payload: IFeed | IVitamin | (IAnthelmintic & { uid: string })
) => {
  return
}
