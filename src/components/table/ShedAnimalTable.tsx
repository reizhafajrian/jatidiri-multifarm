'use client'
import { Table } from '@/components/shared'
import useDataList from '@/hooks/useDataList'
import { longDateFormatter } from '@/lib/utils'
import useStore from '@/store/useStore'
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
  const changeShedAnimal = useStore((state) => state.changeShedAnimal)
  const isCempek = type === 'cempek'
  const gender = type === 'male' ? 'true' : 'false'

  const url = isCempek
    ? `/shed/get/detail/${id}?cempek=true`
    : `/shed/get/detail/${id}?gender=${gender}`

  const { data, loading, mutate } = useDataList(`/api/${url}`)

  const changeShedHandler = async (shed_code: string, eartag_code?: string) => {
    try {
      await changeShedAnimal(shed_code, eartag_code)
      mutate()
    } catch (error) {


    }
  }

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
          animalEarTag={data.row.original.eartag_code}
          options={shedCodeOptions}
          triggerClassName="bg-primary-4 text-white"
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
