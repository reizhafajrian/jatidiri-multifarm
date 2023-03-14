import MilkFilter from '@/components/filter/MilkFilter'
import MilkHeader from '@/components/layout/MilkHeader'
import MilkCardList from '@/components/list/MilkCardList'
import MilkTable from '@/components/table/MilkTable'
import { milkData } from '@/data/dummy'
import { use } from 'react'

export default function MilkPage() {
  const { milkInfo, milkData } = use(getData())

  return (
    <main>
      <MilkHeader />
      <MilkFilter />
      <MilkCardList info={milkInfo} />
      <MilkTable data={milkData} />
    </main>
  )
}

const getData = async () => {
  // return await Get(`endpoint`)

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
    milkData,
  }
}
