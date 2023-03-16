'use client'
import useDataList from '@/hooks/useDataList'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import MilkForm from '../form/MilkForm'
import { Button, Table } from '../shared'
import SelectTable from '../shared/SelectTable'

const statusOptions = [
  { name: 'Aktif', value: 'active', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Non-Aktif', value: 'non-active', bgColor: 'bg-[#FFE2DC]' },
]

interface MilkTableProps {}

const MilkTable: FC<MilkTableProps> = ({}) => {
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

  const { data, loading, mutate } = useDataList('/api/milk/get')

  const columns: ColumnDef<any, any>[] = [
    { header: 'No Eartag', accessorKey: 'animal_id.eartag_code' },
    { header: 'Jenis', accessorKey: 'animal_id.type' },
    { header: 'Asal', accessorKey: 'animal_id.origin' },
    { header: 'Berat', accessorKey: 'animal_id.weight' },
    { header: 'Usia', accessorKey: 'animal_id.age' },
    {
      header: 'Susu',
      accessorKey: 'amount',
      cell: (data) => `${data.getValue() !== 0 ? data.getValue() + ' L' : '0'}`,
    },
    {
      header: 'Status',
      accessorKey: 'animal_id.status',
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
      <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default MilkTable
