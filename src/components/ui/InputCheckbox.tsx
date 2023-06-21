import { FC } from "react"

interface IProps {
  name?: string
  label: string
  defaultChecked?: boolean
  onChange?: any
}

const InputCheckbox: FC<IProps> = (props) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={props.label}
        name={props.name}
        className="h-4 w-4 accent-primary-4"
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}

export default InputCheckbox
