import AnimalForm from '@/components/form/AnimalForm'
import { IPageProps } from '@/data/interfaces'
import { Get } from '@/lib/api'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Edit Animal',
}

export default function EditAnimalPage({ params }: IPageProps) {
  const { animal, id } = params
  const { data } = use(getData(animal, id))
  console.log({ data })

  return (
    <>
      <AnimalForm
        formType="edit"
        animal={params.animal}
        gender={data.gender}
        cempekForm={data.cempek}
        values={data}
        id={id}
      />
    </>
  )
}

const getData = async (animal: string, id: string) => {
  return await Get(`/${animal}/get/detail/${id}`)
}
