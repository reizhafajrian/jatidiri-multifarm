import { Post } from '@/lib/api'
import { IMilk } from '@/store/milk'

export const addMilkHandler = async (payload: IMilk) => {
  const { created_by, milk, milk_date, eartag_code } = payload

  const res = await Post({
    url: '/api/milk/create',
    body: {
      amount: milk,
      animal_id: eartag_code,
      milk_created_at: milk_date?.toISOString(),
      created_by,
    },
  })

  return res
}

export const editMilkHandler = async (payload: IMilk) => {
  const { created_by, milk, milk_date, eartag_code } = payload

  const res = await Post({
    url: '/api/milk/update',
    body: {
      data: [
        {
          amount: milk,
          animal_id: eartag_code,
          milk_created_at: milk_date?.toISOString(),
          created_by,
        },
      ],
    },
  })

  return res
}
