import { cn } from "@/lib/utils"

interface IProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ className, children }: IProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-2 bg-white p-6",
        className
      )}
    >
      {children}
    </div>
  )
}
