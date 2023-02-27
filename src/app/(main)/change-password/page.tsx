import ChangePasswordForm from '@/components/form/ChangePasswordForm'
import { Card } from '@/components/shared'

export default function ChangePassPage() {
  return (
    <Card>
      <p className="mb-5 font-semibold">Change Password</p>
      <ChangePasswordForm />
    </Card>
  )
}
