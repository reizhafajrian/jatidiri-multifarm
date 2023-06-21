import BackLink from "@/components/ui/BackLink"

import ShedForm from "./shed-form"

export const metadata = {
  title: "Add Shed",
}

export default function AddShedPage() {
  return (
    <>
      <BackLink />
      <ShedForm />
    </>
  )
}
