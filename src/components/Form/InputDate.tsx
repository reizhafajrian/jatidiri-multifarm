import clsx from 'clsx'
import { forwardRef, LegacyRef } from 'react'
import DatePicker from 'react-datepicker'
import { Calendar } from '../Icons'

interface IProps {
  selected: any
  label: string
  onChange: (date: any) => void
  errorMsg?: string
}

export default function InputDate(props: IProps) {
  const { selected, label, onChange, errorMsg } = props

  const CustomInput = forwardRef(function func(
    { value, onClick }: any,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) {
    return (
      <>
        <div className="relative" ref={ref} onClick={onClick}>
          <input
            id={label}
            className={clsx(
              'peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0',
              errorMsg ? 'border-error' : 'border-neutral-4'
            )}
            placeholder=" "
            defaultValue={value}
            disabled
          />
          <label
            htmlFor={label}
            className={clsx(
              'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
              errorMsg ? 'text-error' : 'text-neutral-4'
            )}
          >
            {label}
          </label>
          <div className="absolute inset-y-0 right-0 grid place-items-center pr-2.5">
            <Calendar
              className={errorMsg ? 'stroke-error' : 'stroke-neutral-4'}
            />
          </div>
        </div>
        {errorMsg && (
          <span className="text-[10px] text-[#CE0000]">{errorMsg}</span>
        )}
      </>
    )
  })

  return (
    <div>
      <DatePicker
        showPopperArrow={false}
        selected={selected}
        onChange={onChange}
        customInput={<CustomInput />}
        calendarClassName="z-50"
      />
    </div>
  )
}
