import { IAnimalFields, IAnimalProps, IUser } from '@/data/interfaces'
import { fetcher } from '@/utils/fetcher'
import Cookies from 'js-cookie'

export const signin = async (user: IUser) => {
  const res = await fetcher({
    url: '/api/auth/login',
    method: 'post',
    body: user,
  })

  Cookies.set('token', res.data.token, {
    path: '/',
    expires: 60 * 60 * 24 * 7,
    secure: true,
  })

  return res
}

export const addAnimal = async (
  data: { values: IAnimalFields } & IAnimalProps
) => {
  const { animal_type, gender, values } = data

  const formData = new FormData()
  formData.append('created_by', '63e5bdd29536b95a6759a525')
  formData.append('gender', gender === 'male' ? 'true' : 'false')

  for (let value in values) {
    if (value.includes('date')) {
      formData.append(value, values[value].toISOString())
    } else {
      formData.append(value, values[value])
    }
  }
  formData.set('files', values.files[0])

  try {
    const res = await fetcher({
      url: `/api/${animal_type}/create`,
      method: 'post',
      formData,
    })

    return res
  } catch (e) {
    return e
  }
}
