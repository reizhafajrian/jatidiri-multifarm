import { useState } from "react"
import { ColumnDef } from "@tanstack/react-table"

import { shortDateFormatter } from "@/lib/utils"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InputDate from "@/components/ui/input-date"
import Table from "@/components/ui/table"

interface IProps {
  animal_id: string
}

export const WeightHistory = ({ animal_id }: IProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [weightHistory, setWeightHistory] = useStore((s) => [
    s.weightHistory,
    s.setWeightHistory,
  ])

  const columns: ColumnDef<any, any>[] = [
    {
      header: "Tanggal",
      accessorKey: "created_at",
      cell: (data) => shortDateFormatter(new Date(data.getValue())),
    },
    { header: "Berat", accessorKey: "value" },
  ]

  // WEIGHT HISTORY
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const historyHandler = async (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    setLoading(true)
    await setWeightHistory(animal_id, start, end)
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Cek History Berat</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>History Berat Hewan</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <InputDate
            name="history_weight_date"
            label="Tanggal"
            selectRange
            startDate={startDate}
            endDate={endDate}
            onChange={historyHandler}
          />
          {startDate && endDate && (
            <div className="max-h-[20rem] overflow-hidden">
              <Table
                isLoading={loading}
                data={weightHistory}
                columns={columns}
                fixedCol={0}
                pageSize={4}
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
