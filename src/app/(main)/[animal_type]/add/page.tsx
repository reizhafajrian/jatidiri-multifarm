import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import AddAnimalForm from '@/components/Form/AddAnimalForm'
import AddCempekForm from '@/components/Form/AddCempekForm'
import PageTabs from '@/components/PageTabs'
import Link from 'next/link'

export default function AddDombaPage({ params: { animal_type } }: any) {
  return (
    <div>
      <Link
        href={`/${animal_type}`}
        replace
        className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
      >
        <ArrowUpIcon className="-rotate-90 fill-primary-7 stroke-primary-7" />
        kembali
      </Link>
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
