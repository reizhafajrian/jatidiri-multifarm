import AddAnimalForm from '@/components/Animal/AddAnimalForm'
import AddCempekForm from '@/components/Animal/AddCempekForm'
import BackLink from '@/components/BackLink'
import PageTabs from '@/components/PageTabs'
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
    <div>
      <BackLink href={`/${animal_type}`} />
      <PageTabs categories={categories} />
    </div>
  )
}
