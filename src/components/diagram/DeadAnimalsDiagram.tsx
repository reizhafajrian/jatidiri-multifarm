'use client'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const ageData = [
  { range: '15 - 20', value: '20' },
  { range: '21 - 30', value: '20' },
  { range: '31 - 40', value: '20' },
  { range: '41+', value: '20' },
]

const data = {
  labels: ['Sapi', 'Kambing', 'Domba'],
  datasets: [
    {
      label: 'die',
      data: [12, 19, 3],
      backgroundColor: ['#40916C', '#775DFE', '#C1E5D5'],
    },
  ],
}

interface DeadAnimalsDiagramProps {}

const DeadAnimalsDiagram: FC<DeadAnimalsDiagramProps> = ({}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <Doughnut
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom' as const,
                align: 'start' as const,
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                },
              },
            },
          }}
          data={data}
        />
      </div>
      <div>
        <span className="mb-2 text-[8px] uppercase text-neutral-4">
          range umur
        </span>
        <div className="space-y-2">
          {ageData.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-[10px] font-medium">
                <p>{item.range}</p>
                <p>{item.value}%</p>
              </div>
              <div className="relative mt-1 h-1 bg-neutral-2">
                <div className="absolute h-1 w-1/2 bg-primary-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeadAnimalsDiagram
