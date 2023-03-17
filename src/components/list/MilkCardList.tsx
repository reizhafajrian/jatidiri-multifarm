import MilkTotalCard from '../card/MilkTotalCard'
import IncomeForm from '../form/IncomeForm'

export default function MilkCardList() {
  return (
    <div className="my-4 grid grid-cols-2 gap-10">
      <IncomeForm />
      <MilkTotalCard />
    </div>
  )
}
