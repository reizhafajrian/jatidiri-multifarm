import ShedHeader from '@/components/layout/ShedHeader'
import ShedTable from '@/components/table/ShedTable'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedPage({ params }: { params: any }) {
  return (
    <>
      <ShedHeader />
      <ShedTable animal={params.animal} />
    </>
  )
}
