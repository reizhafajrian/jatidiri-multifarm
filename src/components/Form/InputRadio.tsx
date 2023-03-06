interface IProps {
  label: string
}

export default function InputRadio(
  props: IProps & React.HTMLProps<HTMLInputElement>
) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        name="animal_type"
        id={props.label}
        className="h-4 w-4 accent-primary-4 transition duration-200  focus:outline-none"
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}
