import HppFilter from "@/components/hpp/hpp-filter"
import HppHeader from "@/components/hpp/hpp-header"
import HppTable from "@/components/hpp/hpp-table"

export const metadata = {
  title: "HPP Goat",
}

export default function Page() {
  const animal = "goat"

  return (
    <>
      <HppHeader animal={animal} />
      <HppFilter />
      <HppTable animal={animal} />
    </>
  )
}
