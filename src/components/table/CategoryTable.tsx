'use client'
import useDataList from '@/hooks/useDataList'
import { formatRupiah } from '@/lib/utils'
import useStore from '@/store/useStore'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import DeleteModal from '../form/DeleteModal'
import EditCategoryForm from '../form/EditCategoryForm'
import { Table } from '../shared'

const categoryTitle = (category: string) =>
  category === 'feed'
    ? 'Pakan'
    : category === 'vitamin'
    ? 'Vitamin'
    : category === 'vaccine'
    ? 'Vaksin'
    : 'Obat Cacing'

interface CategoryTableProps {
  category: string
}

const CategoryTable: FC<CategoryTableProps> = ({ category }) => {
  const { deleteCategory } = useStore()
  const { data, loading, mutate } = useDataList(`/api/${category}/get`)

  const deleteHandler = async (_id: string) => {
    deleteCategory({ category, _id })
    mutate()
  }

  const columns: ColumnDef<any, any>[] = [
    { header: categoryTitle(category), accessorKey: `${category}_type` },
    { header: 'Total Penggunaan', accessorKey: `${category}_weight` },
    { header: 'Stock', accessorKey: `${category}_stock` },
    {
      header: `Harga ${categoryTitle(category)}`,
      accessorKey: `${category}_price_${category === 'feed' ? 'kgs' : 'pcs'}`,
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Aksi',
      accessorKey: `_id`,
      cell: (data: any) => (
        <div className="flex gap-2">
          <EditCategoryForm category={category} />
          <DeleteModal
            title={`Hapus Data Ini?`}
            desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
            deleteHandler={() => deleteHandler(data.getValue())}
          />
        </div>
      ),
    },
  ]

  return (
    <>
      <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default CategoryTable
