'use client'
import { Listbox, Table } from '@/components/shared'
import { useShedAnimalList } from '@/hooks/useShed'
import { longDateFormatter } from '@/utils/formatDate'
import { useState } from 'react'

export default function ShedAnimalTable() {
  const [shedCode, setShedCode] = useState(options[0])
  const { data, loading, error } = useShedAnimalList()

  const changeShedHandler = (value: any) => {
    setShedCode(value)
  }

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>

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
