import Content from '@/components/layout/CategoryContent'
import CategoryHeader from '@/components/layout/CategoryHeader'
import {
  CalcCircle,
  CowCircle,
  FeedCircle,
  GoatCircle,
  SheepCircle,
} from '@/components/shared/Icons'

const data = [{}, {}, {}]

export default function CategoryPage() {
  return (
    <main>
      <CategoryHeader />
      <div className="space-y-10">
        <Content category="feed" cardList={fCardList} data={data} />
        <Content category="vitamin" cardList={vCardList} data={data} />
        <Content category="anthelmintic" cardList={aCardList} data={data} />
      </div>
    </main>
  )
}

const fCardList = [
  { title: 'Jenis Pakan', value: '4', label: 'Jenis', icon: <FeedCircle /> },
  {
    title: 'Total Penggunaan',
    value: '250',
    label: 'Kilogram',
    icon: <CalcCircle />,
  },
  {
    title: 'Total Stock',
    value: '150',
    label: 'Kilogram',
    icon: <CalcCircle />,
  },
]

const vCardList = [
  { title: 'Sapi', value: '4/10', icon: <CowCircle /> },
  { title: 'Domba', value: '4/8', icon: <SheepCircle /> },
  { title: 'Kambing', value: '4/6', icon: <GoatCircle /> },
]

const aCardList = [
  { title: 'Sapi', value: '4/10', icon: <CowCircle /> },
  { title: 'Domba', value: '4/8', icon: <SheepCircle /> },
  { title: 'Kambing', value: '4/6', icon: <GoatCircle /> },
]
