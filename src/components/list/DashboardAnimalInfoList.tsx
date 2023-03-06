import DashboardAnimalInfoCard from '../card/DashboardAnimalInfoCard'
import { DashboardCow, DashboardGoat, DashboardSheep } from '../shared/Icons'

interface IData {
  icon: any
  animal_type: 'goat' | 'sheep' | 'cow'
}

const dataAnimal: IData[] = [
  { icon: <DashboardCow />, animal_type: 'cow' },
  { icon: <DashboardSheep />, animal_type: 'sheep' },
  { icon: <DashboardGoat />, animal_type: 'goat' },
]

export default function DashboardAnimalInfoList() {
  return (
    <div className="grid grid-cols-3 gap-7">
      {dataAnimal.map((item, idx) => (
        <DashboardAnimalInfoCard
          key={idx}
          data={{ ...item, totalAdult: 100, totalCempek: 80 }}
        />
      ))}
    </div>
  )
}
