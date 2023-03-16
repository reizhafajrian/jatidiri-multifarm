'use client'
import useDataList from '@/hooks/useDataList'
import { Post } from '@/lib/api'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import MilkForm from '../form/MilkForm'
import { Button, Table, toast } from '../shared'
import SelectTable from '../shared/SelectTable'

const statusOptions = [
  { name: 'Aktif', value: 'active', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Non-Aktif', value: 'inactive', bgColor: 'bg-[#FFE2DC]' },
]

interface MilkTableProps {}

const MilkTable: FC<MilkTableProps> = ({}) => {
  const [isOpen, closeModal] = useState(false)
  const [values, setValues] = useState({})
  const { data, loading, mutate } = useDataList('/api/milk/get')

  const changeStatusHandler = async (status: string, _id: string) => {
    try {
      const res = await Post({
        url: '/api/milk/status/update',
        body: {
          data: [
            {
              _id,
              status,
            },
          ],
        },
      })

      if (res.status === 200) {
        toast({
          type: 'success',
          message: res.message,
        })
        mutate()
      }
    } catch (e) {
      console.log(e)
    } finally {
      closeModal(false)
    }
  }

  const editHandler = (values: any) => {
    setValues(values)
    closeModal(true)
  }

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
          onChange={(value) =>
            changeStatusHandler(value, data.row.original._id)
          }
        />
      ),
    },
    {
      header: 'Aksi',
      accessorKey: '_id',
      cell: (data) => (
        <Button
          size="xs"
          variant="edit"
          onClick={() => editHandler(data.row.original)}
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
        values={values}
      />
      <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default MilkTable
