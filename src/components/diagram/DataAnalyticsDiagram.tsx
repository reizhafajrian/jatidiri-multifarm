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
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface DataAnalyticsDiagramProps {
  data: any
}

const DataAnalyticsDiagram: FC<DataAnalyticsDiagramProps> = ({ data }) => {
  console.log({ data })

  const dataAnalytics: ChartData<'bar', number[], string> = {
    labels: ['Total Hewan Aktif'],
    datasets: [
      {
        label: 'Sapi',
        data: [data?.cow],
        backgroundColor: '#40916C',
      },
      {
        label: 'Kambing',
        data: [data?.goat],
        backgroundColor: '#775DFE',
      },
      {
        label: 'Domba',
        data: [data?.sheep],
        backgroundColor: '#C1E5D5',
      },
    ],
  }

  return (
    <Bar
      options={{
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
      }}
      data={dataAnalytics}
    />
  )
}

export default DataAnalyticsDiagram
