'use client'
import CowIcon from '@/assets/icons/cow-circle.svg'
import DeleteIcon from '@/assets/icons/delete.svg'
import EditIcon from '@/assets/icons/edit.svg'
import GoatIcon from '@/assets/icons/goat-circle.svg'
import SheepIcon from '@/assets/icons/sheep-circle.svg'
import Content from './Content'

export default function VitaminSection() {
  return (
    <Content
      category="vitamin"
      title="Vitamin"
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
    header: 'Vitamin',
    accessorKey: 'vitamin_type',
  },
  {
    header: 'Total Penggunaan',
    accessorKey: 'vitamin_weight',
  },
  {
    header: 'Stock',
    accessorKey: 'vitamin_stock',
  },
  {
    header: 'Harga Vitamin',
    accessorKey: 'vitamin_price',
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
