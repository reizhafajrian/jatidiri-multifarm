import CategoryContent from '@/components/layout/CategoryContent'
import CategoryHeader from '@/components/layout/CategoryHeader'
import { StoreInitializer } from '@/components/shared'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Category',
}

export default function CategoryPage() {
  const data = use(
    getData(cookies().get('token')?.value!)
  )

  return (
    <>
      <StoreInitializer
        data={{
          category: {
            // feedList: feed.data,
            feedInfo: data.find((d: any) => d.title === 'Feed')?.result,
            // vitaminList: vitamin.data,
            vitaminInfo: data.find((d: any) => d.title === 'Vitamin')?.result,
            // anthelminticList: anthelmintic.data,
            anthelminticInfo: data.find((d: any) => d.title === 'Anthelmintic')?.result,

            vaccineInfo: data.find((d: any) => d.title === 'Vaccine')?.result,
          },
        }}
      />
      <CategoryHeader />
      <CategoryContent />
    </>
  )
}
const getData = async (token: string) => {
  const res = await fetch(
    process.env.API_BASE_URL + `/category/detail`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  ).then((res) => res.json())

  return await res.data
}


const feed = {
  info: {
    total_type: 4,
    total_usage: 250,
    total_stock: 150,
  },
}

const vitamin = {
  info: {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  },
}

const anthelmintic = {
  info: {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  },
}
