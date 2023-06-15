import { FC } from "react"

import { Icons } from "@/components/ui/Icons"

interface IProps {
  animal: string
  undefinedClusterTotal: number
}

const AlertCluster: FC<IProps> = ({ animal, undefinedClusterTotal }) => {
  return (
    <div className="my-8 flex gap-5 bg-warning/30 px-5 py-3">
      <Icons.exclamationTriangle />
      <div className="space-y-2">
        <p className="font-semibold">
          {undefinedClusterTotal} {animal} belum masuk kandang
        </p>
        <p className="text-xs">
          Segera masukan {animal} ke kandang melalui halaman
          <span className="font-semibold"> Cluster</span>
        </p>
      </div>
    </div>
  )
}

export default AlertCluster
