import ShedHeader from '@/components/layout/ShedHeader'
import { StoreInitializer } from '@/components/shared'
import ShedTable from '@/components/table/ShedTable'
import { shedData as shedList } from '@/data/dummy'

export default async function ShedPage() {
  return (
    <main>
      <StoreInitializer data={{ shed: { shedList } }} />
      <ShedHeader />
      <ShedTable />
    </main>
  )
}
