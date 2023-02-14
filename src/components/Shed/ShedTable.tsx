'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../Button'
import Table from '../Table/Table'

export default function ShedTable({ data }: any) {
  return <Table data={data} columns={columns} fixedCol={2} />
}

export const columns = [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'No Kandang',
    accessorKey: 'shed_code',
  },
  {
    header: 'Berat',
    accessorKey: 'animal_weight',
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
  {
    header: 'Aksi',
    accessorKey: 'shed_code',
    cell: function Func(data: any) {
      const pathname = usePathname()
      return (
        <Button className="w-fit px-3 py-1 capitalize">
          <Link href={`${pathname}/${data.getValue()}`}>Detail</Link>
        </Button>
      )
    },
  },
]
