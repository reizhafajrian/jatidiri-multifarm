import { cva, VariantProps } from 'class-variance-authority'
import { Pencil, Trash } from './Icons'

interface IProps {
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: any
}

export interface ButtonProps
  extends IProps,
    VariantProps<typeof buttonClasses> {}

export default function Button(props: ButtonProps) {
  const { children, intent, className, type, disabled, onClick } = props
  return (
    <button
      type={type ?? 'button'}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses({ intent, className })}
    >
      {intent === 'edit' ? (
        <Pencil />
      ) : intent === 'delete' ? (
        <Trash />
      ) : (
        children
      )}
    </button>
  )
}

const buttonClasses = cva(
  [
    'flex',
    'justify-center',
    'gap-1',
    'border',
    'text-xs',
    'uppercase',
    'font-semibold',
    'hover:scale-105',
    'active:scale-100',
    'transition',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-primary-4',
          'text-white',
          'border-primary-4',
          'hover:bg-primary-5',
          'hover:border-primary-5',
        ],
        secondary: [
          'bg-white',
          'text-black',
          'border-neutral-3',
          'hover:bg-neutral-3',
        ],
        edit: [
          'w-6',
          'h-6',
          'bg-primary-4',
          'border-primary-4',
          'rounded-lg',
          'grid',
          'place-items-center',
        ],
        delete: [
          'w-6',
          'h-6',
          'bg-[#E15E52]',
          'border-[#E15E52]',
          'rounded-lg',
          'grid',
          'place-items-center',
        ],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)
