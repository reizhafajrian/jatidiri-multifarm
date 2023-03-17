'use client'
import useDataList from '@/hooks/useDataList'
import { Post } from '@/lib/api'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import MilkForm from '../form/MilkForm'
import { Table, toast } from '../shared'
import SelectTable from '../shared/SelectTable'

interface MilkTableProps {}

const MilkTable: FC<MilkTableProps> = ({}) => {
  const { data, loading, mutate } = useDataList('/api/milk/get')

  const changeStatusHandler = async (status: string, _id: string) => {
    try {
      const data = [{ _id, status }]

      const res = await Post({
        url: '/api/milk/status/update',
        body: { data },
      })

      toast({
        type: 'success',
        message: res.message,
      })

      mutate()
    } catch (e) {
      console.log(e)
    }
  }

  const statusOptions = [
    { name: 'Aktif', value: 'active', bgColor: 'bg-[#E1F7E8]' },
    { name: 'Non-Aktif', value: 'inactive', bgColor: 'bg-[#FFE2DC]' },
  ]

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
          triggerClassName={`${statusOptions.find(
            (i) => i.value === data.getValue()
          )?.bgColor!} font-semibold text-neutral-4`}
          onChange={(value) =>
            changeStatusHandler(value, data.row.original.animal_id._id)
          }
        />
      ),
    },
    {
      header: 'Aksi',
      accessorKey: 'animal_id._id',
      cell: (data) => (
        <MilkForm formType="edit" currentValues={data.row.original} />
      ),
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}

export default MilkTable
