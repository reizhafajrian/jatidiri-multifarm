'use client'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import PaginationHandler from './PaginationHandler'
import TD from './TD'
import TH from './TH'

interface IProps {
  columns: any
  data: any
  fixedCol: number
}

export default function Table(props: IProps) {
  const [tData] = useState(props.data)
  const tColumns = useMemo<ColumnDef<any>[]>(
    () => props.columns,
    [props.columns]
  )
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updated_at', desc: true },
  ])
  const [columnVisibility] = useState<VisibilityState>({ updated_at: false })

  const table = useReactTable({
    data: tData,
    columns: tColumns,
    state: { sorting, columnVisibility },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="max-w-full">
      <div className="max-w-full overflow-x-auto whitespace-nowrap rounded-lg text-[#3B3E45] shadow">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th className="sticky left-0 min-w-[50px] border-b border-[#B4B5B6] bg-white p-4 text-left text-xs font-semibold">
                  No
                </th>
                <TH
                  header={headerGroup.headers[0]}
                  className={clsx(
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
                    props.fixedCol === 3 ? 3 : 2,
                    headerGroup.headers.length
                  )
                  .map((header) => (
                    <TH key={header.id} header={header} />
                  ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, i) => (
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
                    props.fixedCol === 3 ? 3 : 2,
                    row.getVisibleCells().length
                  )
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
