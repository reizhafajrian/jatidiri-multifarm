import { cn, formatRupiah } from "@/lib/utils"
import Card from "@/components/ui/card"
import { Icons } from "@/components/ui/Icons"

interface IProps {
  data: {
    icon: any
    title: string
    value: string
  }
  comparison: any
}

export default function DashboardInfoCard({ data, comparison }: IProps) {
  const increased = comparison?.description === "Increased"

  const ArrowIcon = increased ? (
    <Icons.arrowUp className="w-3 stroke-success-1" />
  ) : (
    <Icons.arrowDown className="w-3 stroke-error" />
  )

  return (
    <Card className="relative items-center md:flex">
      <div className="mb-3 mr-6 h-10 w-10 md:h-14 md:w-14">{data.icon}</div>
      <div className="text-neutral-5">
        <h3 className="mb-4 font-medium capitalize">{data.title}</h3>
        <p className="text-2xl font-semibold md:text-[32px]">
          {formatRupiah(data.value)}
        </p>
      </div>
      <div className="absolute right-0 top-0 m-6 md:bottom-0 md:top-auto">
        <p
          className={cn(
            "flex items-center gap-1 rounded-xl px-1 md:px-[10px] md:py-[2px]",
            increased ? "bg-success-3 text-success-2" : "bg-error/20 text-error"
          )}
        >
          {ArrowIcon}
          <span className="text-xs font-medium">
            {comparison?.percentage ?? "0"} %
          </span>
        </p>
      </div>
    </Card>
  )
}
