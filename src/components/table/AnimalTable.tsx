'use client'
import useAnimalList from '@/hooks/useAnimalList'
import { formatRupiah, longDateFormatter } from '@/lib/utils'
import useStore from '@/store/useStore'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import DeleteModal from '../form/DeleteModal'
import { Button, Table } from '../shared'

interface AnimalTableProps {
  animal?: string
  type: string
}

const AnimalTable: FC<AnimalTableProps> = ({ animal, type }) => {
  const router = useRouter()
  const { deleteAnimal } = useStore()
  const { data, loading, mutate } = useAnimalList({ type })

  const columns: ColumnDef<any, any>[] = [
    ...(type === 'cempek' ? cempekTColumns : animalTColumns),
    {
      header: 'Aksi',
      accessorKey: '_id',
      cell: (data) => (
        <div className="flex gap-2">
          <Button
            size="xs"
            variant="edit"
            onClick={() => router.replace(`/${animal}/edit/${data.getValue()}`)}
          />
          <DeleteModal
            title={`Hapus Data Ini?`}
            desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
            deleteHandler={() => {
              deleteAnimal(data.getValue())
              mutate()
            }}
          />
        </div>
      ),
    },
    { header: 'Keterangan', accessorKey: 'description' },
  ]

  return (
    <Table isLoading={loading} fixedCol={3} data={data} columns={columns} />
  )
}

export default AnimalTable

const cempekTColumns: ColumnDef<any, any>[] = [
  {
    header: 'Tgl Lahir',
    accessorKey: 'birth_date',
    cell: (data) => longDateFormatter(new Date(data.getValue())),
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
    cell: (data) => (data.getValue() ? 'jantan' : 'betina'),
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
]

const animalTColumns: ColumnDef<any, any>[] = [
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_date',
    cell: (data) => longDateFormatter(new Date(data.getValue())),
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
    cell: (data) => formatRupiah(data.getValue()),
  },
]
