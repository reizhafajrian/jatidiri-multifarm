'use client'
import { Button, Table } from '@/components/shared'
import { IShed } from '@/store/shed'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

interface ShedTableProps {
  data: IShed[]
}

const ShedTable: FC<ShedTableProps> = ({ data }) => {
  const router = useRouter()
  const pathname = usePathname()

  const columns = [
    { header: 'No Kandang', accessorKey: 'shed_code' },
    { header: 'Berat', accessorKey: 'animal_weight' },
    { header: 'Keterangan', accessorKey: 'description' },
    {
      header: 'Aksi',
      accessorKey: 'shed_code',
      cell: (data: any) => (
        <Button
          size="sm"
          className="w-fit rounded-[10px] px-3 py-1 capitalize"
          onClick={() => router.replace(`${pathname}/${data.getValue()}`)}
        >
          Detail
        </Button>
      ),
    },
  ]

  return <Table isLoading={false} data={data} columns={columns} fixedCol={2} />
}

export default ShedTable
