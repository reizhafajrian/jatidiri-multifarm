import HppFilter from "@/components/hpp/hpp-filter"
import HppHeader from "@/components/hpp/hpp-header"
import HppTable from "@/components/hpp/hpp-table"
import StoreInitializer from "@/components/store-initializer"

export const metadata = {
  title: "HPP Cow",
}

export default function Page() {
  const animal = "cow"

  return (
    <>
      <StoreInitializer data={{ animal }} />
      <HppHeader animal={animal} />
      <HppFilter />
      <HppTable animal={animal} />
    </>
  )
}
