'use client'
import { Table } from '@/components/shared'
import { useShedStore } from '@/store/shed'
import { longDateFormatter, shortDateFormatter } from '@/utils/formatDate'

export default function ShedInfoTable() {
  const { shedDetailList } = useShedStore()

  return <Table data={shedDetailList} columns={columns} fixedCol={2} />
}

const columns = [
  {
    header: 'Tgl Update Data',
    accessorKey: 'updatedAt',
    cell: ({ value }: any) => longDateFormatter(value),
  },
  {
    header: 'Pakan',
    accessorKey: 'feed_type',
    cell: () => 'Rumput',
  },
  {
    header: 'Vitamin',
    accessorKey: 'vitamin_type',
  },
  {
    header: 'Tgl Vitamin',
    accessorKey: 'vitamin_date',
    cell: ({ value }: any) => shortDateFormatter(value),
  },
  {
    header: 'Vaksin',
    accessorKey: 'vaccine_type',
  },
  {
    header: 'Tgl Vaksin',
    accessorKey: 'vaccine_date',
    cell: ({ value }: any) => shortDateFormatter(value),
  },
  {
    header: 'Obat Cacing',
    accessorKey: 'anthelmintic_type',
  },
  {
    header: 'Tgl Obat Cacing',
    accessorKey: 'anthelmintic_date',
    cell: ({ value }: any) => shortDateFormatter(value),
  },
  //   {
  //     header: 'Range Usia',
  //     accessorKey: 'age_range',
  //   },
]
