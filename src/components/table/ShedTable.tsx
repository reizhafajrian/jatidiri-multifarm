'use client'
import { Button, Table } from '@/components/shared'
import useDataList from '@/hooks/useDataList'
import useStore from '@/store/useStore'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

interface ShedTableProps {
  animal?: 'goat' | 'sheep' | 'cow'
}

const ShedTable: FC<ShedTableProps> = ({ animal }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { searchResults, searchKeyword } = useStore()

  const { data, loading } = useDataList('/api/shed/get', [
    `animal_type=${animal}`,
  ])



  const columns = [
    { header: 'No Kandang', accessorKey: 'code' },
    //react table if average_weight is null, it will return 0
    {
      header: 'Berat',
      accessorKey: 'average_weight',
      cell: (data: any) =>
        `${data.getValue() ? data.getValue() + ' Kg' : '0 Kg'}`,
    },
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
    <Table isLoading={loading} data={searchKeyword.length > 0 ? searchResults : data} columns={columns} fixedCol={2} />
  )
}

export default ShedTable
