import * as C from '@/components/card'
import * as D from '@/components/diagram'
import * as I from '@/components/shared/Icons'

import DashboardHeader from '@/components/layout/DashboardHeader'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Dashboard',
}

export default function HomePage() {
  const res = use(getData())

  return (
    <>
      <DashboardHeader />
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-7">
          {res.info.map((item, idx) => (
            <C.DashboardInfoCard key={idx} data={item} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-7">
          {res.animal.map((item, idx) => (
            <C.DashboardAnimalInfoCard
              key={idx}
              data={{ ...item, totalAdult: 100, totalCempek: 80 }}
            />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-6">
          {res.diagram.map(({ title, className, children }, idx) => (
            <C.DashboardDiagramCard
              key={idx}
              title={title}
              className={className}
            >
              {children}
            </C.DashboardDiagramCard>
          ))}
        </div>
      </div>
    </>
  )
}

const getData = async (date?: Date) => {
  //  await Get()
  const info = [
    {
      icon: <I.DashboardWallet />,
      title: 'total pendapatan',
      value: '20122300',
      percentage: '5.2',
    },
    {
      icon: <I.DashboardCart />,
      title: 'total pembelian',
      value: '18122300',
      percentage: '2.2',
    },
  ]

  const animal = [
    { icon: <I.DashboardCow />, animal_type: 'cow' },
    { icon: <I.DashboardSheep />, animal_type: 'sheep' },
    { icon: <I.DashboardGoat />, animal_type: 'goat' },
  ]

  const diagram = [
    {
      title: 'ternak terjual',
      className: 'col-span-5',
      children: <D.SoldAnimalsDiagram />,
    },
    {
      title: 'pendapatan event',
      className: 'col-span-4',
      children: <D.EventIncomeDiagram />,
    },
    {
      title: 'penjualan susu',
      className: 'col-span-3',
      children: <D.MilkSalesDiagram />,
    },
    {
      title: 'data analytics',
      className: 'col-span-5',
      children: <D.DataAnalyticsDiagram />,
    },
    {
      title: 'hewan mati',
      className: 'col-span-4',
      children: <D.DeadAnimalsDiagram />,
    },
    {
      title: 'total kambing menyusui',
      className: 'col-span-3',
      children: <D.GoatsDiagram />,
    },
  ]

  return {
    info,
    animal,
    diagram,
  }
}
