import BackLink from "@/components/ui/back-link"
import ShedForm from "@/components/shed/shed-form"

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
