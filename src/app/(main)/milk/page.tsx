import StoreInitializer from "@/components/StoreInitializer"

import MilkIncomeCard from "./milk-card-income"
import MilkTotalCard from "./milk-card-total"
import MilkFilter from "./milk-filter"
import MilkHeader from "./milk-header"
import MilkTable from "./milk-table"

export const metadata = {
  title: "Milk",
}

export default function MilkPage() {
  return (
    <main>
      <StoreInitializer data={{ searchType: "milk" }} />
      <MilkHeader />
      <MilkFilter />
      <div className="my-4 grid gap-3 md:grid-cols-2 md:gap-10">
        <MilkIncomeCard />
        <MilkTotalCard />
      </div>
      <MilkTable />
    </main>
  )
}
