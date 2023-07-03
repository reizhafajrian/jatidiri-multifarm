"use client"

import { ColumnDef } from "@tanstack/react-table"

import { formatRupiah } from "@/lib/utils"
import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"

import DeleteDialog from "../ui/delete-dialog"
import Table from "../ui/table"
import EditCategoryForm from "./category-form-edit"

interface IProps {
  category: string
}

export default function CategoryTable({ category }: IProps) {
  const { deleteCategory } = useStore()
  const { data, loading, mutate } = useDataList({ url: `/api/${category}/get` })

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
          <DeleteDialog
            title={`Hapus Data Ini?`}
            desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
            handler={() => deleteHandler(data.getValue())}
            mutate={mutate}
          />
        </div>
      ),
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
