import ShedHeader from '@/components/layout/ShedHeader'
import ShedTable from '@/components/table/ShedTable'
import { shedData } from '@/data/dummy'

export default async function ShedPage() {
  return (
    <main>
      <ShedHeader />
      <ShedTable data={shedData} />
    </main>
  )
}
