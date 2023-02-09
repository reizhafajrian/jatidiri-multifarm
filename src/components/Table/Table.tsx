'use client'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
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
    <div className="max-w-full">
      <div className="relative overflow-auto whitespace-nowrap rounded-lg text-[#3B3E45] shadow">
        <table className="w-full">
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
                {props.fixedCol === 3 && (
                  <TH
                    header={headerGroup.headers[2]}
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
                {props.fixedCol === 3 && (
                  <TD
                    cell={row.getVisibleCells()[2]}
                    className="sticky left-[200px] min-w-[100px]"
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
