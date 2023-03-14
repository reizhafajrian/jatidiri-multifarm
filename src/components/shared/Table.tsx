'use client'
import { cn } from '@/lib/utils'
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import { FC, useMemo, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import PaginationHandler from './PaginationHandler'
import TD from './TD'
import TH from './TH'

interface TableProps {
  columns: any
  data: any
  fixedCol: number
  isLoading: boolean
}

const Table: FC<TableProps> = (props) => {
  const tData = useMemo<any[]>(
    () => (props.isLoading ? [] : props.data),
    [props.data]
  )
  const tColumns = useMemo<any[]>(() => props.columns, [props.columns])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: tData ?? [{}],
    columns: tColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="max-w-full">
      <div className="max-w-full whitespace-nowrap rounded-lg text-[#3B3E45] shadow">
        <SimpleBar forceVisible="y">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  <th className="sticky left-0 min-w-[50px] border-b border-[#B4B5B6] bg-white p-4 text-left text-xs font-semibold">
                    No
                  </th>
                  <TH
                    header={headerGroup.headers[0]}
                    className={cn(
                      'sticky left-[50px]',
                      props.fixedCol === 3 ? 'min-w-[150px]' : 'pr-3'
                    )}
                  />
                  {props.fixedCol === 3 && (
                    <TH
                      header={headerGroup.headers[1]}
                      className="sticky left-[200px] min-w-[100px]"
                    />
                  )}
                  {headerGroup.headers
                    .slice(
                      props.fixedCol === 3 ? 2 : 1,
                      headerGroup.headers.length
                    )
                    .map((header) => (
                      <TH key={header.id} header={header} />
                    ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {props.isLoading ? (
                <tr className="border-b border-[#DCDFE3] last:border-none">
                  <td
                    className="bg-white p-4 text-xs font-semibold"
                    colSpan={table.getTotalSize()}
                  >
                    Memuat data...
                  </td>
                </tr>
              ) : table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className="border-b border-[#DCDFE3] last:border-none"
                  >
                    <td className="sticky left-0 z-10  min-w-[50px] bg-white p-4 text-xs">
                      {i + 1}
                    </td>
                    <TD
                      cell={row.getVisibleCells()[0]}
                      className={clsx(
                        'sticky left-[50px] z-10',
                        props.fixedCol === 3 ? 'min-w-[150px]' : 'pr-3'
                      )}
                    />
                    {props.fixedCol === 3 && (
                      <TD
                        cell={row.getVisibleCells()[1]}
                        className="sticky left-[200px] z-10 min-w-[100px]"
                      />
                    )}
                    {row
                      .getVisibleCells()
                      .slice(
                        props.fixedCol === 3 ? 2 : 1,
                        row.getVisibleCells().length
                      )
                      .map((cell) => (
                        <TD key={cell.id} cell={cell} />
                      ))}
                  </tr>
                ))
              ) : (
                <tr className="border-b border-[#DCDFE3] last:border-none">
                  <td
                    className="bg-white p-4 text-xs font-semibold"
                    colSpan={table.getTotalSize()}
                  >
                    Data tidak tersedia
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </SimpleBar>
      </div>
      <PaginationHandler table={table} />
    </div>
  )
}

export default Table
