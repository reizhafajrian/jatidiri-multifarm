import { flexRender } from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/Icons"

interface IProps {
  header: any
  className?: string
}

export default function TH({ header, className }: IProps) {
  return (
    <th
      colSpan={header.colSpan}
      className={cn(
        "border-b border-[#B4B5B6] bg-white p-4 text-left text-xs font-semibold",
        className
      )}
    >
      {header.isPlaceholder ? null : (
        <div
          {...{
            className: header.column.getCanSort()
              ? "cursor-pointer select-none"
              : "",
            onClick: header.column.getToggleSortingHandler(),
          }}
          className="flex items-center gap-4"
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: <Icons.chevronsUpDown className="w-4" />,
            desc: <Icons.chevronsUpDown className="w-4" />,
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
    </th>
  )
}
