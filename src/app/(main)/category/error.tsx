"use client"

import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"

interface IProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: IProps) {
  if (error.message.includes("404")) return notFound()
  if (error.message === "NEXT_NOT_FOUND") return notFound()

  return (
    <div className="flex flex-col items-center gap-4">
      {error.message}
      <p className="text-xl">Something went wrong while loading this page.</p>
      <Button className="rounded-md px-3 py-2" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
