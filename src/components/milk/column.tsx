import { ColumnDef } from "@tanstack/react-table"

import { formatRupiah, shortDateFormatter } from "@/lib/utils"

import SelectTable from "../ui/select-table"
import FormEditMilk from "./form/form-edit"

const statusOptions = [
  { name: "Aktif", value: "active", bgColor: "bg-[#E1F7E8]" },
  { name: "Non-Aktif", value: "inactive", bgColor: "bg-[#FFE2DC]" },
]

export const getMilkColumns = (
  changeStatus: (id: string, status: string) => Promise<void>
) => {
  const columns: ColumnDef<any, any>[] = [
    { header: "No Eartag", accessorKey: "eartag_code" },
    { header: "Keterangan", accessorKey: "description" },
    { header: "Jenis", accessorKey: "type" },
    { header: "Asal", accessorKey: "origin" },
    { header: "Berat", accessorKey: "weight" },
    { header: "Usia", accessorKey: "age" },
    {
      header: "Susu",
      accessorKey: "milks",
      cell: (data) => `${data.getValue().length > 0 ? data.getValue()[0].amount : "-"}`,
    },
    {
      header: "Status",
      accessorKey: "milk_status",
      cell: (data) => (
        <SelectTable
          value={data.getValue()}
          options={statusOptions}
          triggerClassName={`${statusOptions.find(
            (i) => i.value === data.getValue()
          )?.bgColor!} font-semibold text-neutral-4`}
          onChange={(value) => {
            changeStatus(data.row.original._id, value)
          }}
        />
      ),
    },
    {
      header: "Aksi",
      accessorKey: "animal_id._id",
      cell: (data) => <FormEditMilk curr={data.row.original} />,
    },
  ]

  return columns
}

export const milkHistoryColumns: ColumnDef<any, any>[] = [
  {
    header: "Tanggal",
    accessorKey: "income_created_at",
    cell: (data) => shortDateFormatter(new Date(data.getValue())),
  },
  { header: "Susu (L)", accessorKey: "milk_total" },
  {
    header: "Harga perliter (Rp)",
    accessorKey: "milk_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
  {
    header: "Total (Rp)",
    accessorKey: "income_total",
    cell: (data) => formatRupiah(data.getValue()),
  },
  { header: "Pembeli", accessorKey: "buyer" },
]
