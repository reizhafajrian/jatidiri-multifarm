import MilkIncomeCard from '../card/MilkIncomeCard'
import MilkTotalCard from '../card/MilkTotalCard'

export default function MilkCardList() {
  return (
    <div className="my-4 grid grid-cols-2 gap-10">
      <MilkIncomeCard />
      <MilkTotalCard />
    </div>
  )
}
