'use client'
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'
import { useRouter } from 'next/navigation'

export default function BackLink() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
    >
      <ArrowLeftIcon />
      kembali
    </button>
  )
}
