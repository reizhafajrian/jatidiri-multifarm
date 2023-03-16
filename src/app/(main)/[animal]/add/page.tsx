import AnimalForm from '@/components/form/AnimalForm'
import Tab from '@/components/shared/Tab'
import { IPageProps } from '@/lib/types'

export const metadata = {
  title: 'Jatidiri Multifarm | Add Animal',
}

export default function AddAnimalPage({ params }: IPageProps) {
  const animal = params.animal

  const categories = {
    Pejantan: <AnimalForm formType="add" gender="true" animal={animal} />,
    Betina: <AnimalForm formType="add" gender="false" animal={animal} />,
    ...(animal !== 'cow' && {
      Cempek: <AnimalForm formType="add" cempekForm animal={animal} />,
    }),
  }

  return <Tab categories={categories} />
}
