"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/Icons"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="space-y-3">
        <h1 className="text-5xl font-semibold">Site not found...</h1>
        <p className="text-xl">
          The site you&apos;re searching for does not exist.
        </p>
        <Button onClick={() => router.replace("/dashboard")}>
          <Icons.arrowLeft />
          <p className="ml-3">Back to Dashboard</p>
        </Button>
      </div>
    </div>
  )
}
