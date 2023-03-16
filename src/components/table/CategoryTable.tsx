'use client'
import useDataList from '@/hooks/useDataList'
import { Delete } from '@/lib/api'
import { formatRupiah } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import EditCategoryForm from '../form/EditCategoryForm'
import { Button, Table, toast } from '../shared'

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
  data: any
}

const CategoryTable: FC<CategoryTableProps> = ({ category, data: test }) => {
  const [isOpenEdit, closeModalEdit] = useState(false)
  const [id, setId] = useState('')

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
          <Button
            variant="edit"
            size="xs"
            onClick={() => {
              closeModalEdit(true)
              setId(data.getValue())
            }}
          />
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
      <EditCategoryForm
        category={category}
        isOpen={isOpenEdit}
        closeModal={closeModalEdit}
      />
      <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default CategoryTable
