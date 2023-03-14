'use client'
import { Table } from '@/components/shared'
import { longDateFormatter } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import SelectTable from '../shared/SelectTable'

const options = [
  { name: '111', value: '111' },
  { name: '222', value: '222' },
  { name: '333', value: '333' },
  { name: '444', value: '444' },
]

interface ShedAnimalTableProps {
  data: any
}

const ShedAnimalTable: FC<ShedAnimalTableProps> = ({ data }) => {
  const [shedCode, setShedCode] = useState(options[0])
  const changeShedHandler = (value: any) => {
    setShedCode(value)
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
          value={data.getValue() ?? '111'}
          options={options}
          triggerBackground="bg-primary-4"
          small
        />
      ),
    },
  ]

  return <Table isLoading={false} data={data} columns={columns} fixedCol={2} />
}

export default ShedAnimalTable

{
  /* <Listbox
          options={options}
          value={shedCode}
          onChange={changeShedHandler}
          className="bg-primary-4 fill-white text-white"
          optionsClassname="w-14 bg-primary-4 text-white"
        /> */
}
