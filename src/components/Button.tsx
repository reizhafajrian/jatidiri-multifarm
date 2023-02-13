import { cva, VariantProps } from 'class-variance-authority'

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

export default function Button(props: ButtonProps) {
  const { children, intent, className, ...rest } = props
  return (
    <button className={buttonClasses({ intent, className })} {...rest}>
      {children}
    </button>
  )
}

const buttonClasses = cva(
  [
    'py-2',
    'w-36',
    'border',
    'text-xs',
    'uppercase',
    'font-semibold',
    'rounded-[10px]',
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
          'text-neutral-3',
          'border-neutral-3',
          'hover:bg-neutral-3',
          'hover:text-white',
        ],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)
