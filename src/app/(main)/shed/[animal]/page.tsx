import ShedHeader from '@/components/layout/ShedHeader'
import { StoreInitializer } from '@/components/shared'
import ShedTable from '@/components/table/ShedTable'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedPage({ params }: { params: any }) {
  return (
    <>
      <StoreInitializer data={{ animal: params.animal, searchType: 'shed' }} />
      <ShedHeader />
      <ShedTable animal={params.animal} />
    </>
  )
}
