import { FC } from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/Icons"
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@/components/ui/Select"

interface IProps {
  name?: string
  value: string
  options: { name: string; value: string; bgColor?: string }[]
  onChange?: (value: string, eartag_code?: string) => void
  triggerClassName: string
  animalEarTag?: string
}

const SelectTable: FC<IProps> = (props) => {
  const { name, value, options, onChange, triggerClassName, animalEarTag } =
    props

  return (
    <SelectRoot
      name={name}
      value={value}
      onValueChange={(e) => onChange && onChange(e, animalEarTag)}
    >
      <SelectTrigger asChild>
        <button
          className={cn(
            "flex min-w-[100px] items-center justify-between gap-3 rounded-md px-2 py-2 outline-none",
            triggerClassName
          )}
        >
          <SelectValue />
          <Icons.chevronDown className="h-4 w-4" />
        </button>
      </SelectTrigger>
      <SelectContent>
        <SelectViewport>
          {options.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              <SelectItemText className="text-white">{name}</SelectItemText>
              <SelectItemIndicator>
                <Icons.check className="h-5 w-5" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </SelectRoot>
  )
}

export default SelectTable
