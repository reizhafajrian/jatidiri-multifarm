import { dateOptions } from '@/data/data'
import { SelectMenu } from '../shared'

export default function DashboardFilter() {
  return <SelectMenu title="Show" options={dateOptions} />
}
