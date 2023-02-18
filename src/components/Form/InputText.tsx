'use client'
import EyesIcon from '@/assets/icons/eyes.svg'
import clsx from 'clsx'
import { useState } from 'react'

interface IProps {
  label: string
  className?: string
  errorMsg?: string
  isSecured?: boolean
}

export default function InputText(
  props: IProps & React.HTMLProps<HTMLInputElement>
) {
  const { label, className, errorMsg, isSecured, ...rest } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className="relative">
        <input
          id={label}
          type={isSecured ? (showPassword ? 'text' : 'password') : 'text'}
          className={clsx(
            className,
            'peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4',
            errorMsg ? 'border-[#CE0000]' : 'border-neutral-4'
          )}
          placeholder=" "
          {...rest}
        />
        <label
          htmlFor={label}
          className={clsx(
            'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
            errorMsg ? 'text-[#CE0000]' : 'text-neutral-4'
          )}
        >
          {label}
        </label>
        {isSecured && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 mr-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyesIcon
              className={errorMsg ? 'stroke-[#CE0000]' : 'stroke-neutral-4'}
            />
          </button>
        )}
      </div>
      {errorMsg && (
        <span className="text-[10px] text-[#CE0000]">{errorMsg}</span>
      )}
    </>
  )
}
