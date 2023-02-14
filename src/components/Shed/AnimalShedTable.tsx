'use client'
import { longDateFormatter } from '@/utils/formatDate'
import Table from '../Table/Table'

export default function AnimalShedTable({ data }: any) {
  return <Table data={data} columns={columns} fixedCol={2} />
}

const columns = [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_at',
    cell: ({ value }: any) => longDateFormatter(value),
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
  {
    header: 'Pindah Kandang',
    cell: () => <div>dropdown</div>,
  },
]
