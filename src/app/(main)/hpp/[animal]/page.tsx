import StoreInitializer from "@/components/StoreInitializer"

import HppFilter from "./hpp-filter"
import HppHeader from "./hpp-header"
import HppTable from "./hpp-table"

export const metadata = {
  title: "HPP",
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
