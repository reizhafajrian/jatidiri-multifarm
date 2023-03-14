import { cn } from '@/lib/utils'
import { useField, useFormikContext } from 'formik'
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

interface SelectInputProps {
  name: string
  label: string
  options: { name: string; value: string }[]
}

const SelectInput: FC<SelectInputProps> = ({ name, label, options }) => {
  const [field, meta] = useField({ name })
  const { isSubmitting } = useFormikContext()

  return (
    <SelectRoot
      name={name}
      defaultValue={field.value}
      onValueChange={(value) => {
        field.onChange({ target: { value, name } })
      }}
      disabled={isSubmitting}
    >
      <div className="relative w-full">
        {field.value && (
          <label
            htmlFor={label}
            className={cn(
              'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
              meta.error ? 'text-error' : 'text-neutral-4'
            )}
          >
            {label}
          </label>
        )}
        <SelectTrigger
          className={cn(
            'peer flex w-full appearance-none justify-between rounded-lg border bg-white p-3  text-sm focus:border-black focus:outline-none focus:ring-0 data-[disabled]:border-neutral-3 data-[disabled]:bg-[#ebebeb]',
            meta.error ? 'border-error' : 'border-neutral-4',
            !field.value && 'text-neutral-4'
          )}
        >
          <SelectValue
            placeholder={label}
            className={meta.error ? 'text-error' : 'text-neutral-4'}
          />
          <SelectIcon>
            <ChevronDown />
          </SelectIcon>
        </SelectTrigger>
      </div>
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
  )
}

export default SelectInput
