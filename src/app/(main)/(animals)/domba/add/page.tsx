import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import FormBetina from '@/components/Form/FormBetina'
import FormCempek from '@/components/Form/FormCempek'
import FormPejantan from '@/components/Form/FormPejantan'
import PageTabs from '@/components/PageTabs'
import Link from 'next/link'

export default function AddDombaPage() {
  return (
    <div>
      <Link
        href="/domba"
        replace
        className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
      >
        <ArrowUpIcon className="-rotate-90 fill-primary-7 stroke-primary-7" />
        kembali
      </Link>
      <PageTabs
        categories={{
          Pejantan: <FormPejantan animal="sheep" />,
          Betina: <FormBetina animal="sheep" />,
          Cempek: <FormCempek animal="sheep" />,
        }}
      />
    </div>
  )
}
