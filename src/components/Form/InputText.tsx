import clsx from 'clsx'

interface IProps {
  label: string
  className?: string
}

export default function InputText(
  props: IProps & React.HTMLProps<HTMLInputElement>
) {
  const { label, className, ...rest } = props

  return (
    <div className="relative">
      <input
        id={label}
        className={clsx(
          className,
          'peer block w-full appearance-none rounded-lg border border-neutral-4 bg-white px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0 disabled:border-neutral-3 disabled:bg-[#ebebeb] disabled:text-neutral-4'
        )}
        placeholder=" "
        {...rest}
      />
      <label
        htmlFor={label}
        className="absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-neutral-4 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black"
      >
        {label}
      </label>
    </div>
  )
}
