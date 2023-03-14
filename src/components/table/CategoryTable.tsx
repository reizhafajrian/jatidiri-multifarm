'use client'
import { formatRupiah } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import EditCategoryForm from '../form/EditCategoryForm'
import { Button, Table } from '../shared'

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

const CategoryTable: FC<CategoryTableProps> = ({ category, data }) => {
  const [isOpenEdit, closeModalEdit] = useState(false)
  const [isOpenDelete, closeModalDelete] = useState(false)
  const [id, setId] = useState('')

  const deleteHandler = () => {
    console.log(id)
  }

  const columns: ColumnDef<any, any>[] = [
    { header: categoryTitle(category), accessorKey: `${category}_type` },
    { header: 'Total Penggunaan', accessorKey: `${category}_weight` },
    { header: 'Stock', accessorKey: `${category}_stock` },
    {
      header: `Harga ${categoryTitle(category)}`,
      accessorKey: `${category}_price`,
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Aksi',
      accessorKey: `${category}_type`,
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
          <Button
            variant="delete"
            size="xs"
            onClick={() => {
              closeModalDelete(true)
              setId(data.getValue())
            }}
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
      <DeleteModal
        isOpen={isOpenDelete}
        closeModal={closeModalDelete}
        title={`Hapus Data Ini?`}
        desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
        deleteHandler={deleteHandler}
      />
      <Table isLoading={false} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default CategoryTable
