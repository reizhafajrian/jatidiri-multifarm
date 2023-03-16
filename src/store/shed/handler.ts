import { Post } from '@/lib/api'
import { IShed, IShedAnimal, IShedDetail } from '@/store/shed'

export const addShedHandler = async (payload: IShed) => {
  const res = await Post({ url: '/api/shed/create', body: payload })
  return res
}

export const addShedDetailHandler = async (payload: IShedDetail) => {
  const body = {}
  for (let value in payload) {
    if (value.includes('_date')) {
      body[value] = payload[value].toISOString()
    } else {
      body[value] = payload[value]
    }
  }
  console.log(body)

  const res = await Post({ url: '/api/shed/data/create', body: payload })
  console.log(res)

  return res
}

export const addShedAnimalHandler = async (
  payload: IShedAnimal & { uid: string }
) => {
  return
}
