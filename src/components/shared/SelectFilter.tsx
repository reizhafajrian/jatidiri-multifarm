import { FC } from 'react'
import { Check, ChevronDown } from './Icons'
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './Select'

interface SelectFilterProps {
  noTitle?: boolean
  title?: string
  defaultValue?: string
  placeholder?: string
  options: {
    name: string
    value: string
  }[]
  onChange?: (value: string) => void
}

const SelectFilter: FC<SelectFilterProps> = ({
  noTitle,
  title,
  defaultValue,
  placeholder,
  options,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      {!noTitle && (
        <p className="text-sm capitalize text-neutral-4">{title ?? 'show'}:</p>
      )}
      <SelectRoot
        defaultValue={defaultValue ?? options[0].value}
        onValueChange={onChange}
      >
        <SelectTrigger className="flex items-center gap-3 text-sm text-neutral-5 outline-none">
          <SelectValue placeholder={placeholder} />
          <SelectIcon>
            <ChevronDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectViewport>
            {options.map(({ name, value }) => (
              <SelectItem key={value} value={value}>
                <SelectItemText>{name}</SelectItemText>
                <SelectItemIndicator>
                  <Check />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectRoot>
    </div>
  )
}

export default SelectFilter
