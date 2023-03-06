import clsx from 'clsx'
import { Field, useField, useFormikContext } from 'formik'
import { forwardRef, LegacyRef } from 'react'
import DatePicker from 'react-datepicker'
import { Calendar } from './Icons'

interface IProps {
  name: string
  label: string
}

export default function InputDate(props: IProps) {
  const { name, label, ...rest } = props
  const [field] = useField({ name })

  return <Field label={label} as={DateField} {...field} {...rest} />
}

const DateField = (props: IProps) => {
  const { name, label } = props
  const [field, meta] = useField({ name })
  const { isSubmitting } = useFormikContext()

  const CustomInput = forwardRef(function func(
    { value, onClick }: any,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) {
    return (
      <div>
        <div className="relative" ref={ref} onClick={onClick}>
          <input
            id={label}
            className={clsx(
              'peer block w-full appearance-none rounded-lg border px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0',
              meta.error
                ? 'disabled:border-error'
                : 'disabled:border-neutral-4',
              isSubmitting
                ? 'disabled:bg-[#ebebeb] disabled:text-neutral-4'
                : 'bg-white'
            )}
            placeholder=" "
            defaultValue={value}
            disabled
          />
          <label
            htmlFor={label}
            className={clsx(
              'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
              meta.error ? 'text-error' : 'text-neutral-4'
            )}
          >
            {label}
          </label>
          <div className="absolute inset-y-0 right-0 grid place-items-center pr-2.5">
            <Calendar
              className={meta.error ? 'stroke-error' : 'stroke-neutral-4'}
            />
          </div>
        </div>
        {(meta.touched || meta.error) && (
          <span className="text-[10px] text-error">{meta.error}</span>
        )}
      </div>
    )
  })

  return (
    <div>
      <DatePicker
        name={name}
        showPopperArrow={false}
        selected={meta.value}
        onChange={(value) => field.onChange({ target: { value, name } })}
        customInput={<CustomInput />}
        calendarClassName="z-50"
      />
    </div>
  )
}
