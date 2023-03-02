import { useFormikContext } from 'formik'
import Button from './Button'
import Dropzone from './Dropzone'
import InputDate from './InputDate'
import InputSelect from './InputSelect'
import InputText from './InputText'

interface IProps {
  name?: string
  label?: string
  type: string
  options?: string[]
  cancelHandler?: any
  isSecured?: boolean
}

export default function Field(props: IProps) {
  const { name, label, type, options, cancelHandler, isSecured } = props
  const { isSubmitting } = useFormikContext()

  switch (type) {
    case 'input':
      return <InputText name={name!} label={label!} isSecured={isSecured} />
    case 'select':
      return <InputSelect options={options!} name={name!} label={label!} />
    case 'date':
      return <InputDate name={name!} label={label!} />
    case 'file':
      return <Dropzone name={name!} label={label!} />
    case 'submit':
      return (
        <>
          <Button
            onClick={cancelHandler}
            intent="secondary"
            className="w-36 rounded-lg py-2"
          >
            cancel
          </Button>
          <Button
            type="submit"
            className="w-36 rounded-lg py-2"
            disabled={isSubmitting}
          >
            {props.label ?? 'save'}
          </Button>
        </>
      )

    default:
      return null
  }
}
