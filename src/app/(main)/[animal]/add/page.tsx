import AnimalForm from '@/components/form/AnimalForm'
import Tab from '@/components/shared/Tab'

export const metadata = {
  title: 'Jatidiri Multifarm | Add Animal',
}

export default function AddAnimalPage({ params }: { params: any }) {
  const animal = params.animal

  const categories = {
    Pejantan: <AnimalForm formType="add" gender="true" />,
    Betina: <AnimalForm formType="add" gender="false" />,
    ...(animal !== 'cow' && {
      Cempek: <AnimalForm formType="add" cempekForm />,
    }),
  }

  return <Tab categories={categories} />
}
