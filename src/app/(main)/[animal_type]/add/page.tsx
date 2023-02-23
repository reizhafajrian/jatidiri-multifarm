import AddAnimalForm from '@/components/form/AddAnimalForm'
import AddCempekForm from '@/components/form/AddCempekForm'
import BackLink from '@/components/shared/BackLink'
import PageTabs from '@/components/shared/PageTabs'
import { IPageProps } from '@/data/interfaces'

export default function AddAnimalPage(props: IPageProps) {
  const { animal_type } = props.params

  const categories =
    animal_type === 'cow'
      ? {
          Pejantan: <AddAnimalForm animal_type={animal_type} gender="male" />,
          Betina: <AddAnimalForm animal_type={animal_type} gender="female" />,
        }
      : {
          Pejantan: <AddAnimalForm animal_type={animal_type} gender="male" />,
          Betina: <AddAnimalForm animal_type={animal_type} gender="female" />,
          Cempek: <AddCempekForm animal_type={animal_type} />,
        }

  return (
    <main>
      <BackLink />
      <PageTabs categories={categories} />
    </main>
  )
}
