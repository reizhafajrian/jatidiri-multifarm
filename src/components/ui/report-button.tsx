"use client"

import { Button } from "./button"
import { Icons } from "./Icons"

interface IProps {
  csvUrl: string
  pdfUrl: string
}

export default function ReportButton({ csvUrl, pdfUrl }: IProps) {
  return (
    <>
      <Button
        variant="outline"
        className="space-x-1 px-3 text-xs"
        onClick={() => window.open(pdfUrl, "_blank")}
      >
        <Icons.download className="mr-1 h-4 w-4" /> <span>PDF</span>
      </Button>
      <Button
        variant="outline"
        className="space-x-1 px-3 text-xs"
        onClick={() => window.open(csvUrl, "_blank")}
      >
        <Icons.download className="mr-1 h-4 w-4" /> <span>CSV</span>
      </Button>
    </>
  )
}
