'use client'
import { IMilk } from '@/store/milk'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import MilkForm from '../form/MilkForm'
import { Button, Table } from '../shared'
import SelectTable from '../shared/SelectTable'

const statusOptions = [
  { name: 'Aktif', value: 'active', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Non-Aktif', value: 'non-active', bgColor: 'bg-[#FFE2DC]' },
]

interface MilkTableProps {
  data: IMilk[]
}

const MilkTable: FC<MilkTableProps> = ({ data }) => {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')
  // const [status, setStatus] = useState(statusOptions[0])

  // const changeStatusHandler = (value: any) => {
  //   setStatus(value)
  // }

  const editHandler = (eartag_code: string) => {
    setEartagCode(eartag_code)
    closeModal(true)
  }

  const columns: ColumnDef<any, any>[] = [
    { header: 'No Eartag', accessorKey: 'eartag_code' },
    { header: 'Jenis', accessorKey: 'type' },
    { header: 'Asal', accessorKey: 'origin' },
    { header: 'Berat', accessorKey: 'weight' },
    { header: 'Usia', accessorKey: 'age' },
    {
      header: 'Susu',
      accessorKey: 'milk',
      cell: (data) => `${data.getValue() !== 0 ? data.getValue() + ' L' : '0'}`,
    },
    {
      header: 'Status',
      accessorKey: 'status.value',
      cell: (data) => (
        <SelectTable
          value={data.getValue()}
          options={statusOptions}
          triggerBackground={
            statusOptions.find((i) => i.value === data.getValue())?.bgColor!
          }
        />
      ),
    },
    {
      header: 'Aksi',
      accessorKey: 'eartag_code',
      cell: (data) => (
        <Button
          size="xs"
          variant="edit"
          onClick={() => editHandler(data.getValue())}
        />
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
      <Table isLoading={false} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default MilkTable
