'use client'
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function SoldAnimalsDiagram() {
  return <Line options={options} data={data} />
}

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      align: 'start' as const,
      labels: {
        boxWidth: 4,
        boxHeight: 4,
        usePointStyle: true,
      },
    },
  },
  cutout: '90%',
}

const labels = ['1 January', '2 January', '3 January', 'Today']

export const data: ChartData<'line', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Sapi',
      data: labels.map(() => Math.random()),
      borderColor: '#40916C',
      backgroundColor: '#40916C',
      borderCapStyle: 'round',
      tension: 0.25,
    },
    {
      label: 'Kambing',
      data: labels.map(() => Math.random()),
      borderColor: '#775DFE',
      backgroundColor: '#775DFE',
      borderCapStyle: 'round',
      tension: 0.25,
    },
    {
      label: 'Domba',
      data: labels.map(() => Math.random()),
      borderColor: '#C1E5D5',
      backgroundColor: '#C1E5D5',
      borderCapStyle: 'round',
      tension: 0.25,
    },
  ],
}