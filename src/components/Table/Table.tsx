'use client'
import SortIcon from '@/assets/icons/sort.svg'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import { useMemo, useState } from 'react'

export default function Table({ columns, data }: { columns: any; data: any }) {
  const [tData] = useState(data)
  const tColumns = useMemo<ColumnDef<any>[]>(() => columns, [columns])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: tData,
    columns: tColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="w-fit max-w-full">
      <div className="relative overflow-auto whitespace-nowrap rounded-lg text-[#3B3E45] shadow">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <TH
                  header={headerGroup.headers[0]}
                  className="sticky left-0 min-w-[50px]"
                />
                <TH
                  header={headerGroup.headers[1]}
                  className="sticky left-[50px] min-w-[150px]"
                />
                <TH
                  header={headerGroup.headers[2]}
                  className="sticky left-[200px] min-w-[100px]"
                />
                {headerGroup.headers
                  .slice(3, headerGroup.headers.length)
                  .map((header) => (
                    <TH key={header.id} header={header} />
                  ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#DCDFE3] last:border-none"
              >
                <TD
                  cell={row.getVisibleCells()[0]}
                  className="sticky left-0 min-w-[50px]"
                />
                <TD
                  cell={row.getVisibleCells()[1]}
                  className="sticky left-[50px] min-w-[150px]"
                />
                <TD
                  cell={row.getVisibleCells()[2]}
                  className="sticky left-[200px] min-w-[100px]"
                />
                {row
                  .getVisibleCells()
                  .slice(3, row.getVisibleCells().length)
                  .map((cell) => (
                    <TD key={cell.id} cell={cell} />
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationHandler table={table} />
    </div>
  )
}

const TH = ({ header, className }: { header: any; className?: string }) => {
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
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: <SortIcon className="ml-4 inline" />,
            desc: <SortIcon className="ml-4 inline" />,
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
    </th>
  )
}

const TD = ({ cell, className }: { cell: any; className?: string }) => {
  return (
    <td className={clsx('bg-white p-4 text-xs', className)}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}

const PaginationHandler = ({ table }: any) => {
  return (
    <div className="mt-5 flex items-center justify-center gap-2">
      <button
        className="px-3 py-2 text-xs disabled:text-black/30"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        First
      </button>
      <button
        className="px-3 py-2 disabled:text-black/30"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </button>
      {[...Array(table.getPageCount())].map((val, i) => (
        <button
          key={i}
          className="rounded-lg px-3 py-2 text-xs disabled:bg-primary-4 disabled:text-white"
          disabled={table.getState().pagination.pageIndex === i}
          onClick={() => table.setPageIndex(i)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-3 py-2 disabled:text-black/30"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </button>
      <button
        className="px-3 py-2 text-xs disabled:text-black/30"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        Last
      </button>
    </div>
  )
}
