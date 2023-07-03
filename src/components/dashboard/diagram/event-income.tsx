"use client"

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"

import { formatRupiah } from "@/lib/utils"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function EventIncomeDiagram() {
  const data = {
    labels: ["Valentine Day", "New Year", "Chinese New Year"],
    datasets: [
      {
        data: [12, 19, 3],
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
          data={data}
          className="font-sans"
        />
      </div>
      <div className="grid items-center">
        <div>
          <span className="mb-2 text-[8px] uppercase text-neutral-4">
            top revenue
          </span>
          <p className="mb-3">Chinese New Year Day</p>
          <p className="font-light">
            <span className="text-3xl font-medium">62.34</span>%
          </p>
          <p className="text-[10px] text-neutral-4">
            {formatRupiah("230000000")}
          </p>
        </div>
      </div>
    </div>
  )
}
