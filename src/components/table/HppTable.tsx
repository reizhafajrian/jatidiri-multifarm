'use client'
import useHppList from '@/hooks/useHppList'
import { formatRupiah } from '@/lib/utils'
import useStore from '@/store/useStore'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import EditHppForm from '../form/EditHppForm'
import { Table } from '../shared'
import SelectTable from '../shared/SelectTable'

const statusOptions = [
  { name: 'Terjual', value: 'sold', bgColor: 'bg-[#FFE2DC]' },
  { name: 'Tersedia', value: 'available', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Mati', value: 'died', bgColor: 'bg-[#BFC4C6] bg-opacity-20' },
]

const HppTable: FC = () => {
  const { editAnimal } = useStore()
  const { data, loading, mutate } = useHppList()

  const changeStatusHandler = async (value: any, _id?: string) => {
    const pathname = window?.location?.pathname
    const secondPath = pathname.split('/')[2]
    editAnimal({ status: value, _id, animal: secondPath })
    mutate()
  }

  const columns: ColumnDef<any, any>[] = [
    { header: 'No Eartag', accessorKey: 'eartag_code' },
    { header: 'Jenis', accessorKey: 'type' },
    { header: 'Asal', accessorKey: 'origin' },
    { header: 'Berat', accessorKey: 'weight' },
    { header: 'Usia', accessorKey: 'age' },
    {
      header: 'Harga Beli',
      accessorKey: 'purchase_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Pakan',
      accessorKey: 'feed_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Lainnya',
      accessorKey: 'another_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'HPP',
      accessorKey: 'hpp',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Jual',
      accessorKey: 'selling_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (data) => (
        <SelectTable
          onChange={changeStatusHandler}
          animalEarTag={data.row.original._id}
          value={data.getValue() === 'active' ? 'available' : data.getValue()}
          options={statusOptions}
          triggerClassName={
            statusOptions.find((i) => i.value === data.getValue())?.bgColor! ??
            'bg-[#E1F7E8]'
          }
        />
      ),
    },
    {
      header: 'Aksi',
      accessorKey: 'eartag_code',
      cell: (data) => <EditHppForm data={data.row.original} />,
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}

export default HppTable
