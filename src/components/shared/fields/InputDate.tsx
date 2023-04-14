import { Calendar } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import DatePicker from 'react-datepicker'
import { useController, useFormContext } from 'react-hook-form'

interface InputDateProps {
  name: string
  label: string
  selectRange?: boolean
  startDate?: Date
  endDate?: Date
  onChange?: any
  disabled?: boolean
}

const InputDate: FC<InputDateProps> = (props) => {
  const { name, label, selectRange, startDate, endDate, onChange, disabled } =
    props

  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext()
  const { field } = useController({ name, control })

  return (
    <div>
      <div className="relative">
        <DatePicker
          id={name}
          placeholderText=" "
          name={name}
          showPopperArrow={false}
          selected={field.value && new Date(field.value)}
          onChange={selectRange ? onChange : (value) => field.onChange(value)}
          calendarClassName="z-50"
          startDate={startDate}
          endDate={endDate}
          selectsRange={selectRange}
          className={cn(
            'peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm  focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4',
            errors[name]
              ? 'border-error focus:border-error'
              : 'border-neutral-4 focus:border-black'
          )}
          disabled={isSubmitting || disabled}
        />
        <label
          htmlFor={name}
          className={cn(
            'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
            field?.value || startDate || endDate
              ? ''
              : 'top-1/2 -translate-y-1/2 scale-100',
            errors[name] ? 'text-error' : 'text-neutral-4'
          )}
        >
          {label}
        </label>
        <label
          htmlFor={name}
          className="absolute inset-y-0 right-0 grid place-items-center pr-2.5"
        >
          <Calendar
            className={cn(
              'h-6 w-6',
              errors[name] ? 'stroke-error' : 'stroke-neutral-4'
            )}
          />
        </label>
      </div>
      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  )
}

export default InputDate
