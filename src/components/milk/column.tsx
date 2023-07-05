import { ColumnDef } from "@tanstack/react-table"

import { shortDateFormatter } from "@/lib/utils"

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
    { header: "No Eartag", accessorKey: "animal_id.eartag_code" },
    { header: "Jenis", accessorKey: "animal_id.type" },
    { header: "Asal", accessorKey: "animal_id.origin" },
    { header: "Berat", accessorKey: "animal_id.weight" },
    { header: "Usia", accessorKey: "animal_id.age" },
    {
      header: "Susu",
      accessorKey: "amount",
      cell: (data) => `${data.getValue() !== 0 ? data.getValue() + " L" : "0"}`,
    },
    {
      header: "Status",
      accessorKey: "animal_id.milk_status",
      cell: (data) => (
        <SelectTable
          value={data.getValue()}
          options={statusOptions}
          triggerClassName={`${statusOptions.find(
            (i) => i.value === data.getValue()
          )?.bgColor!} font-semibold text-neutral-4`}
          onChange={(value) => {
            changeStatus(data.row.original.animal_id._id, value)
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
  { header: "Harga perliter (Rp)", accessorKey: "milk_price" },
  { header: "Total (Rp)", accessorKey: "income_total" },
  { header: "Pembeli", accessorKey: "buyer" },
]
