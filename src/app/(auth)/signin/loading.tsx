import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="grid h-screen place-items-center">
      <Loader2 className="h-8 w-8 animate-spin fill-primary-4 text-gray-200" />
    </div>
  )
}
