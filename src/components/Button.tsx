import { cva, VariantProps } from 'class-variance-authority'
import { Pencil, Trash } from './Icons'

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

export default function Button(props: ButtonProps) {
  const { children, intent, className, ...rest } = props
  return (
    <button className={buttonClasses({ intent, className })} {...rest}>
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
          'w-36',
          'py-2',
          'bg-primary-4',
          'text-white',
          'border-primary-4',
          'rounded-[10px]',
          'hover:bg-primary-5',
          'hover:border-primary-5',
        ],
        secondary: [
          'w-36',
          'py-2',
          'bg-white',
          'text-black',
          'border-neutral-3',
          'rounded-[10px]',
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
