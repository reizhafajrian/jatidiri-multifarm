'use client'
import { Get } from '@/lib/api'
import { formatRupiah } from '@/lib/utils'
import useStore from '@/store/useStore'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { FC, useCallback } from 'react'
import useSWR from 'swr'
import EditHppForm from '../form/EditHppForm'
import { Table } from '../shared'
import SelectTable from '../shared/SelectTable'

const statusOptions = [
  { name: 'Terjual', value: 'sold', bgColor: 'bg-[#FFE2DC]' },
  { name: 'Tersedia', value: 'available', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Mati', value: 'died', bgColor: 'bg-[#BFC4C6] bg-opacity-20' },
]

interface HppTableProps {
  animal: string
}

const useHppList = ({ animal }: { animal: string }) => {
  const { status } = useStore()
  const endpoint = useCallback(
    () => { return status.length < 1 ? `/api/hpp/get?animal_type=${animal}` : `/api/hpp/get?animal_type=${animal}&status=${status}` },
    [animal, status]
  )

  const { data, isLoading, error, mutate } = useSWR(endpoint(), Get)

  console.log(data)

  return {
    data: data?.data,
    loading: isLoading,
    error,
    mutate,
  }
}

const HppTable: FC<HppTableProps> = ({ animal }) => {
  // const [status, setStatus] = useState(statusOptions[0])
  const { editAnimal, } = useStore()
  const r = useRouter()
  const { data, loading, mutate } = useHppList({ animal })

  const changeStatusHandler = async (value: any, _id?: string) => {
    const pathname = window?.location?.pathname
    const secondPath = pathname.split('/')[2]
    editAnimal({ status: value, _id, animal: secondPath })
    r.refresh()
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
      accessorKey: 'hpp_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Jual',
      accessorKey: 'sell_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (data) => (
        <SelectTable
          onChange={changeStatusHandler}
          animalEarTag={data.row.original._id}
          value={data.getValue()}
          options={statusOptions}
          triggerClassName={
            statusOptions.find((i) => i.value === data.getValue())?.bgColor!
          }
        />
      ),
    },
    {
      header: 'Aksi',
      accessorKey: 'eartag_code',
      cell: (data) => <EditHppForm eartag_code={data.getValue()} hpp_price={data.row.original.hpp_price} _id={
        data.row.original._id
      } />,
    },
  ]

  return <Table isLoading={false} data={data?.length > 0 ? data : []} columns={columns} fixedCol={2} />
}

export default HppTable
