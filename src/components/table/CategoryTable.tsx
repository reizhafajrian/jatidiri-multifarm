'use client'
import { categoryTitle } from '@/data/data'
import { ICategoryProps } from '@/data/interfaces'
import { useState } from 'react'
import EditCategoryForm from '../form/EditCategoryForm'
import { Button, Table } from '../shared'

export default function CategoryTable(props: ICategoryProps) {
  const [isOpen, closeModal] = useState(false)

  const editData = () => {
    closeModal(true)
  }

  const deleteData = () => {}

  return (
    <>
      <EditCategoryForm
        category={props.category!}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Table
        data={props.data}
        columns={columns(editData, deleteData, props.category!)}
        fixedCol={2}
      />
    </>
  )
}

const columns = (editData: any, deleteData: any, category: string) => [
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
  },
  {
    header: 'Aksi',
    accessorKey: `${category}_type`,
    cell: (data: any) => (
      <div className="flex gap-2">
        <Button intent="edit" onClick={() => editData(data.getValue())} />
        <Button intent="delete" onClick={() => deleteData(data.getValue())} />
      </div>
    ),
  },
]
