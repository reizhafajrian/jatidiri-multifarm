import { longDateFormatter } from '@/utils/formatDate'
import Table from './Table'

export default function TabelPejantan({ data }: any) {
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
      header: 'Keterangan',
      accessorKey: 'keterangan',
    },
  ]

  return <Table data={data} columns={columns} />
}
