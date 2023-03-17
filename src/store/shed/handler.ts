import { Post, Put } from '@/lib/api'
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

  const res = await Post({ url: '/api/shed/data/create', body })

  return res
}

export const addShedAnimalHandler = async (payload: IShedAnimal) => {
  try {
    const { id, eartag_code: ear_tag, description } = payload
    const url = `/api/shed/add-animal/${id}`
    const res = await Put({
      url,
      body: { ear_tag, description },
    })
    return res
  } catch (err) {
    return err
  }
}
