"use client"

import { usePathname } from "next/navigation"

import FormHeader from "./form-header"
import TableHeader from "./table-header"

export default function Header() {
  const path = usePathname()
  const isFormPage = path.split("/").length === 4

  if (isFormPage) return <FormHeader />
  return <TableHeader />
}
