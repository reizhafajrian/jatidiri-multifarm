'use client'
import { Button, Table } from '@/components/shared'
import useDataList from '@/hooks/useDataList'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

interface ShedTableProps {
  animal?: 'goat' | 'sheep' | 'cow'
}

const ShedTable: FC<ShedTableProps> = ({ animal }) => {
  const router = useRouter()
  const pathname = usePathname()

  const { data, loading } = useDataList('/api/shed/get', [
    `animal_type=${animal}`,
  ])

  const columns = [
    { header: 'No Kandang', accessorKey: 'shed_code' },
    { header: 'Berat', accessorKey: 'animal_weight' },
    { header: 'Keterangan', accessorKey: 'description' },
    {
      header: 'Aksi',
      accessorKey: '_id',
      cell: (data: any) => (
        <Button
          size="sm"
          className="text-xs capitalize"
          onClick={() => router.replace(`${pathname}/${data.getValue()}`)}
        >
          Detail
        </Button>
      ),
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}

export default ShedTable
