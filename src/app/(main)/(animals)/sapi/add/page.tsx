import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import FormBetina from '@/components/Form/FormBetina'
import FormPejantan from '@/components/Form/FormPejantan'
import PageTabs from '@/components/PageTabs'
import Link from 'next/link'

export default function AddSapiPage() {
  return (
    <div>
      <Link
        href="/sapi"
        replace
        className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
      >
        <ArrowUpIcon className="-rotate-90 fill-primary-7 stroke-primary-7" />
        kembali
      </Link>
      <PageTabs
        categories={{
          Pejantan: <FormPejantan animal="cow" />,
          Betina: <FormBetina animal="cow" />,
        }}
      />
    </div>
  )
}
