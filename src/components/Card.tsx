import clsx from 'clsx'

interface IProps {
  children: React.ReactNode
  className?: string
}

export default function Card(props: IProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-neutral-2 bg-white p-6',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
