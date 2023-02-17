import CardDiagram from './CardDiagram'
import DataAnalyticsDiagram from './DataAnalyticsDiagram'
import DeadAnimalsDiagram from './DeadAnimalsDiagram'
import EventIncomeDiagram from './EventIncomeDiagram'
import GoatsDiagram from './GoatsDiagram'
import MilkSalesDiagram from './MilkSalesDiagram'
import SoldAnimalsDiagram from './SoldAnimalsDiagram'

export default function CardDiagramList() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {dataDiagram.map(({ title, className, children }, idx) => (
        <CardDiagram key={idx} title={title} className={className}>
          {children}
        </CardDiagram>
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
