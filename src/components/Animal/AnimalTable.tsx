'use client'
import { longDateFormatter } from '@/utils/formatDate'
import formatRupiah from '@/utils/formatRupiah'
import { useRouter } from 'next/navigation'
import Button from '../Button'
import Table from '../Table/Table'
import FilterAnimalTable from './FilterAnimalTable'

export default function AnimalTable({ data, params }: any) {
  const router = useRouter()
  const { animal_type, gender } = params

  const editAnimalData = (eartag_code: any) => {
    router.push(`/${animal_type}/${gender}/edit?eartag_code=${eartag_code}`)
  }

  const deleteAnimalData = () => {}

  return (
    <>
      <FilterAnimalTable />
      <Table
        data={data}
        columns={columns(editAnimalData, deleteAnimalData)}
        fixedCol={3}
      />
    </>
  )
}

const columns = (editAnimalData: any, deleteAnimalData: any) => [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_date',
    cell: ({ value }: any) => longDateFormatter(value),
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
    header: 'Asal Induk',
    accessorKey: 'origin_female',
  },
  {
    header: 'Asal Pejantan',
    accessorKey: 'origin_male',
  },
  {
    header: 'Harga Beli',
    accessorKey: 'purchase_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Aksi',
    accessorKey: 'eartag_code',
    cell: (data: any) => (
      <div className="flex gap-2">
        <Button intent="edit" onClick={() => editAnimalData(data.getValue())} />
        <Button
          intent="delete"
          onClick={() => deleteAnimalData(data.getValue())}
        />
      </div>
    ),
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
]
