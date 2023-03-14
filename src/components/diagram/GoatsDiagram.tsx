'use client'
import { FC } from 'react'
import SimpleBar from 'simplebar-react'

interface GoatsDiagramProps {}

const GoatsDiagram: FC<GoatsDiagramProps> = ({}) => {
  const data = [
    { type: 'Kambing 1', value: '80' },
    { type: 'Kambing 2', value: '80' },
    { type: 'Kambing 3', value: '80' },
    { type: 'Kambing 4', value: '80' },
    { type: 'Kambing 5', value: '80' },
  ]

  return (
    <div>
      <div className="my-3 text-center text-3xl font-semibold">100</div>
      <span className="mb-2 text-[10px] uppercase text-neutral-4">
        jenis kambing
      </span>
      <SimpleBar className="max-h-28">
        {data.map((item, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between text-[10px] font-medium">
              <p>{item.type}</p>
              <p>{item.value}</p>
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
