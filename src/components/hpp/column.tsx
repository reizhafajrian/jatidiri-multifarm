import { ColumnDef } from "@tanstack/react-table"

import { formatRupiah } from "@/lib/utils"

import SelectTable from "../ui/select-table"
import EditHppForm from "./hpp-form-edit"

const statusOptions = [
  { name: "Terjual", value: "sold", bgColor: "bg-[#FFE2DC]" },
  { name: "Tersedia", value: "available", bgColor: "bg-[#E1F7E8]" },
  { name: "Mati", value: "died", bgColor: "bg-[#BFC4C6] bg-opacity-20" },
]

export const getHppColumns = (
  changeStatusHandler: (value: string, _id?: string) => Promise<void>
) => {
  const hppColumns: ColumnDef<any, any>[] = [
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
      cell: (data) => (
        <div>
          {isNaN(data.getValue())
            ? data.getValue()
            : formatRupiah(data.getValue())}
        </div>
      ),
    },
    {
      header: "Harga Jual",
      accessorKey: "sell_price",
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (data) => (
        <SelectTable
          onChange={changeStatusHandler}
          animalEarTag={data.row.original._id}
          value={data.getValue() === "active" ? "available" : data.getValue()}
          options={statusOptions}
          triggerClassName={
            statusOptions.find((i) => i.value === data.getValue())?.bgColor! ??
            "bg-[#E1F7E8]"
          }
        />
      ),
    },
    { header: "Nama Pembeli", accessorKey: "buyer" },
    { header: "No Telepon", accessorKey: "phone" },
    {
      header: "Aksi",
      accessorKey: "eartag_code",
      cell: (data) => <EditHppForm data={data.row.original} />,
    },
  ]

  return hppColumns
}
