import MilkFilter from '@/components/filter/MilkFilter'
import MilkHeader from '@/components/layout/MilkHeader'
import MilkCardList from '@/components/list/MilkCardList'
import MilkTable from '@/components/table/MilkTable'

export default function SusuPage() {
  return (
    <main>
      <MilkHeader />
      <MilkFilter />
      <MilkCardList />
      <MilkTable />
    </main>
  )
}
