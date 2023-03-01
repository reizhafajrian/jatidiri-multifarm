import AnimalAddWrapper from '@/components/layout/AnimalAddWrapper'
import { StoreInitializer } from '@/components/shared'
import BackLink from '@/components/shared/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function AddAnimalPage(props: IPageProps) {
  const { animal_type } = props.params

  return (
    <main>
      <StoreInitializer
        data={{ animal: { animal_type }, cempek: { animal_type } }}
      />
      <BackLink />
      <AnimalAddWrapper />
    </main>
  )
}
