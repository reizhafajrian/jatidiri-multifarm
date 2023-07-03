import { useController, useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"

import { Icons } from "./Icons"
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
} from "./select"

interface IProps {
  name: string
  label: string
  isLoading?: boolean
  options: { name: string; value: string }[] | undefined
  disabled?: boolean
}

export default function InputSelect({
  name,
  label,
  options,
  isLoading,
  disabled,
}: IProps) {
  const { control, formState } = useFormContext()
  const { errors, isSubmitting } = formState
  const { field } = useController({ name, control })

  return (
    <div>
      <SelectRoot
        name={name}
        defaultValue={field.value}
        onValueChange={(value: string) => field.onChange(value)}
        disabled={isSubmitting || disabled}
      >
        <div className="relative w-full">
          {field.value && (
            <label
              htmlFor={label}
              className={cn(
                "absolute left-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black",
                errors[name] ? "text-error" : "text-neutral-4"
              )}
            >
              {label}
            </label>
          )}
          <SelectTrigger
            className={cn(
              "peer flex w-full appearance-none justify-between rounded-lg border bg-white p-3  text-sm focus:border-black focus:outline-none focus:ring-0 data-[disabled]:border-neutral-3 data-[disabled]:bg-[#ebebeb]",
              errors[name] ? "border-error" : "border-neutral-4",
              !field.value && "text-neutral-4"
            )}
          >
            <SelectValue
              placeholder={label}
              className={errors[name] ? "text-error" : "text-neutral-4"}
            />
            <SelectIcon>
              <Icons.chevronDown
                className={cn("h-5 w-5", errors[name] && "stroke-error")}
              />
            </SelectIcon>
          </SelectTrigger>
        </div>
        <SelectContent>
          <SelectViewport>
            {isLoading ? (
              <div className="flex h-20 items-center justify-center">
                <Icons.loader className="animate-spin stroke-primary-4" />
              </div>
            ) : options?.length == 0 ? (
              <div className="px-8 py-2 text-sm font-medium text-neutral-4">
                empty list
              </div>
            ) : (
              options?.map(({ name, value }, idx) => (
                <SelectItem key={idx} value={value}>
                  <SelectItemText>{name}</SelectItemText>
                  <SelectItemIndicator>
                    <Icons.check className="h-5 w-5" />
                  </SelectItemIndicator>
                </SelectItem>
              ))
            )}
          </SelectViewport>
        </SelectContent>
      </SelectRoot>
      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  )
}
