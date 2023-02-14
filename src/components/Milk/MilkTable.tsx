'use client'
import EditIcon from '@/assets/icons/edit.svg'
import { milkData } from '@/data/dummy'
import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import Table from '../Table/Table'
import EditMilkForm from './EditMilkForm'
import ListboxMilkStatus from './ListboxMilkStatus'

export default function MilkTable() {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <EditMilkForm closeModal={closeModal} eartagCode={eartagCode} />
      </Modal>
      <Table
        data={milkData}
        columns={columns(closeModal, setEartagCode)}
        fixedCol={2}
      />
    </>
  )
}

const columns = (closeModal: any, setEartagCode: any) => [
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
    cell: (data: any) => <ListboxMilkStatus value={data.getValue()} />,
  },
  {
    header: 'Aksi',
    accessorKey: 'eartag_code',
    cell: (data: any) => (
      <Button
        className="w-fit px-2"
        onClick={() => {
          setEartagCode(data.getValue())
          closeModal(true)
        }}
      >
        <EditIcon />
      </Button>
    ),
  },
]
