import { useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import SimpleBar from "simplebar-react"

import { shortDateFormatter } from "@/lib/utils"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
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
  const [{
    pageIndex, pageSize
  }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

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

  const onChangeHandler = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    useStore.setState((s) => ({ ...s, weightHistory: undefined }))
  }

  const historyHandler = async () => {
    if (startDate && endDate) {
      setLoading(true)
      await setWeightHistory(animal_id, startDate, endDate)
      setLoading(false)
    }
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
        <div className="space-y-3" tabIndex={0}>
          <InputDate
            name="history_weight_date"
            label="Tanggal"
            selectRange
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeHandler}
          />
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="w-36"
                disabled={loading}
                onClick={() => {
                  setStartDate(undefined)
                  setEndDate(undefined)
                  useStore.setState((s) => ({
                    ...s,
                    weightHistory: undefined,
                  }))
                }}
              >
                CANCEL
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-36"
              isLoading={loading}
              disabled={weightHistory ? true : false}
              onClick={historyHandler}
            >
              SAVE
            </Button>
          </div>

          {weightHistory && (
            <SimpleBar className="max-h-[20rem]">
              <Table
                isLoading={loading}
                data={weightHistory}
                columns={columns}
                fixedCol={0}
                // pageSize={4}
                setPagination={setPagination}
                pagination={{
                  pageIndex,
                  pageSize
                }}
                showAll
              />
            </SimpleBar>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
