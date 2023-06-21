import { ColumnDef } from "@tanstack/react-table"

import { cn, longDateFormatter } from "@/lib/utils"

const categoryBadges = {
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
            cat.className
          )}
        >
          {cat.name}
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
