import clsx from 'clsx'
import { useField, useFormikContext } from 'formik'

interface IProps {
  label: string
  name: string
  value: string
}

export default function InputRadio(props: IProps) {
  const { name, label } = props
  const [field, meta] = useField({ name })
  const { isSubmitting } = useFormikContext()

  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={label}
        className={clsx(
          'h-4 w-4 accent-primary-4 transition duration-200  focus:outline-none',
          meta.error && 'border-error'
        )}
        disabled={isSubmitting}
        {...field}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
