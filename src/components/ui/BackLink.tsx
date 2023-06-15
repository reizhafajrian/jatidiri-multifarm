"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"

import { Icons } from "./Icons"

const BackLink: FC<{ href?: string }> = ({ href }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => (href ? router.replace(href) : router.back())}
      className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
    >
      <Icons.arrowLeft className="w-4" />
      <span>kembali</span>
    </button>
  )
}

export default BackLink
