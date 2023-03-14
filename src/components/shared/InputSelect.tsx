'use client'
import { Field, useField } from 'formik'
import { FC } from 'react'
import SelectInput from './SelectInput'

interface InputSelectProps {
  name: string
  label: string
  options: { name: string; value: string }[]
}

const InputSelect: FC<InputSelectProps> = ({ name, label, options }) => {
  const [field, meta] = useField({ name })

  return (
    <div>
      <Field
        type="select"
        label={label}
        as={SelectInput}
        options={options}
        {...field}
      />
      {(meta.touched || meta.error) && (
        <span className="text-[10px] text-error">{meta.error}</span>
      )}
    </div>
  )
}

export default InputSelect
