'use client'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from '../shared/Icons'

export default function BackLink() {
  const router = useRouter()
  const { reset } = useStore()

  return (
    <button
      onClick={() => {
        reset()
        router.back()
      }}
      className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
    >
      <ArrowLeft />
      <span>kembali</span>
    </button>
  )
}
