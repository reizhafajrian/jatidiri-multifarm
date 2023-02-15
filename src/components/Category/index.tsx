import CalcIcon from '@/assets/icons/calc-circle.svg'
import CatIcon from '@/assets/icons/cat-circle.svg'
import CowIcon from '@/assets/icons/cow-circle.svg'
import GoatIcon from '@/assets/icons/goat-circle.svg'
import SheepIcon from '@/assets/icons/sheep-circle.svg'
import CategoryHeader from './CategoryHeader'
import Content from './Content'

export default function Category() {
  return (
    <main>
      <CategoryHeader />
      <div className="space-y-10">
        <Content category="feed" cardList={feedCardList} data={[{}, {}, {}]} />
        <Content
          category="vitamin"
          cardList={vitaminCardList}
          data={[{}, {}, {}]}
        />
        <Content
          category="anthelmintic"
          cardList={anthelminticCardList}
          data={[{}, {}, {}]}
        />
      </div>
    </main>
  )
}

const feedCardList = [
  { title: 'Jenis Pakan', value: '4', label: 'Jenis', icon: <CatIcon /> },
  {
    title: 'Total Penggunaan',
    value: '250',
    label: 'Kilogram',
    icon: <CalcIcon />,
  },
  { title: 'Total Stock', value: '150', label: 'Kilogram', icon: <CalcIcon /> },
]

const vitaminCardList = [
  { title: 'Sapi', value: '4/10', icon: <CowIcon /> },
  { title: 'Domba', value: '4/8', icon: <SheepIcon /> },
  { title: 'Kambing', value: '4/6', icon: <GoatIcon /> },
]

const anthelminticCardList = [
  { title: 'Sapi', value: '4/10', icon: <CowIcon /> },
  { title: 'Domba', value: '4/8', icon: <SheepIcon /> },
  { title: 'Kambing', value: '4/6', icon: <GoatIcon /> },
]
