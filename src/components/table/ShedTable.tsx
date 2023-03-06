'use client'
import { Button, Table } from '@/components/shared'
import { useShedList } from '@/hooks/useShed'
import { usePathname } from 'next/navigation'

export default function ShedTable() {
  const { data, loading, error } = useShedList()

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>

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
        <Button
          className="w-fit rounded-[10px] px-3 py-1 capitalize"
          href={`${pathname}/${data.getValue()}`}
        >
          Detail
        </Button>
      )
    },
  },
]
