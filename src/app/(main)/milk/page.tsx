import MilkFilter from '@/components/filter/MilkFilter'
import MilkHeader from '@/components/layout/MilkHeader'
import MilkCardList from '@/components/list/MilkCardList'
import { StoreInitializer } from '@/components/shared'
import MilkTable from '@/components/table/MilkTable'

export const metadata = {
  title: 'Jatidiri Multifarm | Milk',
}

export default function MilkPage() {
  return (
    <main>
      <StoreInitializer data={{ searchType: 'milk' }} />
      <MilkHeader />
      <MilkFilter />
      <MilkCardList />
      <MilkTable />
    </main>
  )
}
