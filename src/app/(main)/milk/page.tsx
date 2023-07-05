import Header from "@/components/milk/header"
import MilkIncomeCard from "@/components/milk/milk-card-income"
import MilkTotalCard from "@/components/milk/milk-card-total"
import TableData from "@/components/milk/table-data"
import TableFilter from "@/components/milk/table-filter"

export const metadata = {
  title: "Milk",
}

export default function MilkPage() {
  return (
    <>
      <Header />
      <TableFilter />
      <div className="my-4 grid gap-3 md:grid-cols-2 md:gap-10">
        <MilkIncomeCard />
        <MilkTotalCard />
      </div>
      <TableData />
    </>
  )
}
