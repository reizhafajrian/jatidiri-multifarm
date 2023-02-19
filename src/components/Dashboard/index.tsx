import Button from '../Button'
import { CloudArrowDown } from '../Icons'
import CardAnimalInfoList from './CardAnimalInfoList'
import CardDiagramList from './CardDiagramList'
import CardInfoList from './CardInfoList'
import FilterReport from './FilterReport'

export default function Dashboard() {
  return (
    <main className="space-y-6">
      <div className="mb-4 flex items-center justify-between">
        <FilterReport />
        <Button
          intent="secondary"
          className="flex justify-center gap-1 rounded-xl py-1"
        >
          <CloudArrowDown /> download
        </Button>
      </div>
      <CardInfoList />
      <CardAnimalInfoList />
      <CardDiagramList />
    </main>
  )
}
