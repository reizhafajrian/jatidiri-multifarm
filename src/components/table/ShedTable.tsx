'use client'
import { Button, Table } from '@/components/shared'
import { useShedStore } from '@/store/shed'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ShedTable() {
  const { shedList } = useShedStore()
  return <Table data={shedList} columns={columns} fixedCol={2} />
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
        <Button className="rounded-[10px] capitalize">
          <Link href={`${pathname}/${data.getValue()}`} className="px-3 py-1">
            Detail
          </Link>
        </Button>
      )
    },
  },
]
