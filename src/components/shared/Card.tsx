import { cn } from '@/lib/utils'
import React, { FC } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-2 bg-white p-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
