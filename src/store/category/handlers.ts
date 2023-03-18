import { Post } from '@/lib/api'
import { ICategory } from '@/store/category'

export const addCategoryHandler = async (payload: ICategory) => {
  const { category, created_by, type, stock, price } = payload

  const res = await Post({
    url: `/api/${category}/create`,
    data: {
      [`${category}_type`]: type,
      [`${category}_stock`]: stock,
      [`${category}_price_${category === 'feed' ? 'kgs' : 'pcs'}`]: price,
      created_by,
    },
  })

  return res
}

export const editCategoryHandler = async (payload: ICategory) => {
  return
}

export const deleteCategoryHandler = async (payload: ICategory) => {
  const url = `/api/${payload.category}/delete/${payload._id}`
  let res = {}

  console.log({ url, res })

  return res
}
