'use client'
import CalcIcon from '@/assets/icons/calc-circle.svg'
import CatIcon from '@/assets/icons/cat-circle.svg'
import DeleteIcon from '@/assets/icons/delete.svg'
import EditIcon from '@/assets/icons/edit.svg'
import Content from './Content'

export default function FeedSection() {
  return (
    <Content
      category="feed"
      title="Pakan"
      cardList={cardList}
      data={[{}, {}, {}]}
      columns={columns}
    />
  )
}

const cardList = [
  {
    title: 'Jenis Pakan',
    value: '4',
    label: 'Jenis',
    icon: <CatIcon />,
  },
  {
    title: 'Total Penggunaan',
    value: '250',
    label: 'Kilogram',
    icon: <CalcIcon />,
  },
  {
    title: 'Total Stock',
    value: '150',
    label: 'Kilogram',
    icon: <CalcIcon />,
  },
]

const columns = [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Pakan',
    accessorKey: 'feed_type',
  },
  {
    header: 'Total Penggunaan',
    accessorKey: 'feed_weight',
  },
  {
    header: 'Stock',
    accessorKey: 'feed_stock',
  },
  {
    header: 'Harga(per kg)',
    accessorKey: 'feed_price',
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
