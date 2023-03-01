'use client'
import { useMilkStore } from '@/store/milk'
import { useState } from 'react'
import EditMilkForm from '../form/EditMilkForm'
import { Button, Listbox, Table } from '../shared'

export default function MilkTable() {
  const { milkList } = useMilkStore()

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

  return (
    <>
      <EditMilkForm
        isOpen={isOpen}
        closeModal={closeModal}
        eartag_code={eartagCode}
      />
      <Table
        data={milkList}
        columns={columns(status, changeStatusHandler, editHandler)}
        fixedCol={2}
      />
    </>
  )
}

const statusOptions = [
  { name: 'Aktif', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Non-Aktif', bgColor: 'bg-[#FFE2DC]' },
]

const columns = (status: any, changeStatusHandler: any, editHandler: any) => [
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
