import Card from "@/components/ui/card"
import ChangePasswordForm from "@/components/auth/change-pass-form"

export const metadata = {
  title: "Change Password",
}

export default function ChangePassPage() {
  return (
    <Card>
      <p className="mb-5 font-semibold">Change Password</p>
      <ChangePasswordForm />
    </Card>
  )
}
