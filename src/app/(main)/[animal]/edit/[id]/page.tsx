import AnimalForm from '@/components/form/AnimalForm'
import { IPageProps } from '@/data/interfaces'
import { Get } from '@/libs/api'
import { use } from 'react'

export default function EditAnimalPage({ params }: IPageProps) {
  const { animal, id } = params
  const { data } = use(getData(animal, id))

  return (
    <>
      <AnimalForm
        formType="edit"
        animal={params.animal}
        gender={data.gender ? 'male' : 'female'}
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
