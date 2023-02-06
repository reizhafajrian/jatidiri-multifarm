import { columns } from '@/data/data'
import FilterTable from './FilterTable'
import Table from './Table'

export default function TabelPejantan({ data }: any) {
  return (
    <>
      <FilterTable />
      <Table data={data} columns={columns} />
    </>
  )
}
