"use client"

import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface IProps {
  data: any
}

export default function DataAnalyticsDiagram({ data }: IProps) {
  const dataAnalytics: ChartData<"bar", number[], string> = {
    labels: ["Total Hewan Aktif"],
    datasets: [
      {
        label: "Sapi",
        data: [data?.cow],
        backgroundColor: "#40916C",
      },
      {
        label: "Kambing",
        data: [data?.goat],
        backgroundColor: "#775DFE",
      },
      {
        label: "Domba",
        data: [data?.sheep],
        backgroundColor: "#C1E5D5",
      },
    ],
  }

  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            align: "start" as const,
            labels: {
              boxWidth: 4,
              boxHeight: 4,
              usePointStyle: true,
            },
          },
        },
      }}
      data={dataAnalytics}
    />
  )
}
