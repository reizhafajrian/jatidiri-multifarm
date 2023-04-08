import AnimalFilter from '@/components/filter/AnimalFilter'
import { StoreInitializer } from '@/components/shared'
import AnimalTable from '@/components/table/AnimalTable'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Jatidiri Multifarm | Animal',
}

export default function AnimalPage({ params }: { params: any }) {
  const { animal, type } = params
  const typeNotFound = !['male', 'female', 'cempek'].includes(type)

  if (typeNotFound) return notFound()

  return (
    <>
      <StoreInitializer data={{ type }} />
      <AnimalFilter />
      <AnimalTable animal={animal} />
    </>
  )
}
