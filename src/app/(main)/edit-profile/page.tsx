import EditProfileForm from '@/components/form/EditProfileForm'
import { Card } from '@/components/shared'

export const metadata = {
  title: 'Jatidiri Multifarm | Edit Profile',
}

export default function EditProfilePage() {
  return (
    <Card>
      <EditProfileForm />
    </Card>
  )
}
