'use client'
import { Button, Table } from '@/components/shared'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ShedTable({ data }: any) {
  return <Table data={data} columns={columns} fixedCol={2} />
}

export const columns = [
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
        <Link href={`${pathname}/${data.getValue()}`}>
          <Button className="rounded-[10px] px-3 py-1 capitalize">
            Detail
          </Button>
        </Link>
      )
    },
  },
]
