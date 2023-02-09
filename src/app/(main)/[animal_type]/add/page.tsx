import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import FormBetina from '@/components/Form/FormBetina'
import FormCempek from '@/components/Form/FormCempek'
import FormPejantan from '@/components/Form/FormPejantan'
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
          Pejantan: <FormPejantan animal={animal_type} />,
          Betina: <FormBetina animal={animal_type} />,
          Cempek: <FormCempek animal={animal_type} />,
        }}
      />
    </div>
  )
}
