'use client'
import { FC } from 'react'
import SimpleBar from 'simplebar-react'

interface GoatsDiagramProps {
  data: any
}

const GoatsDiagram: FC<GoatsDiagramProps> = ({ data }) => {
  return (
    <div>
      <div className="my-3 text-center text-3xl font-semibold">
        {data?.data?.goatTotal}
      </div>
      {data?.data?.goatTypes.length > 0 && (
        <span className="mb-2 text-[10px] uppercase text-neutral-4">
          jenis kambing
        </span>
      )}
      <SimpleBar className="max-h-28">
        {data?.data?.goatTypes.map((item: any) => (
          <div key={item.type} className="mb-3">
            <div className="flex justify-between text-[10px] font-medium">
              <p>{item?.type}</p>
              <p>{item?.value}</p>
            </div>
            <div className="relative mt-1 h-1 bg-neutral-2">
              <div className="absolute h-1 w-1/2 bg-primary-4" />
            </div>
          </div>
        ))}
      </SimpleBar>
    </div>
  )
}

export default GoatsDiagram
