import { flexRender } from '@tanstack/react-table'
import clsx from 'clsx'

interface IProps {
  cell: any
  className?: string
}

export default function TD(props: IProps) {
  const { cell, className } = props

  return (
    <td className={clsx('relative bg-white p-4 text-xs', className)}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
