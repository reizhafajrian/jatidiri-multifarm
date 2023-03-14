'use client'
import { Table } from '@/components/shared'
import { longDateFormatter } from '@/lib/utils'
import { IShedDetail } from '@/store/shed'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'

interface ShedInfoTableProps {
  data: IShedDetail[]
}

const ShedInfoTable: FC<ShedInfoTableProps> = ({ data }) => {
  const columns: ColumnDef<any, any>[] = [
    {
      header: 'Tgl Update Data',
      accessorKey: 'updatedAt',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Pakan', accessorKey: 'feed_type' },
    {
      header: 'Tgl Pakan',
      accessorKey: 'feed_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Vitamin', accessorKey: 'vitamin_type' },
    {
      header: 'Tgl Vitamin',
      accessorKey: 'vitamin_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Vaksin', accessorKey: 'vaccine_type' },
    {
      header: 'Tgl Vaksin',
      accessorKey: 'vaccine_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Obat Cacing', accessorKey: 'anthelmintic_type' },
    {
      header: 'Tgl Obat Cacing',
      accessorKey: 'anthelmintic_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    //   {
    //     header: 'Range Usia',
    //     accessorKey: 'age_range',
    //   },
  ]

  return <Table isLoading={false} data={data} columns={columns} fixedCol={2} />
}

export default ShedInfoTable
