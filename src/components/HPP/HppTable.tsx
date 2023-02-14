'use client'
import formatRupiah from '@/utils/formatRupiah'
import { useState } from 'react'
import Button from '../Button'
import Table from '../Table/Table'
import EditHppForm from './EditHppForm'
import ListboxAnimalStatus from './ListboxAnimalStatus'

export default function HppTable({ data }: any) {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')

  const editHandler = (value: string) => {
    setEartagCode(value)
    closeModal(true)
  }

  return (
    <>
      <EditHppForm
        eartagCode={eartagCode}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Table data={data} columns={columns(editHandler)} fixedCol={2} />
    </>
  )
}

const columns = (editHandler: any) => [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Jenis',
    accessorKey: 'type',
  },
  {
    header: 'Asal',
    accessorKey: 'origin',
  },
  {
    header: 'Berat',
    accessorKey: 'weight',
  },
  {
    header: 'Usia',
    accessorKey: 'age',
  },
  {
    header: 'Harga Beli',
    accessorKey: 'purchase_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Harga Pakan',
    accessorKey: 'feed_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Harga Lainnya',
    accessorKey: 'other_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'HPP',
    accessorKey: 'hpp',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Harga Jual',
    accessorKey: 'selling_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Status',
    accessorKey: 'status.name',
    cell: (data: any) => <ListboxAnimalStatus value={data.getValue()} />,
  },
  {
    header: 'Aksi',
    accessorKey: 'eartag_code',
    cell: (data: any) => (
      <Button intent="edit" onClick={() => editHandler(data.getValue())} />
    ),
  },
]
