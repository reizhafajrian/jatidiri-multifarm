import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'
import { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
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
} from '../Select'

interface InputSelectProps {
  name: string
  label: string
  options: { name: string; value: string }[]
}

const InputSelect: FC<InputSelectProps> = ({ name, label, options }) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext()

  const { field } = useController({ name, control })

  return (
    <div>
      <SelectRoot
        name={name}
        defaultValue={field.value}
        onValueChange={(value) => field.onChange(value)}
        disabled={isSubmitting}
      >
        <div className="relative w-full">
          {field.value && (
            <label
              htmlFor={label}
              className={cn(
                'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
                errors[name] ? 'text-error' : 'text-neutral-4'
              )}
            >
              {label}
            </label>
          )}
          <SelectTrigger
            className={cn(
              'peer flex w-full appearance-none justify-between rounded-lg border bg-white p-3  text-sm focus:border-black focus:outline-none focus:ring-0 data-[disabled]:border-neutral-3 data-[disabled]:bg-[#ebebeb]',
              errors[name] ? 'border-error' : 'border-neutral-4',
              !field.value && 'text-neutral-4'
            )}
          >
            <SelectValue
              placeholder={label}
              className={errors[name] ? 'text-error' : 'text-neutral-4'}
            />
            <SelectIcon>
              <ChevronDown
                className={cn('h-5 w-5', errors[name] && 'stroke-error')}
              />
            </SelectIcon>
          </SelectTrigger>
        </div>
        <SelectContent>
          <SelectViewport>
            {options.map(({ name, value }) => (
              <SelectItem key={value} value={value}>
                <SelectItemText>{name}</SelectItemText>
                <SelectItemIndicator>
                  <Check className="h-5 w-5" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectRoot>
      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  )
}

export default InputSelect
