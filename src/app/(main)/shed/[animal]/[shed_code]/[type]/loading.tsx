import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <Loader2 className="animate-spin stroke-primary-4" />
    </div>
  )
}
