import ShedHeader from '@/components/layout/ShedHeader'
import { StoreInitializer } from '@/components/shared'
import ShedTable from '@/components/table/ShedTable'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedPage(props: any) {
  const { params } = props
  return (
    <>
      <StoreInitializer data={{ animal: params.animal, searchType: 'shed' }} />
      <ShedHeader />
      <ShedTable animal={params.animal} />
    </>
  )
}
