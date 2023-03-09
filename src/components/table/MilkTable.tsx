'use client'
import { IMilk } from '@/store/milk'
import { FC, useState } from 'react'
import MilkForm from '../form/MilkForm'
import { Button, Listbox, Table } from '../shared'

const statusOptions = [
  { name: 'Aktif', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Non-Aktif', bgColor: 'bg-[#FFE2DC]' },
]

interface MilkTableProps {
  data: IMilk[]
}

const MilkTable: FC<MilkTableProps> = ({ data }) => {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')
  const [status, setStatus] = useState(statusOptions[0])

  const changeStatusHandler = (value: any) => {
    setStatus(value)
  }

  const editHandler = (eartag_code: string) => {
    setEartagCode(eartag_code)
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
      header: 'Susu',
      accessorKey: 'milk',
      cell: (data: any) =>
        `${data.getValue() !== 0 ? data.getValue() + ' L' : '0'}`,
    },
    {
      header: 'Status',
      accessorKey: 'status.name',
      cell: (data: any) => (
        <Listbox
          options={statusOptions}
          value={status}
          onChange={changeStatusHandler}
          className={`${status.bgColor} w-24`}
          optionsClassname="w-24 bg-white"
        />
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
      <MilkForm
        formType="edit"
        isOpen={isOpen}
        closeModal={closeModal}
        eartag_code={eartagCode}
      />
      <Table data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default MilkTable
