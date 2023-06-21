import useSwr from "swr"

import { Api } from "@/lib/api"
import useStore from "@/store/useStore"
import { Icons as I } from "@/components/ui/Icons"
import * as D from "@/app/(main)/dashboard/diagram"

const useDashboardData = () => {
  const { filterByDate: params } = useStore()

  const base = "/api/dashboard"

  const url = {
    sell: base + "/sell/get?",
    sellComparison: base + "/sell/comparison/get?",
    purchase: base + "/purchase/get?",
    purchaseComparison: base + "/purchase/comparison/get?",

    cow: base + "/cow/get?",
    sheep: base + "/sheep/get?",
    goat: base + "/goat/get?",

    // events: '',
    soldAnimals: base + "/animals/sold?",
    income: base + "/milk/income/get?",
    milkSales: base + "/milk/get?",
    dataAnalytics: base + "/animals/alive?",
    diedAnimals: base + "/animals/died?",
    goatsData: base + "/goat/type/get?status=alive&gender=false&",
  }

  const { data: sell } = useSwr(url.sell + params, Api.get)
  const { data: sellComp } = useSwr(url.sellComparison + params, Api.get)
  const { data: purchase } = useSwr(url.purchase + params, Api.get)
  const { data: purchaseComp } = useSwr(
    url.purchaseComparison + params,
    Api.get
  )
  const { data: cow } = useSwr(url.cow + params, Api.get)
  const { data: sheep } = useSwr(url.sheep + params, Api.get)
  const { data: goat } = useSwr(url.goat + params, Api.get)

  // const { data: events } = useSwr(url.events, Api.get)
  const { data: soldAnimals } = useSwr(url.soldAnimals, Api.get)
  const { data: income } = useSwr(url.income + params, Api.get)
  const { data: milkSales } = useSwr(url.milkSales, Api.get)
  const { data: dataAnalytics } = useSwr(url.dataAnalytics + params, Api.get)
  const { data: diedAnimals } = useSwr(url.diedAnimals + params, Api.get)
  const { data: goatsData } = useSwr(url.goatsData + params, Api.get)

  const info = [
    {
      data: {
        icon: <I.dashboardWallet />,
        title: "total pendapatan",
        value: sell?.totalAllAnimals,
      },
      comparison: sellComp,
    },
    {
      data: {
        icon: <I.dashboardCart />,
        title: "total pembelian",
        value: purchase?.totalAllAnimals,
      },
      comparison: purchaseComp,
    },
  ]

  const animal = [
    {
      icon: <I.dashboardCow />,
      animal_type: "cow",
      totalAdult: cow?.data,
      totalCempek: undefined,
    },
    {
      icon: <I.dashboardSheep />,
      animal_type: "sheep",
      totalAdult: sheep?.total.sheep,
      totalCempek: sheep?.total.cempek,
    },
    {
      icon: <I.dashboardGoat />,
      animal_type: "goat",
      totalAdult: goat?.total.goat,
      totalCempek: goat?.total.cempek,
    },
  ]

  const diagram = [
    {
      title: "ternak terjual",
      className: "md:col-span-5",
      children: <D.SoldAnimalsDiagram data={soldAnimals} />,
    },
    {
      title: "pendapatan event",
      className: "md:col-span-4",
      children: <D.EventIncomeDiagram />,
    },
    {
      title: "penjualan susu",
      className: "md:col-span-3",
      children: <D.MilkSalesDiagram data={milkSales} total={income} />,
    },
    {
      title: "data analytics",
      className: "md:col-span-5",
      children: <D.DataAnalyticsDiagram data={dataAnalytics} />,
    },
    {
      title: "hewan mati",
      className: "md:col-span-4",
      children: <D.DeadAnimalsDiagram data={diedAnimals} />,
    },
    {
      title: "total kambing menyusui",
      className: "md:col-span-3",
      children: <D.GoatsDiagram data={goatsData} />,
    },
  ]

  return {
    info,
    animal,
    diagram,
  }
}

export default useDashboardData
