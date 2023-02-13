import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'
import Link from 'next/link'

export default function BackLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      replace
      className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
    >
      <ArrowLeftIcon />
      kembali
    </Link>
  )
}
