import { ColumnDef } from "@tanstack/react-table"
import { KeyedMutator } from "swr"

import { categoryTitle, formatRupiah } from "@/lib/utils"

import DeleteDialog from "../ui/delete-dialog"
import EditCategoryForm from "./form/form-edit"

export const getCategoryColumns = (
  category: string,
  deleteHandler: (category: string, _id: string) => Promise<void>,
  mutate: KeyedMutator<any>
) => {
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
            handler={() => deleteHandler(category, data.getValue())}
            mutate={mutate}
          />
        </div>
      ),
    },
  ]

  return columns
}
