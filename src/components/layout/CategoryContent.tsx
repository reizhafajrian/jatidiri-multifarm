'use client'
import {
  CalcCircle,
  CowCircle,
  FeedCircle,
  GoatCircle,
  SheepCircle,
} from '@/components/shared/Icons'
import { categoryTitle } from '@/lib/utils'
import useStore from '@/store/useStore'
import AddCategoryForm from '../form/AddCategoryForm'
import CategoryCardList from '../list/CategoryCardList'
import CategoryTable from '../table/CategoryTable'

export default function CategoryContent() {
  const { feedInfo, vitaminInfo, vaccineInfo, anthelminticInfo } = useStore()
  const c = { feedInfo, vitaminInfo, vaccineInfo, anthelminticInfo }
  const categories = setCategories(c)

  return (
    <>
      <div className="space-y-10">
        {categories.map(({ cardList, category }, idx) => (
          <div key={idx}>
            <div>
              <h1 className="mb-8 text-2xl font-semibold text-primary-4">
                {categoryTitle(category)}
              </h1>
              <div className="mb-6 flex items-end justify-between">
                <CategoryCardList cardList={cardList} />
                <AddCategoryForm category={category} />
              </div>
            </div>
            <CategoryTable category={category} />
          </div>
        ))}
      </div>
    </>
  )
}

const setCategories = (c: any) => [
  {
    category: 'feed',
    cardList: [
      {
        title: 'Jenis Pakan',
        value: c?.feedInfo?.total_type,
        label: 'Jenis',
        icon: <FeedCircle />,
      },
      {
        title: 'Total Penggunaan',
        value: c?.feedInfo?.total_usage,
        label: 'Kilogram',
        icon: <CalcCircle />,
      },
      {
        title: 'Total Stock',
        value: c?.feedInfo?.total_stock,
        label: 'Kilogram',
        icon: <CalcCircle />,
      },
    ],
  },
  {
    category: 'vitamin',
    cardList: [
      {
        title: 'Sapi',
        value: c?.vitaminInfo?.cow_value,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c?.vitaminInfo?.sheep_value,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c?.vitaminInfo?.goat_value,
        icon: <GoatCircle />,
      },
    ],
  },
  {
    category: 'vaccine',
    cardList: [
      {
        title: 'Sapi',
        value: c?.vaccineInfo?.cow_value,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c?.vaccineInfo?.sheep_value,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c?.vaccineInfo?.goat_value,
        icon: <GoatCircle />,
      },
    ],
  },
  {
    category: 'anthelmintic',
    cardList: [
      {
        title: 'Sapi',
        value: c?.anthelminticInfo?.cow_value,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c?.anthelminticInfo?.sheep_value,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c?.anthelminticInfo?.goat_value,
        icon: <GoatCircle />,
      },
    ],
  },
]
