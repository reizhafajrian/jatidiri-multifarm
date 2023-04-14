import { Get } from '@/lib/api'
import useStore from '@/store/useStore'
import useSwr from 'swr'

const useDashboardData = () => {
  const { filterByDate: params } = useStore()

  const url = {
    sell: '/api/dashboard/sell/get?',
    purchase: '/api/dashboard/purchase/get?',
    cow: '/api/dashboard/cow/get?',
    sheep: '/api/dashboard/sheep/get?',
    goat: '/api/dashboard/goat/get?',

    soldAnimals: '/api/dashboard/animals/sold?',
    // events: '',
    income: '/api/dashboard/milk/income/get?',
    milkSales: '/api/dashboard/milk/get?',
    dataAnalytics: '/api/dashboard/animals/alive?',
    diedAnimals: '/api/dashboard/animals/died?',
    goatsData: '/api/dashboard/goat/type/get?status=alive&gender=false&',
  }

  const { data: sell } = useSwr(url.sell + params, Get)
  const { data: purchase } = useSwr(url.purchase + params, Get)
  const { data: cow } = useSwr(url.cow + params, Get)
  const { data: sheep } = useSwr(url.sheep + params, Get)
  const { data: goat } = useSwr(url.goat + params, Get)

  const { data: soldAnimals } = useSwr(url.soldAnimals, Get)
  // const { data: events } = useSwr(url.events, Get)
  const { data: income } = useSwr(url.income + params, Get)
  const { data: milkSales } = useSwr(url.milkSales, Get)
  const { data: dataAnalytics } = useSwr(url.dataAnalytics + params, Get)
  const { data: diedAnimals } = useSwr(url.diedAnimals + params, Get)
  const { data: goatsData } = useSwr(url.goatsData + params, Get)

  return {
    income,
    sell,
    purchase,
    cow,
    sheep,
    goat,
    soldAnimals,
    // events,
    milkSales,
    goatsData,
    diedAnimals,
    dataAnalytics,
  }
}

export default useDashboardData
