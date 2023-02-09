'use client'
import DeleteIcon from '@/assets/icons/delete.svg'
import EditIcon from '@/assets/icons/edit.svg'
import { longDateFormatter } from '@/utils/formatDate'
import formatRupiah from '@/utils/formatRupiah'
import FilterTable from './FilterTable'
import Table from './Table'

export default function AnimalTable({ data }: any) {
  return (
    <>
      <FilterTable />
      <Table data={data} columns={columns} fixedCol={3} />
    </>
  )
}

const columns = [
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
    accessorKey: 'female_parent_origin',
  },
  {
    header: 'Asal Pejantan',
    accessorKey: 'male_parent_origin',
  },
  {
    header: 'Harga Beli',
    accessorKey: 'purchase_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Aksi',
    cell: () => (
      <div className="flex gap-2">
        <button className="grid h-6 w-6 place-items-center rounded-lg bg-[#40916C]">
          <EditIcon />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded-lg bg-[#E15E52]">
          <DeleteIcon />
        </button>
      </div>
    ),
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
]
