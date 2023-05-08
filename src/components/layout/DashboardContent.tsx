'use client'
import * as C from '@/components/card'
import * as D from '@/components/diagram'
import * as I from '@/components/shared/Icons'
import useDashboardData from '@/hooks/useDashboardData'
import { FC } from 'react'

const DashboardContent: FC = () => {
  const data = useDashboardData()

  const info = [
    {
      data: {
        icon: <I.DashboardWallet />,
        title: 'total pendapatan',
        value: data.sell?.totalAllAnimals,
      },
      comparison: data.sellComp,
    },
    {
      data: {
        icon: <I.DashboardCart />,
        title: 'total pembelian',
        value: data.purchase?.totalAllAnimals,
      },
      comparison: data.purchaseComp,
    },
  ]

  const animal = [
    {
      icon: <I.DashboardCow />,
      animal_type: 'cow',
      totalAdult: data.cow?.data,
      totalCempek: undefined,
    },
    {
      icon: <I.DashboardSheep />,
      animal_type: 'sheep',
      totalAdult: data.sheep?.total.sheep,
      totalCempek: data.sheep?.total.cempek,
    },
    {
      icon: <I.DashboardGoat />,
      animal_type: 'goat',
      totalAdult: data.goat?.total.goat,
      totalCempek: data.goat?.total.cempek,
    },
  ]

  const diagram = [
    {
      title: 'ternak terjual',
      className: 'md:col-span-5',
      children: <D.SoldAnimalsDiagram data={data.soldAnimals} />,
    },
    {
      title: 'pendapatan event',
      className: 'md:col-span-4',
      children: <D.EventIncomeDiagram />,
    },
    {
      title: 'penjualan susu',
      className: 'md:col-span-3',
      children: (
        <D.MilkSalesDiagram data={data.milkSales} total={data.income} />
      ),
    },
    {
      title: 'data analytics',
      className: 'md:col-span-5',
      children: <D.DataAnalyticsDiagram data={data.dataAnalytics} />,
    },
    {
      title: 'hewan mati',
      className: 'md:col-span-4',
      children: <D.DeadAnimalsDiagram data={data.diedAnimals} />,
    },
    {
      title: 'total kambing menyusui',
      className: 'md:col-span-3',
      children: <D.GoatsDiagram data={data.goatsData} />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2 md:gap-7">
        {info?.map((item, idx) => (
          <C.DashboardInfoCard
            key={idx}
            data={item.data}
            comparison={item.comparison}
          />
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3 md:gap-7">
        {animal.map((item, idx) => (
          <C.DashboardAnimalInfoCard key={idx} data={item} />
        ))}
      </div>
      <div className="space-y-3 md:grid md:grid-cols-12 md:gap-6 md:space-y-0">
        {diagram.map(({ title, className, children }, idx) => (
          <C.DashboardDiagramCard key={idx} title={title} className={className}>
            {children}
          </C.DashboardDiagramCard>
        ))}
      </div>
    </div>
  )
}

export default DashboardContent
