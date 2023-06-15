"use client"

import { Button } from "@/components/ui/Button"

interface IProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: IProps) {
  console.log({ error })

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl">Something went wrong while loading this page.</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
