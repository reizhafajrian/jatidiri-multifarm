import CategoryContent from '@/components/layout/CategoryContent'
import CategoryHeader from '@/components/layout/CategoryHeader'
import { StoreInitializer } from '@/components/shared'

export const metadata = {
  title: 'Jatidiri Multifarm | Category',
}

export default function CategoryPage() {
  return (
    <>
      <StoreInitializer
        data={{
          category: {
            feedList: feed.data,
            feedInfo: feed.info,
            vitaminList: vitamin.data,
            vitaminInfo: vitamin.info,
            anthelminticList: anthelmintic.data,
            anthelminticInfo: anthelmintic.info,
          },
        }}
      />
      <CategoryHeader />
      <CategoryContent />
    </>
  )
}

const feed = {
  info: {
    total_type: 4,
    total_usage: 250,
    total_stock: 150,
  },
  data: [
    {
      feed_type: 'example',
      feed_stock: 50,
      feed_price: 10000,
    },
  ],
}

const vitamin = {
  info: {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  },
  data: [
    {
      vitamin_type: 'example',
      vitamin_stock: 50,
      vitamin_price: 5000,
    },
  ],
}

const anthelmintic = {
  info: {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  },
  data: [
    {
      anthelmintic_type: 'example',
      anthelmintic_stock: 50,
      anthelmintic_price: 5000,
    },
  ],
}
