import CategoryContent from '@/components/layout/CategoryContent'
import CategoryHeader from '@/components/layout/CategoryHeader'
import { StoreInitializer } from '@/components/shared'
import axios from 'axios'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Category',
}

export default function CategoryPage() {
  const category = use(getData(cookies().get('token')?.value!))

  return (
    <>
      <StoreInitializer data={{ category }} />
      <CategoryHeader />
      <CategoryContent />
    </>
  )
}

const getData = async (token: string) => {
  const baseUrl = process.env.API_BASE_URL
  const Authorization = `bearer ${token}`
  const headers = { headers: { Authorization } }

  const get = async (cat: string) => {
    const res = await axios.get(baseUrl + `/${cat}/get`, headers)
    return res.data.data
  }

  let feed = await get('feed')
  // const vitamin = await get('vitamin')
  // const vaccine = await get('vaccine')
  // const anthelmintic = await get('anthelmintic')

  feed = feed.filter((item: any) => item.stocks !== undefined)

  const feedInfo = {
    total_type: feed.length,
    total_usage: feed.reduce((acc: number, cur: any) => acc + cur.used, 0),
    total_stock: feed.reduce((acc: number, cur: any) => acc + cur.stocks, 0),
  }

  const vitaminInfo = {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  }

  const vaccineInfo = {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  }

  const anthelminticInfo = {
    cow_value: '4/10',
    sheep_value: '4/8',
    goat_value: '4/6',
  }

  return {
    feedInfo,
    vitaminInfo,
    vaccineInfo,
    anthelminticInfo,
  }
}
