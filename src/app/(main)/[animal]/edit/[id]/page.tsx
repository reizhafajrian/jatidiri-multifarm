import AnimalForm from '@/components/form/AnimalForm'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Edit Animal',
}

export default function EditAnimalPage({ params }: { params: any }) {
  const { animal, id } = params
  const data = use(getData(animal, id, cookies().get('token')?.value!))

  return (
    <AnimalForm
      formType="edit"
      gender={data.gender}
      cempekForm={data.cempek}
      values={data}
      id={id}
    />
  )
}

const getData = async (animal: string, id: string, token: string) => {
  const res = await fetch(
    process.env.API_BASE_URL + `/${animal}/get/detail/${id}`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  ).then((res) => res.json())

  return await res.data
}
