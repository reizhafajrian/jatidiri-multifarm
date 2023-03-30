'use client'
import useDataList from '@/hooks/useDataList'
import { longDateFormatter } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import { Table } from '../shared'

interface ShedInfoTableProps {
  id: string
}

const ShedInfoTable: FC<ShedInfoTableProps> = ({ id }) => {
  const { data, loading } = useDataList(`/api/shed/data/get?shed_code=${id}`)

  const columns: ColumnDef<any, any>[] = [
    {
      header: 'Tgl Update Data',
      accessorKey: 'updated_at',
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : '-',
    },
    {
      header: 'Pakan',
      accessorKey: 'data_feed_type.feed_type',
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : '-',
    },
    {
      header: 'Tgl Pakan',
      accessorKey: 'data_feed_date',
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : '-',
    },
    {
      header: 'Vitamin',
      accessorKey: 'data_vitamin_type.vitamin_type',
      cell: (data) => data.getValue() ?? '-',
    },
    {
      header: 'Tgl Vitamin',
      accessorKey: 'data_vitamin_date',
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : '-',
    },
    {
      header: 'Vaksin',
      accessorKey: 'data_vaccine_type.vaccine_type',
      cell: (data) => data.getValue() ?? '-',
    },
    {
      header: 'Tgl Vaksin',
      accessorKey: 'data_vaccine_date',
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : '-',
    },
    {
      header: 'Obat Cacing',
      accessorKey: 'data_anthelmintic_type.anthelmintic_type',
      cell: (data) => data.getValue() ?? '-',
    },
    {
      header: 'Tgl Obat Cacing',
      accessorKey: 'data_anthelmintic_date',
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : '-',
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}

export default ShedInfoTable
