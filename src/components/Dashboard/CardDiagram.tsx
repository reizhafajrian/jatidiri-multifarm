import Card from '../Card'
import { DashboardInfo } from '../Icons'

interface IProps {
  className?: string
  title: string
  children?: React.ReactNode
}

export default function CardDiagram(props: IProps) {
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
