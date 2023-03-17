import { Post } from '@/lib/api'
import { IMilk, IMilkInfo } from '@/store/milk'

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
  const { _id, animal_id, created_by, milk, milk_date } = payload

  const res = await Post({
    url: '/api/milk/update',
    body: {
      data: [
        {
          _id,
          amount: milk,
          animal_id,
          date: milk_date?.toISOString(),
          created_by,
        },
      ],
    },
  })

  return res
}

export const addIncomeHandler = async (payload: IMilkInfo) => {
  const { created_by, income_date, income_total } = payload
  console.log(payload)

  const res = await Post({
    url: '/api/milk/income/create',
    body: {
      amount: income_total,
      income_created_at: income_date?.toISOString(),
      created_by,
    },
  })

  return res
}
