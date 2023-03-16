'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from '../shared/Icons'

export default function BackLink({ href }: { href?: string }) {
  const router = useRouter()

  return (
    <button
      onClick={() => (href ? router.replace(href) : router.back())}
      className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
    >
      <ArrowLeft className="w-4" />
      <span>kembali</span>
    </button>
  )
}
