import { Icons } from "./Icons"

interface IProps {
  className: string
}

export default function Loader({ className }: IProps) {
  return (
    <div className={className}>
      <Icons.loader className="animate-spin stroke-primary-4" />
    </div>
  )
}
