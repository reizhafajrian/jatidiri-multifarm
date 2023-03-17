'use client'
import { Table } from '@/components/shared'
import useDataList from '@/hooks/useDataList'
import { Put } from '@/lib/api'
import { longDateFormatter } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import SelectTable from '../shared/SelectTable'

interface ShedAnimalTableProps {
  id: string
  shedCodeOptions: any
  type: string
}

const ShedAnimalTable: FC<ShedAnimalTableProps> = ({ id, shedCodeOptions, type }) => {
  const isCempek = type === 'cempek'
  const gender = type === 'male' ? 'true' : 'false'

  const url = isCempek ? `/shed/get/detail/${id}?cempek=true` : `/shed/get/detail/${id}?gender=${gender}`;

  const { data, loading, mutate } = useDataList(`/api/${url}`)


  const changeShedHandler = (value: string, eartag_code?: string) => {
    Put(
      {
        url: `/api/shed/add-animal/${value}`,
        body: {
          ear_tag: eartag_code,
        }
      }
    ).then(res => {
      if (res.status === 200) {
        mutate()
      }
    }).catch(e => {
      console.log(e)
    })
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
          value={data.getValue()}
          onChange={changeShedHandler}
          animalEarTag={data.row.original.eartag_code}
          options={shedCodeOptions}
          triggerBackground="bg-primary-4"
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
