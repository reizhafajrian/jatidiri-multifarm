import ShedHeader from '@/components/layout/ShedHeader'
import ShedTable from '@/components/table/ShedTable'
import { IPageProps } from '@/lib/types'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedPage({ params }: IPageProps) {
  return (
    <>
      <ShedHeader />
      <ShedTable animal={params.animal} />
    </>
  )
}
