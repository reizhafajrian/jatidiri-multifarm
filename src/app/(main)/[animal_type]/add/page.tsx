import BackLink from '@/components/BackLink'
import AddAnimalForm from '@/components/Form/AddAnimalForm'
import AddCempekForm from '@/components/Form/AddCempekForm'
import PageTabs from '@/components/PageTabs'

export default function AddDombaPage({ params: { animal_type } }: any) {
  return (
    <div>
      <BackLink href={`/${animal_type}`} />
      <PageTabs
        categories={{
          Pejantan: <AddAnimalForm animal_type={animal_type} gender="male" />,
          Betina: <AddAnimalForm animal_type={animal_type} gender="female" />,
          Cempek: <AddCempekForm animal_type={animal_type} />,
        }}
      />
    </div>
  )
}
