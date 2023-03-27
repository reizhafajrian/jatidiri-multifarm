'use client'
import {
  CalcCircle,
  CowCircle,
  FeedCircle,
  GoatCircle,
  SheepCircle
} from '@/components/shared/Icons'
import { useCategoryStore } from '@/store/category'
import AddCategoryForm from '../form/AddCategoryForm'
import CategoryCardList from '../list/CategoryCardList'
import CategoryTable from '../table/CategoryTable'

export default function CategoryContent() {
  const c = useCategoryStore()
  const categories = setCategories(c)
  console.log(categories[0].cardList, 'categories')

  return (
    <>
      <div className="space-y-10">
        {categories.map(({ cardList, category, data }, idx) => (
          <div key={idx}>
            <div>
              <h1 className="mb-8 text-2xl font-semibold text-primary-4">
                {title(category)}
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

const title = (category: string) =>
  category === 'feed'
    ? 'Pakan'
    : category === 'vitamin'
      ? 'Vitamin'
      : category === 'vaccine'
        ? 'Vaksin'
        : 'Obat Cacing'

const setCategories = (c: any) => [
  {
    category: 'feed',
    cardList: [
      {
        title: 'Jenis Pakan',
        value: c.feedInfo?.feed_type,
        label: 'Jenis',
        icon: <FeedCircle />,
      },
      {
        title: 'Total Penggunaan',
        value: c.feedInfo?.used,
        label: 'Kilogram',
        icon: <CalcCircle />,
      },
      {
        title: 'Total Stock',
        value: c.feedInfo?.total_stocks,
        label: 'Kilogram',
        icon: <CalcCircle />,
      },
    ],
    data: c.feedList,
  },
  {
    category: 'vitamin',
    cardList: [
      {
        title: 'Sapi',
        value: c.vitaminInfo?.find((v: any) => v.animal === 'cow')?.total,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c.vitaminInfo?.find((v: any) => v.animal === 'sheep')?.total,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c.vitaminInfo?.find((v: any) => v.animal === 'goat')?.total,
        icon: <GoatCircle />,
      },
    ],
    data: c.vitaminList,
  },
  {
    category: 'vaccine',
    cardList: [
      {
        title: 'Sapi',
        value: c.vaccineInfo?.find((v: any) => v.animal === 'cow')?.total,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c.vaccineInfo?.find((v: any) => v.animal === 'sheep')?.total,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c.vaccineInfo?.find((v: any) => v.animal === 'goat')?.total,
        icon: <GoatCircle />,
      },
    ],
    data: c.vaccineList,
  },
  {
    category: 'anthelmintic',
    cardList: [
      {
        title: 'Sapi',
        value: c.anthelminticInfo?.find((v: any) => v.animal === 'cow')?.total,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c.anthelminticInfo?.find((v: any) => v.animal === 'sheep')?.total,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c.anthelminticInfo?.find((v: any) => v.animal === 'goat')?.total,
        icon: <GoatCircle />,
      },
    ],
    data: c.anthelminticList,
  },
]
