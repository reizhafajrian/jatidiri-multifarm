import BackLink from "@/components/ui/back-link"
import FormShed from "@/components/shed/form/form-shed"

export const metadata = {
  title: "Add Shed",
}

export default function Page() {
  return (
    <>
      <BackLink />
      <FormShed />
    </>
  )
}
