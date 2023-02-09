export const ShedInfoColumns = [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Tgl Update Data',
    accessorKey: 'shed_code',
    cell: () => '01-10-2022',
  },
  {
    header: 'Pakan',
    accessorKey: 'feed',
    cell: () => 'Rumput',
  },
  {
    header: 'Vitamin',
    accessorKey: 'vitamin',
  },
  {
    header: 'Tgl Vitamin',
    accessorKey: 'vitamin_date',
  },
  {
    header: 'Vaksin',
    accessorKey: 'vaksin',
  },
  {
    header: 'Tgl Vaksin',
    accessorKey: 'vaksin_date',
  },
  {
    header: 'Obat Cacing',
    accessorKey: 'worm_medicine',
  },
  {
    header: 'Tgl Obat Cacing',
    accessorKey: 'worm_medicine',
  },
  {
    header: 'Range Usia',
    accessorKey: 'worm_medicine',
  },
]

export const dateOptions = [
  { name: 'Today' },
  { name: 'This Week' },
  { name: 'This Month' },
  { name: 'This Year' },
]

export const indukOptions = [
  { name: 'All' },
  { name: 'Garut' },
  { name: 'Impor' },
  { name: 'Swiss' },
]

export const pejantanOptions = [
  { name: 'All' },
  { name: 'Garut' },
  { name: 'Impor' },
  { name: 'Swiss' },
]
