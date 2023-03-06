import { DashboardCow, DashboardGoat, DashboardSheep } from '../Icons'
import CardAnimalInfo from './CardAnimalInfo'

export default function CardAnimalInfoList() {
  return (
    <div className="grid grid-cols-3 gap-7">
      {dataAnimal.map((item, idx) => (
        <CardAnimalInfo
          key={idx}
          data={{ ...item, totalAdult: 100, totalCempek: 80 }}
        />
      ))}
    </div>
  )
}

const dataAnimal = [
  { icon: <DashboardCow />, animal_type: 'cow' },
  { icon: <DashboardSheep />, animal_type: 'sheep' },
  { icon: <DashboardGoat />, animal_type: 'goat' },
]
