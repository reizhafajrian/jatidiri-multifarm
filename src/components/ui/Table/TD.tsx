import { FC } from "react"
import { flexRender } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

interface IProps {
  cell: any
  className?: string
}

const TD: FC<IProps> = ({ cell, className }) => {
  return (
    <td className={cn("relative bg-white p-4 text-xs", className)}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}

export default TD
