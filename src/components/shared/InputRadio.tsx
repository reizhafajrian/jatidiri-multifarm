import { useField, useFormikContext } from 'formik'

interface IProps {
  label: string
  name: string
  value: string
}

export default function InputRadio(props: IProps) {
  const { name, label, value } = props
  const [field, meta] = useField({ name })
  const { isSubmitting } = useFormikContext()

  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={label}
        name={name}
        className="h-4 w-4 accent-primary-4 transition duration-200  focus:outline-none"
        value={value}
        disabled={isSubmitting}
        onChange={(e) => {
          field.onChange({ target: { value: e.target.checked, name } })
        }}
      />
      <label
        htmlFor={label}
        className={meta?.error ? 'text-error' : 'text-neutral-4'}
      >
        {label}
      </label>
    </div>
  )
}
