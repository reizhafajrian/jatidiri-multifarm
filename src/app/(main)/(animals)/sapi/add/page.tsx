import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
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
          Pejantan: 'add pejantan form',
          Betina: 'add betina form',
          Cempek: 'add cempek form',
        }}
      />
    </div>
  )
}
