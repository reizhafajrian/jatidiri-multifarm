import { Calendar } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import { FC, forwardRef, LegacyRef } from 'react'
import DatePicker from 'react-datepicker'
import { useController, useFormContext } from 'react-hook-form'

interface InputDateProps {
  name: string
  label: string
  selectRange?: boolean
  startDate?: Date
  endDate?: Date
  onChange?: any
}

const InputDate: FC<InputDateProps> = ({
  name,
  label,
  selectRange,
  startDate,
  endDate,
  onChange,
}) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext()

  const { field } = useController({ name, control })

  const CustomInput = forwardRef(function func(
    { value, onClick }: any,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) {
    return (
      <div>
        <div className="relative" ref={ref} onClick={onClick}>
          <input
            id={label}
            className={cn(
              'peer block w-full appearance-none rounded-lg border px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0',
              errors[name]
                ? 'disabled:border-error'
                : 'disabled:border-neutral-4',
              isSubmitting ? 'border-neutral-3 bg-[#ebebeb]' : 'bg-white'
            )}
            placeholder=" "
            defaultValue={value}
            disabled
          />
          <label
            htmlFor={label}
            className={cn(
              'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
              errors[name] ? 'text-error' : 'text-neutral-4'
            )}
          >
            {label}
          </label>
          <div className="absolute inset-y-0 right-0 grid place-items-center pr-2.5">
            <Calendar
              className={cn(
                'h-6 w-6',
                errors[name] ? 'stroke-error' : 'stroke-neutral-4'
              )}
            />
          </div>
        </div>
        <span className="text-[10px] text-error">
          {errors[name]?.message?.toString()}
        </span>
      </div>
    )
  })

  return (
    <div>
      <DatePicker
        name={name}
        showPopperArrow={false}
        selected={field.value && new Date(field.value)}
        onChange={selectRange ? onChange : (value) => field.onChange(value)}
        customInput={<CustomInput />}
        calendarClassName="z-50"
        startDate={startDate}
        endDate={endDate}
        selectsRange={selectRange}
      />
    </div>
  )
}

export default InputDate
