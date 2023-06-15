import { FC, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface IProps {
  children: ReactNode
  className?: string
}

const Card: FC<IProps> = ({ className, children }) => {
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

export default Card
