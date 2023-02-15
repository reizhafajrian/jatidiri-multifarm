'use client'
import EditIcon from '@/assets/icons/edit.svg'
import { milkData } from '@/data/dummy'
import { useState } from 'react'
import Button from '../Button'
import Listbox from '../Listbox'
import Modal from '../Modal'
import Table from '../Table/Table'
import EditMilkForm from './EditMilkForm'

export default function MilkTable() {
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
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <EditMilkForm closeModal={closeModal} eartagCode={eartagCode} />
      </Modal>
      <Table
        data={milkData}
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
      <Button
        className="w-fit px-2"
        onClick={() => editHandler(data.getValue())}
      >
        <EditIcon />
      </Button>
    ),
  },
]
