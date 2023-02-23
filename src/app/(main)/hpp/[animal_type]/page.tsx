import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import HppTable from '@/components/table/HppTable'
import { hppData } from '@/data/dummy'

export default function HppPage() {
  return (
    <main>
      <HppHeader />
      <HppFilter />
      <HppTable data={hppData} />
    </main>
  )
}
