'use client'
import CowIcon from '@/assets/icons/cow-circle.svg'
import DeleteIcon from '@/assets/icons/delete.svg'
import EditIcon from '@/assets/icons/edit.svg'
import GoatIcon from '@/assets/icons/goat-circle.svg'
import SheepIcon from '@/assets/icons/sheep-circle.svg'
import Content from './Content'

export default function AnthelminticSection() {
  return (
    <Content
      category="anthelmintic"
      title="Obat Cacing"
      cardList={cardList}
      data={[{}, {}, {}]}
      columns={columns}
    />
  )
}

const cardList = [
  {
    title: 'Sapi',
    value: '4/10',
    icon: <CowIcon />,
  },
  {
    title: 'Domba',
    value: '4/8',
    icon: <SheepIcon />,
  },
  {
    title: 'Kambing',
    value: '4/6',
    icon: <GoatIcon />,
  },
]

const columns = [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Obat Cacing',
    accessorKey: 'anthelmintic_type',
  },
  {
    header: 'Total Penggunaan',
    accessorKey: 'anthelmintic_weight',
  },
  {
    header: 'Stock',
    accessorKey: 'anthelmintic_stock',
  },
  {
    header: 'Harga Obat Cacing',
    accessorKey: 'anthelmintic_price',
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
]
