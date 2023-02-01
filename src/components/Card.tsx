import clsx from 'clsx'

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-[#E3E8EF] bg-white p-6',
        className
      )}
    >
      {children}
    </div>
  )
}
