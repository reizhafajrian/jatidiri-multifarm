import DeleteIcon from '@/assets/icons/delete.svg'
import EditIcon from '@/assets/icons/edit.svg'
import { longDateFormatter } from '@/utils/formatDate'
import Table from './Table'

export default function TabelBetina({ data }: any) {
  const columns = [
    {
      header: 'No',
      cell: ({ row }: any) => row.index + 1,
      sticky: 'left',
    },
    {
      header: 'Tgl Tiba',
      accessorKey: 'tgl_tiba',
      cell: ({ value }: any) => longDateFormatter(value),
      sticky: 'left',
    },
    {
      header: 'No Eartag',
      accessorKey: 'no_eartag',
      sticky: 'left',
    },
    {
      header: 'Jenis',
      accessorKey: 'jenis',
    },
    {
      header: 'Asal',
      accessorKey: 'asal',
    },
    {
      header: 'Berat',
      accessorKey: 'berat',
    },
    {
      header: 'Usia',
      accessorKey: 'usia',
    },
    {
      header: 'Asal Induk',
      accessorKey: 'asal_induk',
    },
    {
      header: 'Asal Pejantan',
      accessorKey: 'asal_pejantan',
    },
    {
      header: 'Harga Beli',
      accessorKey: 'harga_beli',
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
      accessorKey: 'keterangan',
    },
  ]

  return <Table data={data} columns={columns} />
}
