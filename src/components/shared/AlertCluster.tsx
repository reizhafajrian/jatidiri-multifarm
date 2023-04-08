import { FC } from 'react'
import { ExclamationTriangle } from './Icons'

interface AlertClusterProps {
  animal: string
  undefinedClusterTotal: number
}

const AlertCluster: FC<AlertClusterProps> = ({
  animal,
  undefinedClusterTotal,
}) => {
  return (
    <div className="my-8 flex gap-5 bg-warning/30 px-5 py-3">
      <ExclamationTriangle />
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
