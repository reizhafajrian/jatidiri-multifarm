import { ColumnDef } from "@tanstack/react-table"

import { formatRupiah } from "@/lib/utils"

export const hppColumns: ColumnDef<any, any>[] = [
  { header: "No Eartag", accessorKey: "eartag_code" },
  { header: "Jenis", accessorKey: "type" },
  { header: "Asal", accessorKey: "origin" },
  { header: "Berat", accessorKey: "weight" },
  { header: "Usia", accessorKey: "age" },
  {
    header: "Harga Beli",
    accessorKey: "purchase_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
  {
    header: "Harga Pakan",
    accessorKey: "feed_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
  {
    header: "Harga Lainnya",
    accessorKey: "another_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
  {
    header: "HPP",
    accessorKey: "hpp_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
  {
    header: "Harga Jual",
    accessorKey: "sell_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
]
