import Card from "@/components/ui/Card"

import ChangePasswordForm from "./change-pass-form"

export const metadata = {
  title: "Jatidiri Multifarm | Change Password",
}

export default function ChangePassPage() {
  return (
    <Card>
      <p className="mb-5 font-semibold">Change Password</p>
      <ChangePasswordForm />
    </Card>
  )
}
