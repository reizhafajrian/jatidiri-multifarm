'use client'
import { IHpp } from '@/store/hpp'
import formatRupiah from '@/utils/formatRupiah'
import { FC, useState } from 'react'
import EditHppForm from '../form/EditHppForm'
import { Button, Listbox, Table } from '../shared'

const statusOptions = [
  { name: 'Terjual', bgColor: 'bg-[#FFE2DC]' },
  { name: 'Tersedia', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Mati', bgColor: 'bg-[#BFC4C6] bg-opacity-20' },
]

interface HppTableProps {
  data: IHpp[]
}

const HppTable: FC<HppTableProps> = ({ data }) => {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')
  const [status, setStatus] = useState(statusOptions[0])

  const changeStatusHandler = (value: any) => {
    setStatus(value)
  }

  const editHandler = (value: string) => {
    setEartagCode(value)
    closeModal(true)
  }

  const columns = [
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
      cell: (data: any) => (
        <div className="relative overflow-y-visible">
          <Listbox
            options={statusOptions}
            value={status}
            onChange={changeStatusHandler}
            className={`${status.bgColor} w-24`}
            optionsClassname="w-24 bg-white"
          />
        </div>
      ),
    },
    {
      header: 'Aksi',
      accessorKey: 'eartag_code',
      cell: (data: any) => (
        <Button intent="edit" onClick={() => editHandler(data.getValue())} />
      ),
    },
  ]

  return (
    <>
      <EditHppForm
        eartag_code={eartagCode}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Table data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default HppTable
