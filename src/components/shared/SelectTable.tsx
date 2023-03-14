import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { FC } from 'react'
import {
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './Select'

interface SelectTableProps {
  name?: string
  value: string
  options: {
    name: string
    value: string
    bgColor?: string
  }[]
  onChange?: (value: string) => void
  triggerBackground: string
  small?: boolean
}

const SelectTable: FC<SelectTableProps> = ({
  name,
  value,
  options,
  onChange,
  triggerBackground,
  small,
}) => {
  return (
    <SelectRoot name={name} defaultValue={value} onValueChange={onChange}>
      <SelectTrigger asChild>
        <button
          className={cn(
            'flex items-center justify-between rounded-md px-2 py-2 outline-none',
            triggerBackground,
            small ? 'w-20' : 'w-36'
          )}
        >
          <SelectValue />
          <ChevronDown className="h-4 w-4" />
        </button>
      </SelectTrigger>
      <SelectContent>
        <SelectViewport>
          {options.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              <SelectItemText>{name}</SelectItemText>
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </SelectRoot>
  )
}

export default SelectTable
