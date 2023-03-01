import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import { StoreInitializer } from '@/components/shared'
import HppTable from '@/components/table/HppTable'
import { hppData } from '@/data/dummy'

export default function HppPage() {
  const hpp = { hppList: hppData }

  return (
    <main>
      <StoreInitializer data={{ hpp }} />
      <HppHeader />
      <HppFilter />
      <HppTable />
    </main>
  )
}
