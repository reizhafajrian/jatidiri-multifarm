'use client'
import useDataList from '@/hooks/useDataList'
import { Delete } from '@/lib/api'
import { formatRupiah } from '@/lib/utils'
import useStore from '@/store/useStore'
import { ColumnDef } from '@tanstack/react-table'
import { FC } from 'react'
import DeleteModal from '../form/DeleteModal'
import EditCategoryForm from '../form/EditCategoryForm'
import { Table, toast } from '../shared'

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


  const deleteHandler = async (id: string) => {
    try {
      const url = `/api/${category}/delete/${id}`
      const res = await Delete(url)

      if (res.status === 201) {
        toast({
          type: 'success',
          message: res.message,
        })
        mutate()
      }
    } catch (e) {
      console.log(e)
    }
  }

  const columns: ColumnDef<any, any>[] = [
    { header: categoryTitle(category), accessorKey: 'name' },
    { header: 'Total Penggunaan', accessorKey: 'used' },
    { header: 'Stock', accessorKey: 'stocks' },
    {
      header: `Harga ${categoryTitle(category)}`,
      accessorKey: `price`,
      cell: (data) => data?.getValue() ? formatRupiah(data.getValue()) : '-',
    },
    {
      header: 'Aksi',
      accessorKey: `_id`,
      cell: (data) => (
        <div className="flex gap-2">
          <EditCategoryForm data={data.row.original} category={category} />
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
