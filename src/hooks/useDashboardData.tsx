import { Get } from '@/lib/api'
import useStore from '@/store/useStore'
import useSwr from 'swr'

const useDashboardData = () => {
  const { dashboardFilterParams: params } = useStore()

  const url = {
    income: '/api/dashboard/income/get?',
    // buy: '',
    cow: '/api/dashboard/cow/get?',
    sheep: '/api/dashboard/sheep/get?',
    goat: '/api/dashboard/goat/get?',

    // soldAnimals: '',
    // events: '',
    milkSales: '/api/dashboard/milk/get',
    dataAnalytics: '/api/dashboard/animals/alive?status=active&',
    diedAnimals: '/api/dashboard/animals/died?status=died&',
    goatsData: '/api/dashboard/goat/type/get?status=alive&gender=false&',
  }

  const { data: income } = useSwr(url.income + params, Get)
  // const { data: buy } = useSwr(url.buy + params, Get)
  const { data: cow } = useSwr(url.cow + params, Get)
  const { data: sheep } = useSwr(url.sheep + params, Get)
  const { data: goat } = useSwr(url.goat + params, Get)

  // const { data: soldAnimals } = useSwr(url.soldAnimals, Get)
  // const { data: events } = useSwr(url.events, Get)
  const { data: milkSales } = useSwr(url.milkSales, Get)
  const { data: dataAnalytics } = useSwr(url.dataAnalytics + params, Get)
  const { data: diedAnimals } = useSwr(url.diedAnimals + params, Get)
  const { data: goatsData } = useSwr(url.goatsData + params, Get)

  return {
    income,
    // buy,
    cow,
    sheep,
    goat,
    // soldAnimals,
    // events,
    milkSales,
    goatsData,
    diedAnimals,
    dataAnalytics,
  }
}

export default useDashboardData
