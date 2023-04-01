import ShedHeader from '@/components/layout/ShedHeader'
import { StoreInitializer } from '@/components/shared'
import ShedTable from '@/components/table/ShedTable'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedPage(props: any) {
  return (
    <>
      <StoreInitializer data={{ animal: props.params.animal }} />
      <ShedHeader />
      <ShedTable />
    </>
  )
}
