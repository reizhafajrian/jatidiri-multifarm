"use client"

import { FC } from "react"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface DeadAnimalsDiagramProps {
  data: any
}

const DeadAnimalsDiagram: FC<DeadAnimalsDiagramProps> = ({ data }) => {
  const getPercentage = (range: string) => {
    const deadTotal = data?.cow.total + data?.goat.total + data?.sheep.total

    let cow = data?.age_range.cow.count[range]
    let goat = data?.age_range.goat.count[range]
    let sheep = data?.age_range.sheep.count[range]

    return ((cow + goat + sheep) / deadTotal) * 100
  }

  const ageData = [
    { range: "0 - 2", value: getPercentage("0-2") },
    { range: "3 - 5", value: getPercentage("3-5") },
    { range: "6 - 8", value: getPercentage("6-8") },
    { range: "8+", value: getPercentage("8+") },
  ]

  const diedData = {
    labels: ["Sapi", "Kambing", "Domba"],
    datasets: [
      {
        label: "die",
        data: [data?.cow.total, data?.goat.total, data?.sheep.total],
        backgroundColor: ["#40916C", "#775DFE", "#C1E5D5"],
      },
    ],
  }

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <Doughnut
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom" as const,
                align: "start" as const,
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                },
              },
            },
          }}
          data={diedData}
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
                <p>
                  {!isNaN(item.value) && item.value !== Infinity
                    ? `${item.value}%`
                    : "0%"}
                </p>
              </div>
              <div className="relative mt-1 h-1 bg-neutral-2">
                <div
                  className={`absolute h-1 bg-primary-4`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeadAnimalsDiagram
