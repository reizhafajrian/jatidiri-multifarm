'use client'
import DeleteIcon from '@/assets/icons/delete.svg'
import EditIcon from '@/assets/icons/edit.svg'
import { longDateFormatter } from '@/utils/formatDate'
import FilterTable from './FilterTable'
import Table from './Table'

export default function CempekTable({ data }: any) {
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
    header: 'Tgl Lahir',
    accessorKey: 'birth_date',
    cell: ({ value }: any) => longDateFormatter(value),
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Jenis Cempek',
    accessorKey: 'type',
  },
  {
    header: 'Jenis Kelamin',
    accessorKey: 'gender',
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
    header: 'Kondisi Lahir',
    accessorKey: 'birth_condition',
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
