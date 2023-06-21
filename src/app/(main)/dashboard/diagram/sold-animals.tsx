"use client"

import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface IProps {
  data: any
}

export default function SoldAnimalsDiagram({ data }: IProps) {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const soldAnimals: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "Sapi",
        data: months.map((month) => {
          const cow = data?.cow?.find((item: any) => item._id.month == month)
          if (cow) return cow.count

          return 0
        }),
        borderColor: "#40916C",
        backgroundColor: "#40916C",
        borderCapStyle: "round",
        tension: 0.25,
      },
      {
        label: "Kambing",
        data: months.map((month) => {
          const goat = data?.goat?.find((item: any) => item._id.month == month)
          if (goat) return goat.count

          return 0
        }),
        borderColor: "#775DFE",
        backgroundColor: "#775DFE",
        borderCapStyle: "round",
        tension: 0.25,
      },
      {
        label: "Domba",
        data: months.map((month) => {
          const sheep = data?.sheep?.find(
            (item: any) => item._id.month == month
          )
          if (sheep) return sheep.count

          return 0
        }),
        borderColor: "#C1E5D5",
        backgroundColor: "#C1E5D5",
        borderCapStyle: "round",
        tension: 0.25,
      },
    ],
  }

  return (
    <Line
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
      data={soldAnimals}
      className="font-sans"
    />
  )
}
