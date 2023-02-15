'use client'
import { longDateFormatter } from '@/utils/formatDate'
import { useState } from 'react'
import Listbox from '../Listbox'
import Table from '../Table/Table'

export default function AnimalShedTable({ data }: any) {
  const [shedCode, setShedCode] = useState(options[0])

  const changeShedHandler = (value: any) => {
    setShedCode(value)
  }

  return (
    <Table
      data={data}
      columns={columns(shedCode, changeShedHandler)}
      fixedCol={2}
    />
  )
}

const options = [
  { name: '111' },
  { name: '222' },
  { name: '333' },
  { name: '444' },
]

const columns = (shedCode: any, changeShedHandler: any) => [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_at',
    cell: ({ value }: any) => longDateFormatter(value),
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
  {
    header: 'Pindah Kandang',
    accessorKey: 'eartag_code',
    cell: (data: any) => (
      <Listbox
        options={options}
        value={shedCode}
        onChange={changeShedHandler}
        className="w-fit bg-primary-4 fill-white text-white"
        optionsClassname="w-16 bg-primary-4 text-white"
      />
    ),
  },
]
