'use client'
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { FC } from 'react'
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

interface SoldAnimalsDiagramProps {
  data: any
}

const SoldAnimalsDiagram: FC<SoldAnimalsDiagramProps> = ({ data }) => {
  // const labels = ['1 January', '2 January', '3 January', 'Today']

  const soldAnimals: ChartData<'line', number[], string> = {
    // labels,
    labels: ['Total Hewan Terjual'],
    datasets: [
      {
        label: 'Sapi',
        data: [data?.cow?.total],
        borderColor: '#40916C',
        backgroundColor: '#40916C',
        borderCapStyle: 'round',
        tension: 0.25,
      },
      {
        label: 'Kambing',
        data: [data?.goat?.total],
        borderColor: '#775DFE',
        backgroundColor: '#775DFE',
        borderCapStyle: 'round',
        tension: 0.25,
      },
      {
        label: 'Domba',
        data: [data?.sheep?.total],
        borderColor: '#C1E5D5',
        backgroundColor: '#C1E5D5',
        borderCapStyle: 'round',
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
            align: 'start' as const,
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

export default SoldAnimalsDiagram
