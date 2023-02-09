'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Table from './Table'

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
        <Link
          href={`${pathname}/${data.getValue()}`}
          className="rounded-md bg-primary-4 py-1 px-2 text-white"
        >
          Detail
        </Link>
      )
    },
  },
]
