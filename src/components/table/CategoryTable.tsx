'use client'
import { ICategoryProps } from '@/data/interfaces'
import formatRupiah from '@/utils/formatRupiah'
import { useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import EditCategoryForm from '../form/EditCategoryForm'
import { Button, Table } from '../shared'

export default function CategoryTable(props: ICategoryProps) {
  const [isOpenEdit, closeModalEdit] = useState(false)
  const [isOpenDelete, closeModalDelete] = useState(false)
  const [id, setId] = useState('')

  const deleteHandler = () => {
    console.log(id)
  }

  return (
    <>
      <EditCategoryForm
        category={props.category!}
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
      <Table
        data={props.data}
        columns={columns(
          closeModalEdit,
          closeModalDelete,
          setId,
          props.category!
        )}
        fixedCol={2}
      />
    </>
  )
}

const categoryTitle = (category: string) =>
  category === 'feed'
    ? 'Pakan'
    : category === 'vitamin'
    ? 'Vitamin'
    : category === 'vaccine'
    ? 'Vaksin'
    : 'Obat Cacing'

const columns = (
  closeModalEdit: any,
  closeModalDelete: any,
  setId: any,
  category: string
) => [
  {
    header: categoryTitle(category),
    accessorKey: `${category}_type`,
  },
  {
    header: 'Total Penggunaan',
    accessorKey: `${category}_weight`,
  },
  {
    header: 'Stock',
    accessorKey: `${category}_stock`,
  },
  {
    header: `Harga ${categoryTitle(category)}`,
    accessorKey: `${category}_price`,
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Aksi',
    accessorKey: `${category}_type`,
    cell: (data: any) => (
      <div className="flex gap-2">
        <Button
          intent="edit"
          onClick={() => {
            closeModalEdit(true)
            setId(data.getValue)
          }}
        />
        <Button
          intent="delete"
          onClick={() => {
            closeModalDelete(true)
            setId(data.getValue)
          }}
        />
      </div>
    ),
  },
]
