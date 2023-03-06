import DashboardDiagramCard from '../card/DashboardDiagramCard'
import DataAnalyticsDiagram from '../diagram/DataAnalyticsDiagram'
import DeadAnimalsDiagram from '../diagram/DeadAnimalsDiagram'
import EventIncomeDiagram from '../diagram/EventIncomeDiagram'
import GoatsDiagram from '../diagram/GoatsDiagram'
import MilkSalesDiagram from '../diagram/MilkSalesDiagram'
import SoldAnimalsDiagram from '../diagram/SoldAnimalsDiagram'

export default function DashboardDiagramList() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {dataDiagram.map(({ title, className, children }, idx) => (
        <DashboardDiagramCard key={idx} title={title} className={className}>
          {children}
        </DashboardDiagramCard>
      ))}
    </div>
  )
}

const dataDiagram = [
  {
    title: 'ternak terjual',
    className: 'col-span-5',
    children: <SoldAnimalsDiagram />,
  },
  {
    title: 'pendapatan event',
    className: 'col-span-4',
    children: <EventIncomeDiagram />,
  },
  {
    title: 'penjualan susu',
    className: 'col-span-3',
    children: <MilkSalesDiagram />,
  },
  {
    title: 'data analytics',
    className: 'col-span-5',
    children: <DataAnalyticsDiagram />,
  },
  {
    title: 'hewan mati',
    className: 'col-span-4',
    children: <DeadAnimalsDiagram />,
  },
  {
    title: 'total kambing menyusui',
    className: 'col-span-3',
    children: <GoatsDiagram />,
  },
]
