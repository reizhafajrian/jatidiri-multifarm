'use client'
import useDataList from '@/hooks/useDataList'
import { longDateFormatter } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import { Table } from '../shared'

interface ShedInfoTableProps {
  shed_code: string
}

const ShedInfoTable: FC<ShedInfoTableProps> = ({ shed_code }) => {
  const { data, loading } = useDataList(`shed/data/get?shed_code=${shed_code}`)

  const columns: ColumnDef<any, any>[] = [
    {
      header: 'Tgl Update Data',
      accessorKey: 'updated_at',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Pakan', accessorKey: 'data_feed_type' },
    {
      header: 'Tgl Pakan',
      accessorKey: 'data_feed_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Vitamin', accessorKey: 'data_vitamin_type' },
    {
      header: 'Tgl Vitamin',
      accessorKey: 'data_vitamin_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Vaksin', accessorKey: 'data_vaccine_type' },
    {
      header: 'Tgl Vaksin',
      accessorKey: 'data_vaccine_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'Obat Cacing', accessorKey: 'data_anthelmintic_type' },
    {
      header: 'Tgl Obat Cacing',
      accessorKey: 'data_anthelmintic_date',
      cell: (data) => longDateFormatter(new Date(data.getValue())),
    },
    //   {
    //     header: 'Range Usia',
    //     accessorKey: 'age_range',
    //   },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}

export default ShedInfoTable
