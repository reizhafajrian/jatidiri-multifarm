import AnimalFilter from '@/components/filter/AnimalFilter'
import AnimalTable from '@/components/table/AnimalTable'
import { IPageProps } from '@/data/interfaces'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Jatidiri Multifarm | Animal',
}

export default function AnimalPage({ params }: IPageProps) {
  const { animal, type } = params
  const typeNotFound = !['male', 'female', 'cempek'].includes(type)

  if (typeNotFound) return notFound()

  return (
    <>
      <AnimalFilter animal={animal} />
      <AnimalTable animal={animal} type={type} />
    </>
  )
}
