'use client'
import { longDateFormatter } from '@/utils/formatDate'
import Button from '../Button'
import Table from '../Table/Table'
import FilterAnimalTable from './FilterAnimalTable'

export default function CempekTable({ data }: any) {
  const editCempekData = () => {}
  const deleteCempekData = () => {}

  return (
    <>
      <FilterAnimalTable />
      <Table
        data={data}
        columns={columns(editCempekData, deleteCempekData)}
        fixedCol={3}
      />
    </>
  )
}

const columns = (editCempekData: any, deleteCempekData: any) => [
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
    accessorKey: 'eartag_code',
    cell: (data: any) => (
      <div className="flex gap-2">
        <Button intent="edit" onClick={() => editCempekData(data.getValue())} />
        <Button
          intent="delete"
          onClick={() => deleteCempekData(data.getValue())}
        />
      </div>
    ),
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
]
