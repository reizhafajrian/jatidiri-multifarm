import CowIcon from '@/assets/icons/dashboard-cow.svg'
import GoatIcon from '@/assets/icons/dashboard-goat.svg'
import SheepIcon from '@/assets/icons/dashboard-sheep.svg'
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
  { icon: <CowIcon />, animal_type: 'cow' },
  { icon: <SheepIcon />, animal_type: 'sheep' },
  { icon: <GoatIcon />, animal_type: 'goat' },
]
