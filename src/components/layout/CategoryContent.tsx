'use client'
import {
  CalcCircle,
  CowCircle,
  FeedCircle,
  GoatCircle,
  SheepCircle,
} from '@/components/shared/Icons'
import { useCategoryStore } from '@/store/category'
import { useState } from 'react'
import AddCategoryForm from '../form/AddCategoryForm'
import CategoryCardList from '../list/CategoryCardList'
import { Button } from '../shared'
import CategoryTable from '../table/CategoryTable'

export default function CategoryContent() {
  const [cat, setCat] = useState('')
  const [isOpen, closeModal] = useState(false)
  const c = useCategoryStore()
  const categories = setCategories(c)

  return (
    <>
      <AddCategoryForm category={cat} isOpen={isOpen} closeModal={closeModal} />
      <div className="space-y-10">
        {categories.map(({ cardList, category, data }, idx) => (
          <div key={idx}>
            <div>
              <h1 className="mb-8 text-2xl font-semibold text-primary-4">
                {title(category)}
              </h1>
              <div className="mb-6 flex items-end justify-between">
                <CategoryCardList cardList={cardList} />
                <Button
                  onClick={() => {
                    setCat(category)
                    closeModal(true)
                  }}
                >
                  Tambah {title(category)}
                </Button>
              </div>
            </div>
            <CategoryTable category={category} data={data} />
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
        value: c.feedInfo.total_type,
        label: 'Jenis',
        icon: <FeedCircle />,
      },
      {
        title: 'Total Penggunaan',
        value: c.feedInfo.total_usage,
        label: 'Kilogram',
        icon: <CalcCircle />,
      },
      {
        title: 'Total Stock',
        value: c.feedInfo.total_stock,
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
        value: c.vitaminInfo.cow_value,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c.vitaminInfo.sheep_value,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c.vitaminInfo.goat_value,
        icon: <GoatCircle />,
      },
    ],
    data: c.vitaminList,
  },
  {
    category: 'anthelmintic',
    cardList: [
      {
        title: 'Sapi',
        value: c.anthelminticInfo.cow_value,
        icon: <CowCircle />,
      },
      {
        title: 'Domba',
        value: c.anthelminticInfo.sheep_value,
        icon: <SheepCircle />,
      },
      {
        title: 'Kambing',
        value: c.anthelminticInfo.goat_value,
        icon: <GoatCircle />,
      },
    ],
    data: c.anthelminticList,
  },
]
