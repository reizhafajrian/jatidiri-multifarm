import { cn } from '@/lib/utils'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface TextAreaProps {
  name: string
  label: string
}

const TextArea: FC<TextAreaProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext()

  const className = cn(
    'peer h-32 block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm  focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4',
    errors[name]
      ? 'border-error focus:border-error'
      : 'border-neutral-4 focus:border-black'
  )

  return (
    <div>
      <div className="relative">
        <textarea
          id={label}
          className={className}
          placeholder=" "
          disabled={isSubmitting}
          {...register(name)}
        />
        <label
          htmlFor={label}
          className={cn(
            'absolute top-2 left-1  origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/4 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2',
            errors[name]
              ? 'text-error peer-focus:text-error'
              : 'text-neutral-4 peer-focus:text-black'
          )}
        >
          {label}
        </label>
      </div>
      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  )
}

export default TextArea
