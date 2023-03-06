import MilkFilter from '@/components/filter/MilkFilter'
import MilkHeader from '@/components/layout/MilkHeader'
import MilkCardList from '@/components/list/MilkCardList'
import MilkTable from '@/components/table/MilkTable'
import { useMilkStore } from '@/store/milk'

export default function MilkPage() {
  useMilkStore.setState({
    milkInfo: {
      income_total: 1250000,
      income_date: new Date(),
      income_percentage: 5.2,
      milk_total: 35,
      milk_date: new Date(),
      milk_percentage: 5.2,
    },
  })

  return (
    <main>
      <MilkHeader />
      <MilkFilter />
      <MilkCardList />
      <MilkTable />
    </main>
  )
}
