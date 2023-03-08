'use client'
import formatRupiah from '@/utils/formatRupiah'
import clsx from 'clsx'
import { Field, useField, useFormikContext } from 'formik'
import { useState } from 'react'
import { Eye, EyeSlash } from './Icons'

interface IProps {
  label: string
  name: string
  isSecured?: boolean
  disabled?: boolean
  rupiah?: boolean
}

export default function InputText(props: IProps) {
  const { name, ...rest } = props
  const [field, meta] = useField({ name })

  return (
    <div>
      <div className="relative">
        <Field as={Input} {...field} {...rest} />
      </div>
      {(meta.touched || meta.error) && (
        <span className="text-[10px] text-error">{meta.error}</span>
      )}
    </div>
  )
}

const Input = (props: IProps) => {
  const { label, name, isSecured, disabled, rupiah } = props
  const [showPassword, setShowPassword] = useState(false)
  const [field, meta] = useField({ name })
  const { isSubmitting } = useFormikContext()
  const defaultValue = rupiah ? formatRupiah(meta.value, 'prefix') : field.value

  const formatNumber = (value: string) => {
    const stringNum = value?.replace('Rp ', '').split('.').join()
    const number = parseInt(stringNum)
    console.log(number)

    return number
  }

  return (
    <>
      <input
        id={label}
        type={isSecured ? (showPassword ? 'text' : 'password') : 'text'}
        defaultValue={defaultValue}
        value={rupiah ? formatRupiah(field.value, 'prefix') : field.value}
        className={clsx(
          'peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4',
          meta?.error ? 'border-error' : 'border-neutral-4'
        )}
        placeholder=" "
        onChange={(e) => {
          field.onChange({ target: { value: e.target.value, name } })
        }}
        disabled={isSubmitting || disabled}
      />
      <label
        htmlFor={label}
        className={clsx(
          'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
          meta?.error ? 'text-error' : 'text-neutral-4'
        )}
      >
        {label}
      </label>
      {isSecured && (
        <button
          type="button"
          className={clsx('absolute inset-y-0 right-0 mr-4')}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeSlash
              className={meta?.error ? 'stroke-error' : 'stroke-neutral-4'}
            />
          ) : (
            <Eye
              className={meta?.error ? 'stroke-error' : 'stroke-neutral-4'}
            />
          )}
        </button>
      )}
    </>
  )
}
