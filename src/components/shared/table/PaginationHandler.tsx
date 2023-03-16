import { Table } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FC } from 'react'

interface PaginationHandlerProps {
  table: Table<any>
}

const PaginationHandler: FC<PaginationHandlerProps> = ({ table }) => {
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
        <ChevronLeft />
      </button>
      {[...Array(table.getPageCount())].map((_, i) => (
        <button
          key={i}
          className="grid h-6 w-6 place-items-center rounded-lg text-xs disabled:bg-primary-4 disabled:text-white"
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
        <ChevronRight />
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

export default PaginationHandler
