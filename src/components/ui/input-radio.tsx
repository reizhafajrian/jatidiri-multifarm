import { useFormContext } from "react-hook-form"

interface IProps {
  label: string
  name: string
  value: string
}

export default function InputRadio({ label, name, value }: IProps) {
  const { register, formState } = useFormContext()
  const { errors, isSubmitting } = formState

  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={label}
        className="h-4 w-4 accent-primary-4 transition duration-200 focus:outline-none"
        value={value}
        disabled={isSubmitting}
        {...register(name)}
      />
      <label
        htmlFor={label}
        className={errors[name] ? "text-error" : "text-neutral-4"}
      >
        {label}
      </label>
    </div>
  )
}
