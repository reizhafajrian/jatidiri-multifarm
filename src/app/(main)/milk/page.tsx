import MilkFilter from '@/components/filter/MilkFilter'
import MilkHeader from '@/components/layout/MilkHeader'
import MilkCardList from '@/components/list/MilkCardList'
import { StoreInitializer } from '@/components/shared'
import MilkTable from '@/components/table/MilkTable'
import { milkData } from '@/data/dummy'
import { useMilkStore } from '@/store/milk'

export default function SusuPage() {
  const milk = {
    milkList: milkData,
    milkInfo: {
      income_total: 1250000,
      income_date: new Date(),
      income_percentage: 5.2,
      milk_total: 35,
      milk_date: new Date(),
      milk_percentage: 5.2,
    },
  }

  useMilkStore.setState(milk)

  return (
    <main>
      <StoreInitializer data={{ milk }} />
      <MilkHeader />
      <MilkFilter />
      <MilkCardList />
      <MilkTable />
    </main>
  )
}
