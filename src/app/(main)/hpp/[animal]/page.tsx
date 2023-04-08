import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import { StoreInitializer } from '@/components/shared'
import HppTable from '@/components/table/HppTable'

export const metadata = {
  title: 'Jatidiri Multifarm | HPP',
}

export default function Page(props: { params: {
  animal: string
} }) {
  const { animal } = props.params
  return (
    <>
      <StoreInitializer data={{ animal, searchType: animal }} />
      <HppHeader animal_type={animal} />
      <HppFilter />
      <HppTable animal={props.params.animal} />
    </>
  )
}

