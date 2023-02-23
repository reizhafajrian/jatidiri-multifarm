'use client'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function DataAnalyticsDiagram() {
  return <Bar options={options} data={data} />
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
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data: ChartData<'bar', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Sapi',
      data: labels.map(() => Math.random()),
      backgroundColor: '#40916C',
    },
    {
      label: 'Kambing',
      data: labels.map(() => Math.random()),
      backgroundColor: '#775DFE',
    },
    {
      label: 'Domba',
      data: labels.map(() => Math.random()),
      backgroundColor: '#C1E5D5',
    },
  ],
}
