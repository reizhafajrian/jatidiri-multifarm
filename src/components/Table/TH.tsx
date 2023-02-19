import { flexRender } from '@tanstack/react-table'
import clsx from 'clsx'
import { ChevronUpDown } from '../Icons'

interface IProps {
  header: any
  className?: string
}

export default function TH(props: IProps) {
  const { header, className } = props

  return (
    <th
      colSpan={header.colSpan}
      className={clsx(
        'border-b border-[#B4B5B6] bg-white p-4 text-left text-xs font-semibold',
        className
      )}
    >
      {header.isPlaceholder ? null : (
        <div
          {...{
            className: header.column.getCanSort()
              ? 'cursor-pointer select-none'
              : '',
            onClick: header.column.getToggleSortingHandler(),
          }}
          className="flex items-center gap-4"
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: <ChevronUpDown />,
            desc: <ChevronUpDown />,
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
    </th>
  )
}
