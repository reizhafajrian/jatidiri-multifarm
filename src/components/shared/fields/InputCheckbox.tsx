interface IProps {
  name?: string
  label: string
  defaultChecked?: boolean
  onChange?: any
}

export default function InputCheckbox(props: IProps) {
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
