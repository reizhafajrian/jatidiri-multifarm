import { IDDiagramProps } from '@/data/interfaces'
import { Card } from '../shared'
import { DashboardInfo } from '../shared/Icons'

export default function DashboardDiagramCard(props: IDDiagramProps) {
  const { className, children, title } = props

  return (
    <Card className={className}>
      <div className="mb-4 flex items-center justify-between capitalize">
        <h3>{title}</h3>
        <DashboardInfo />
      </div>
      {children}
    </Card>
  )
}
