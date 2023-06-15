"use client"

import { Button } from "@/components/ui/Button"

interface IProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: IProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {error.message === "NEXT_NOT_FOUND" ? (
        <p className="text-xl">
          The site you&apos;re searching for does not exist.
        </p>
      ) : (
        <p className="text-xl">Something went wrong while loading this page.</p>
      )}
      <Button className="rounded-md px-3 py-2" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
