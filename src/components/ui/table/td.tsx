import { flexRender } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

interface IProps {
  cell: any
  className?: string
}

export default function TD({ cell, className }: IProps) {
  return (
    <td className={cn("relative bg-white p-4 text-xs", className)}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
