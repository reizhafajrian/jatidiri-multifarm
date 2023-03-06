import {
  CalcCircle,
  CowCircle,
  FeedCircle,
  GoatCircle,
  SheepCircle,
} from '../Icons'
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

const vitaminCardList = [
  { title: 'Sapi', value: '4/10', icon: <CowCircle /> },
  { title: 'Domba', value: '4/8', icon: <SheepCircle /> },
  { title: 'Kambing', value: '4/6', icon: <GoatCircle /> },
]

const anthelminticCardList = [
  { title: 'Sapi', value: '4/10', icon: <CowCircle /> },
  { title: 'Domba', value: '4/8', icon: <SheepCircle /> },
  { title: 'Kambing', value: '4/6', icon: <GoatCircle /> },
]
