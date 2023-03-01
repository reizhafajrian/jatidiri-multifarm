import { IAnimal, IAnimalProps, IState } from '@/store/animal'
import { fetcher } from '@/utils/fetcher'

export const getHeaderMenu = (get: () => IState) => {
  const animal_type = get().animal_type

  if (animal_type === 'cow') {
    return [
      { name: 'Pejantan', link: `/${animal_type}/male` },
      { name: 'Betina', link: `/${animal_type}/female` },
    ]
  } else {
    return [
      { name: 'Pejantan', link: `/${animal_type}/male` },
      { name: 'Betina', link: `/${animal_type}/female` },
      { name: 'Cempek', link: `/${animal_type}/cempek` },
    ]
  }
}

export const addAnimalHandler = async (
  payload: IAnimal & IAnimalProps & { uid: string }
) => {
  const { animal_type, gender, ...rest } = payload

  const formData = new FormData()
  formData.append('created_by', payload.uid)
  formData.append('gender', gender === 'male' ? 'true' : 'false')

  for (let value in rest) {
    if (value.includes('date')) {
      formData.append(value, rest[value].toISOString())
    } else {
      formData.append(value, rest[value])
    }
  }
  formData.set('files', rest.files[0])

  const res = await fetcher({
    url: `/api/${animal_type}/create`,
    method: 'post',
    formData,
  })

  return res
}

export const editAnimalHandler = async (
  payload: IAnimal & IAnimalProps & { uid: string }
) => {
  return
}

export const deleteAnimalHandler = async (payload: string) => {
  return
}
