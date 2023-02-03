import DashboardInfo from '@/assets/icons/dashboard-info.svg'
import Card from '../Card'

interface IProps {
  className: string
  title: string
  description?: string
  children: React.ReactNode
}

export default function CardDiagram(props: IProps) {
  const { className, children, title, description } = props

  return (
    <Card className={className}>
      <div className="flex items-center justify-between">
        <h3 className="mb-2 capitalize">{title}</h3>
        <DashboardInfo />
      </div>
      <div>{children}</div>
    </Card>
  )
}
