import MilkIncomeCard from "@/components/milk/milk-card-income"
import MilkTotalCard from "@/components/milk/milk-card-total"
import MilkFilter from "@/components/milk/milk-filter"
import MilkHeader from "@/components/milk/milk-header"
import MilkTable from "@/components/milk/milk-table"
import StoreInitializer from "@/components/store-initializer"

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
