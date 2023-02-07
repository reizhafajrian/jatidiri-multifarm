import CalendarIcon from '@/assets/icons/calendar.svg'
import { forwardRef, LegacyRef } from 'react'
import DatePicker from 'react-datepicker'

interface IProps {
  selected: any
  label: string
  onChange: (date: any) => void
}

export default function InputDate(props: IProps) {
  const { selected, label, onChange } = props

  const CustomInput = forwardRef(function func(
    { value, onClick }: any,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) {
    return (
      <div className="relative" ref={ref} onClick={onClick}>
        <input
          id={label}
          className="peer block w-full appearance-none rounded-lg border border-neutral-4 bg-white px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0"
          placeholder=" "
          defaultValue={value}
          disabled
        />
        <label
          htmlFor={label}
          className="absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-neutral-4 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black"
        >
          {label}
        </label>
        <div className="absolute inset-y-0 right-0 grid place-items-center pr-2.5">
          <CalendarIcon className="fill-none stroke-neutral-4" />
        </div>
      </div>
    )
  })

  return (
    <div className="z-50">
      <DatePicker
        showPopperArrow={false}
        selected={selected}
        onChange={onChange}
        customInput={<CustomInput />}
      />
    </div>
  )
}
