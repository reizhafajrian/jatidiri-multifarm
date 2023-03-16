import ShedForm from '@/components/form/ShedForm'
import BackLink from '@/components/shared/BackLink'

export const metadata = {
  title: 'Jatidiri Multifarm | Add Shed',
}

export default function AddShedPage() {
  return (
    <>
      <BackLink />
      <ShedForm />
    </>
  )
}
