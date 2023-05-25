import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import { StoreInitializer } from '@/components/shared'
import HppTable from '@/components/table/HppTable'

export const metadata = {
  title: 'Jatidiri Multifarm | HPP',
}

export default function Page(props: { params: any }) {
  const { animal } = props.params

  return (
    <>
      <StoreInitializer data={{ animal, searchType: `hpp-${animal}` }} />
      <HppHeader animal_type={animal} />
      <HppFilter />
      <HppTable />
    </>
  )
}
