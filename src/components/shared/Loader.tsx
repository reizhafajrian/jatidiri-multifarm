import { Loader2 } from 'lucide-react'
import { FC } from 'react'

interface LoaderProps {
  className: string
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <Loader2 className="animate-spin stroke-primary-4" />
    </div>
  )
}

export default Loader
