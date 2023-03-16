'use client'
import { useFormikContext } from 'formik'
import { Button } from './Button'
import InputCertificate from './fields/InputCertificate'
import InputDate from './fields/InputDate'
import InputSelect from './fields/InputSelect'
import InputText from './fields/InputText'

interface IProps {
  name?: string
  label?: string
  type: string
  options?: { name: string; value: string }[]
  cancelHandler?: any
  isSecured?: boolean
  className?: string
  disabled?: boolean
  rupiah?: boolean
}

export default function Field(props: IProps) {
  const {
    name,
    label,
    type,
    options,
    cancelHandler,
    isSecured,
    className,
    disabled,
    rupiah,
  } = props
  const { isSubmitting } = useFormikContext()

  switch (type) {
    case 'input':
      return <InputText name={name!} label={label!} isSecured={isSecured} />
    case 'select':
      return <InputSelect options={options!} name={name!} label={label!} />
    case 'date':
      return <InputDate name={name!} label={label!} />
    case 'file':
      return <InputCertificate name={name!} label={label!} />
    case 'submit':
      return (
        <>
          {cancelHandler && (
            <Button
              type="button"
              variant="outline"
              onClick={cancelHandler}
              disabled={isSubmitting}
              className="w-36 uppercase"
            >
              cancel
            </Button>
          )}
          <Button
            type="submit"
            isLoading={isSubmitting}
            className="w-36 uppercase"
          >
            {props.label ?? 'save'}
          </Button>
        </>
      )

    default:
      return null
  }
}
