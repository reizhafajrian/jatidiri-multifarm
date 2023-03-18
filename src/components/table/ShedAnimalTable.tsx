'use client'
import { Table } from '@/components/shared'
import useDataList from '@/hooks/useDataList'
import { longDateFormatter } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import SelectTable from '../shared/SelectTable'

interface ShedAnimalTableProps {
  id: string
  shedCodeOptions: any
  type: string
}

const ShedAnimalTable: FC<ShedAnimalTableProps> = ({
  id,
  shedCodeOptions,
  type,
}) => {
  const queries = []
  const isCempek = type === 'cempek'
  !isCempek && queries.push(type === 'male' ? 'gender=true' : 'gender=false')

  const { data, loading, mutate } = useDataList(
    `/api/shed/get/detail/${id}`,
    queries
  )

  const changeShedHandler = (value: string) => {
    console.log(value)
  }

  console.log(data)

  const columns: ColumnDef<any, any>[] = [
    {
      header: 'Tgl Tiba',
      accessorKey: 'arrival_date',
      cell: (data: any) => longDateFormatter(new Date(data.getValue())),
    },
    { header: 'No Eartag', accessorKey: 'eartag_code' },
    { header: 'Keterangan', accessorKey: 'description' },
    {
      header: 'Pindah Kandang',
      accessorKey: 'shed_code',
      cell: (data) => (
        <SelectTable
          value={id}
          onChange={changeShedHandler}
          options={shedCodeOptions}
          triggerClassName="bg-primary-4 text-white font-semibold"
        />
      ),
    },
  ]

  return (
    <Table
      isLoading={loading}
      data={data?.animal_data ?? []}
      columns={columns}
      fixedCol={2}
    />
  )
}

export default ShedAnimalTable
