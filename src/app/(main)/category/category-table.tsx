"use client"

import { ColumnDef } from "@tanstack/react-table"

import { formatRupiah } from "@/lib/utils"
import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import DeleteModal from "@/components/ui/DeleteModal"
import Table from "@/components/ui/Table"

import EditCategoryForm from "./category-form-edit"

interface IProps {
  category: string
}

export default function CategoryTable({ category }: IProps) {
  const { deleteCategory } = useStore()
  const { data, loading, mutate } = useDataList(`/api/${category}/get`)

  const deleteHandler = async (_id: string) => {
    await deleteCategory({ category, _id })
    mutate()
  }

  const categoryTitle = (category: string) =>
    category === "feed"
      ? "Pakan"
      : category === "vitamin"
      ? "Vitamin"
      : category === "vaccine"
      ? "Vaksin"
      : "Obat Cacing"

  const columns: ColumnDef<any, any>[] = [
    { header: categoryTitle(category), accessorKey: "name" },
    { header: "Total Penggunaan", accessorKey: "used" },
    { header: "Stock", accessorKey: "stocks" },
    {
      header: `Harga ${categoryTitle(category)}`,
      accessorKey: `price`,
      cell: (data) => (data?.getValue() ? formatRupiah(data.getValue()) : "-"),
    },
    {
      header: "Aksi",
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
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
