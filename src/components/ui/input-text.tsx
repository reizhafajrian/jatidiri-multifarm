import { useState } from "react"
import { useController, useFormContext } from "react-hook-form"
import { NumericFormat } from "react-number-format"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/Icons"

interface IProps {
  name: string
  label?: string
  isSecured?: boolean
  disabled?: boolean
  type?: string
  rupiah?: boolean
}

export default function InputText(props: IProps) {
  const { name, label, isSecured, disabled, type, rupiah } = props
  const [showPassword, setShowPassword] = useState(false)

  const { control, register, formState } = useFormContext()
  const { errors, isSubmitting } = formState
  const { field } = useController({ name, control })

  const className = cn(
    "peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm  focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4",
    errors[name]
      ? "border-error focus:border-error"
      : "border-neutral-4 focus:border-black"
  )

  return (
    <div>
      <div className="relative">
        {type == "number" ? (
          rupiah ? (
            <NumericFormat
              id={name}
              name={field.name}
              onValueChange={({ floatValue }) => field.onChange(floatValue)}
              value={field.value}
              disabled={isSubmitting || disabled}
              className={className}
              placeholder=" "
              valueIsNumericString={true}
              prefix="Rp. "
              thousandsGroupStyle="thousand"
              thousandSeparator=","
            />
          ) : (
            <NumericFormat
              id={name}
              name={field.name}
              onValueChange={({ floatValue }) => field.onChange(floatValue)}
              value={field.value}
              disabled={isSubmitting || disabled}
              className={className}
              placeholder=" "
              valueIsNumericString={true}
              decimalScale={3}
            />
          )
        ) : (
          <input
            id={name}
            type={isSecured ? (showPassword ? "text" : "password") : "text"}
            className={className}
            placeholder=" "
            disabled={isSubmitting || disabled}
            {...register(name)}
          />
        )}
        <label
          htmlFor={name}
          className={cn(
            "absolute left-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2",
            errors[name]
              ? "text-error peer-focus:text-error"
              : "text-neutral-4 peer-focus:text-black"
          )}
        >
          {label}
        </label>
        {isSecured && (
          <button
            type="button"
            className={
              "group absolute inset-y-0 right-0 mr-4 focus:outline-none"
            }
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Icons.eye
                className={
                  errors[name]
                    ? "stroke-error"
                    : "stroke-neutral-4 group-focus:stroke-primary-4"
                }
              />
            ) : (
              <Icons.eyeOff
                className={
                  errors[name]
                    ? "stroke-error"
                    : "stroke-neutral-4 group-focus:stroke-primary-4"
                }
              />
            )}
          </button>
        )}
      </div>
      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  )
}
