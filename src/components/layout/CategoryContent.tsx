'use client'
import {
  CalcCircle,
  CowCircle,
  FeedCircle,
  GoatCircle,
  Loader2,
  SheepCircle,
} from '@/components/shared/Icons'
import useCategoryDetail from '@/hooks/useCategoryDetail'
import { categoryTitle } from '@/lib/utils'
import AddCategoryForm from '../form/AddCategoryForm'
import CategoryCardList from '../list/CategoryCardList'
import CategoryTable from '../table/CategoryTable'

export default function CategoryContent() {
  const { data, loading } = useCategoryDetail()

  if (loading)
    return (
      <div className="flex h-20 items-center justify-center">
        <Loader2 className="animate-spin stroke-primary-4" />
      </div>
    )

  const categories = setCategories(data)

  return (
    <>
      <div className="space-y-10">
        {categories.map(({ cardList, category }, idx) => (
          <div key={idx}>
            <div>
              <h1 className="mb-8 text-2xl font-semibold text-primary-4">
                {categoryTitle(category)}
              </h1>
              <div className="mb-3 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
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
        value: c.anthelminticInfo?.find((v: any) => v.animal === 'sheep')
          ?.total,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c.anthelminticInfo?.find((v: any) => v.animal === 'goat')?.total,
        icon: <GoatCircle />,
      },
    ],
  },
]
