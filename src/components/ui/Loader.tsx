import { FC } from "react"

import { Icons } from "./Icons"

const Loader: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Icons.loader className="animate-spin stroke-primary-4" />
    </div>
  )
}

export default Loader
