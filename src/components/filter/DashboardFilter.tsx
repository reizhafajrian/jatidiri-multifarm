import { SelectMenu } from '../shared'

const dateOptions = [
  { name: 'Today' },
  { name: 'This Week' },
  { name: 'This Month' },
  { name: 'This Year' },
]

export default function DashboardFilter() {
  return <SelectMenu title="Show" options={dateOptions} />
}
