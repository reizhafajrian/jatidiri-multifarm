import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import AddShedForm from '@/components/Form/AddShedForm'
import Link from 'next/link'

export default function AddClusterPage() {
  return (
    <div>
      <Link
        href="/shed"
        replace
        className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
      >
        <ArrowUpIcon className="-rotate-90 fill-primary-7 stroke-primary-7" />
        kembali
      </Link>
      <AddShedForm />
    </div>
  )
}
