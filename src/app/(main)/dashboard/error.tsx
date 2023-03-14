'use client'
import { Button } from '@/components/shared'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.log(error)

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl">Something went wrong while loading this page.</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}
