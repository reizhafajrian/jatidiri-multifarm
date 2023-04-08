import MilkIncomeCard from '../card/MilkIncomeCard'
import MilkTotalCard from '../card/MilkTotalCard'

export default function MilkCardList() {
  return (
    <div className="my-4 grid gap-3 md:grid-cols-2 md:gap-10">
      <MilkIncomeCard />
      <MilkTotalCard />
    </div>
  )
}
