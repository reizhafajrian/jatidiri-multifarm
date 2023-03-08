'use client'
import { Listbox, Table } from '@/components/shared'
import { longDateFormatter } from '@/utils/formatDate'
import { FC, useState } from 'react'

const options = [
  { name: '111' },
  { name: '222' },
  { name: '333' },
  { name: '444' },
]

interface ShedAnimalTableProps {
  data: any
}

const ShedAnimalTable: FC<ShedAnimalTableProps> = ({ data }) => {
  const [shedCode, setShedCode] = useState(options[0])
  const changeShedHandler = (value: any) => {
    setShedCode(value)
  }

  const columns = [
    {
      header: 'Tgl Tiba',
      accessorKey: 'arrival_date',
      cell: (data: any) => longDateFormatter(new Date(data.getValue())),
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
          className="bg-primary-4 fill-white text-white"
          optionsClassname="w-14 bg-primary-4 text-white"
        />
      ),
    },
  ]

  return <Table data={data} columns={columns} fixedCol={2} />
}

export default ShedAnimalTable
