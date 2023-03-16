import MilkFilter from '@/components/filter/MilkFilter'
import MilkHeader from '@/components/layout/MilkHeader'
import MilkCardList from '@/components/list/MilkCardList'
import MilkTable from '@/components/table/MilkTable'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Milk',
}

export default function MilkPage() {
  const { milkInfo } = use(getData())

  return (
    <main>
      <MilkHeader />
      <MilkFilter />
      <MilkCardList info={milkInfo} />
      <MilkTable />
    </main>
  )
}

const getData = async () => {
  const milkInfo = {
    income_total: 1250000,
    income_date: new Date(),
    income_percentage: 5.2,
    milk_total: 35,
    milk_date: new Date(),
    milk_percentage: 5.2,
  }

  return {
    milkInfo,
  }
}
