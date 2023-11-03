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
    accessorKey: "origin_female",
  },
  {
    header: "Asal Pejantan",
    accessorKey: "origin_male",
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
  { header: "Keterangan", accessorKey: "description" },

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
    header: "Asal Jantan",
    accessorKey: "origin_male",
  },
  {
    header: "Marga",
    accessorKey: "clan",
    cell: (data) => data?.getValue() ? data?.getValue()?.map((res: any) => res.prefix).join(",") : '-',
  },
]

export const maleTColumns: ColumnDef<any, any>[] = [
  ...animalTColumns,
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
    header: "Asal Supplier",
    accessorKey: "supplier",
  },
  {
    header: "Harga Beli",
    accessorKey: "purchase_price",
    cell: (data) => formatRupiah(data.getValue()),
  },

]

export const femaleTColumns: ColumnDef<any, any>[] = [
  ...animalTColumns,
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

interface ICategory {
  [index: string]: { name: string; className: string }
  vaccine: { name: string; className: string }
  vitamin: { name: string; className: string }
  anthelmintic: { name: string; className: string }
}

const categoryBadges: ICategory = {
  vaccine: {
    name: "Vaksin",
    className: "bg-[#EFFCFF] text-[#5DCCEF]",
  },
  vitamin: {
    name: "Vitamin",
    className: "bg-[#F3F3FF] text-[#5D5FEF]",
  },
  anthelmintic: {
    name: "Obat Cacing",
    className: "bg-[#FFEFF7] text-[#EF5DA8]",
  },
  feed: {
    name: "Pakan",
    className: "bg-[#F3F3FF] text-[#5D5FEF]",
  }
}

export const detailAnimalTColumns: ColumnDef<any, any>[] = [
  {
    header: "Tanggal",
    accessorKey: "date",
    cell: (data) => longDateFormatter(new Date(data.getValue())),
  },
  {
    header: "Kategori",
    accessorKey: "category",
    cell: (data) => {
      const cat = categoryBadges[data.getValue()]
      return (
        <div
          className={cn(
            "w-fit rounded px-2 py-[2px] text-[10px] font-medium",
            cat?.className
          )}
        >
          {cat?.name}
        </div>
      )
    },
  },
  {
    header: "Jenis",
    accessorKey: "type",
    cell: (data) => <div className="capitalize">{data.getValue()}</div>,
  },
  {
    header: "Qty",
    accessorKey: "quantity",
  },
]
