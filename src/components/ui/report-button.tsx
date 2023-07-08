"use client"

import { Api } from "@/lib/api"

import { Button } from "./button"
import { Icons } from "./Icons"
import { toast } from "./toast"

interface IProps {
  csvUrl: string
  pdfUrl: string
}

export default function ReportButton({ csvUrl, pdfUrl }: IProps) {
  const download = async (url: string) => {
    try {
      await Api.get(url)
      window.open(url, "_blank")
    } catch (err: any) {
      toast({ message: err.message, type: "error" })
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="space-x-1 px-3 text-xs"
        onClick={() => download(pdfUrl)}
      >
        <Icons.download className="mr-1 h-4 w-4" /> <span>PDF</span>
      </Button>
      <Button
        variant="outline"
        className="space-x-1 px-3 text-xs"
        onClick={() => download(csvUrl)}
      >
        <Icons.download className="mr-1 h-4 w-4" /> <span>CSV</span>
      </Button>
    </>
  )
}
