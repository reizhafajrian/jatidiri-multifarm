'use client'
import { useAnimalStore } from '@/store/animal'
import { Card, StoreInitializer } from '../shared'

interface IDAnimalInfoProps {
  data: {
    icon: any
    animal_type: 'goat' | 'sheep' | 'cow' | undefined
    totalAdult: number
    totalCempek: number
  }
}

export default function DashboardAnimalInfoCard(props: IDAnimalInfoProps) {
  const { icon, animal_type, totalAdult, totalCempek } = props.data
  const { animalTitle } = useAnimalStore()
  const title = animalTitle()

  const content = ({ total, title, label }: any) => (
    <div className="space-y-1">
      <p className="text-xl font-semibold text-neutral-5">
        {total}
        <span className="text-[10px] font-normal text-neutral-4"> Ekor</span>
      </p>
      <p className="text-xs text-neutral-4">
        {title} <span className="font-medium">{label}</span>
      </p>
    </div>
  )

  return (
    <>
      <StoreInitializer data={{ animal: { animal_type } }} />
      <Card className="space-y-7 capitalize">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12">{icon}</div>
          <div>
            <h1 className="mb-1 text-xl font-semibold text-neutral-5">
              {title}
            </h1>
            <h2 className="text-xs text-neutral-4">total {title} hidup</h2>
          </div>
        </div>
        <div className="grid grid-cols-2">
          {content({ title, total: totalAdult, label: 'Dewasa' })}
          {content({ title, total: totalCempek, label: 'Cempek' })}
        </div>
      </Card>
    </>
  )
}
