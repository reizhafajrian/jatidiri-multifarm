import { ColumnDef } from "@tanstack/react-table"

import { cn, formatRupiah, longDateFormatter } from "@/lib/utils"

export const cempekTColumns: ColumnDef<any, any>[] = [
  {
    header: "Tgl Lahir",
    accessorKey: "birth_date",
    cell: (data) => longDateFormatter(new Date(data.getValue())),
  },
  {
    header: "No Eartag",
    accessorKey: "eartag_code",
  },
  {
    header: "Jenis Cempek",
    accessorKey: "type",
  },
  {
    header: "Jenis Kelamin",
    accessorKey: "gender",
    cell: (data) => (data.getValue() ? "jantan" : "betina"),
  },
  {
    header: "Berat",
    accessorKey: "weight",
  },
  {
    header: "Usia",
    accessorKey: "age",
  },
  {
    header: "Kondisi Lahir",
    accessorKey: "birth_condition",
  },
  {
    header: "Asal Induk",
    accessorKey: "female_parent_origin",
  },
  {
    header: "Asal Pejantan",
    accessorKey: "male_parent_origin",
  },
]

export const animalTColumns: ColumnDef<any, any>[] = [
  {
    header: "Tgl Tiba",
    accessorKey: "arrival_date",
    cell: (data) => longDateFormatter(new Date(data.getValue())),
  },
  {
    header: "No Eartag",
    accessorKey: "eartag_code",
  },
  {
    header: "Tgl Lahir",
    accessorKey: "birth_date",
    cell: (data) => longDateFormatter(new Date(data.getValue())),
  },
  {
    header: "Jenis",
    accessorKey: "type",
  },
  {
    header: "Asal",
    accessorKey: "origin",
  },
  {
    header: "Berat",
    accessorKey: "weight",
  },
  {
    header: "Usia",
    accessorKey: "age",
  },
  {
    header: "Asal Induk",
    accessorKey: "origin_female",
  },
  {
    header: "Pejantan",
    accessorKey: "pejantan",
    cell: (data) => (
      <div
        className={cn(
          "grid h-5 w-12 place-items-center rounded text-xs font-medium",
          data.getValue()
            ? "bg-success-3 text-success-2"
            : "bg-neutral-2 text-neutral-4"
        )}
      >
        {data.getValue() ? "Yes" : "Non"}
      </div>
    ),
  },
  {
    header: "Asal Jantan",
    accessorKey: "origin_male",
  },
  {
    header: "Asal Supplier",
    accessorKey: "supplier",
  },
  {
    header: "Harga Beli",
    accessorKey: "purchase_price",
    cell: (data) => formatRupiah(data.getValue()),
  },
]
