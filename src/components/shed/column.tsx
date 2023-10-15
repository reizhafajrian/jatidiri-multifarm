import { ColumnDef } from "@tanstack/react-table"

import { longDateFormatter } from "@/lib/utils"

export const shedAnimalcolumns: ColumnDef<any, any>[] = [
  {
    header: "Tgl Tiba",
    accessorKey: "arrival_date",
    cell: (data: any) => longDateFormatter(new Date(data.getValue())),
  },
  { header: "No Eartag", accessorKey: "eartag_code" },
  { header: "marga", accessorKey: "parents", cell: (data: any) => data?.getValue()?.prefix?.join(", ") },
  { header: "Keterangan", accessorKey: "description" },
]


export const shedAnimalCempekcolumns: ColumnDef<any, any>[] = [
  {
    header: "Tgl Lahir",
    accessorKey: "birth_date",
    cell: (data: any) => longDateFormatter(new Date(data.getValue())),
  },
  { header: "No Eartag", accessorKey: "eartag_code" },
  { header: "marga", accessorKey: "parents", cell: (data: any) => data?.getValue()?.prefix?.join(", ") },
  { header: "Keterangan", accessorKey: "description" },
]
