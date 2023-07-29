"use client"

// import { useEffect, useState } from "react"
// import ReportButton from "../ui/report-button"
import useStore from "@/store/useStore"

import FormAddMilk from "./form/form-add"

export default function Header() {
  const milkStatus = useStore((s) => s.milkStatus)
  // const [csvUrl, setCsvUrl] = useState("")
  // const [pdfUrl, setPdfUrl] = useState("")

  // useEffect(() => {
  //   const queriesArray: Array<string> = []
  //   const url = `/api/milk/download`
  //   milkStatus !== "all" && queriesArray.push("milk_status=" + milkStatus)
  //   if (queriesArray.length > 0) {
  //     setCsvUrl(`?${queriesArray?.join("&")}`)
  //     setPdfUrl(`${url + "/pdf"}` + `?${queriesArray?.join("&")}`)
  //   } else {
  //     setCsvUrl(url)
  //     setPdfUrl(url + "/pdf")
  //   }
  // }, [milkStatus])

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-5">
          Penghasilan Susu
        </h1>
        <div className="flex items-center gap-2">
          <FormAddMilk />
          {/* <ReportButton csvUrl={csvUrl} pdfUrl={pdfUrl} /> */}
        </div>
      </div>
    </>
  )
}
