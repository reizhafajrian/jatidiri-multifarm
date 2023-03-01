import { useShedStore } from '@/store/shed'
import { Card } from '../shared'

export default function ShedInfoList() {
  const { animal_weight, age_range, feed_weight } = useShedStore.getState().shed

  const cardList = [
    { title: 'Berat', content: `${animal_weight} kg` },
    { title: 'Range Usia', content: `${age_range} bulan` },
    { title: 'Berat Pakan', content: `${feed_weight} kg` },
  ]

  return (
    <div className="mb-8 flex gap-8 py-5">
      {cardList.map((item, idx) => (
        <Card key={idx} className="w-44">
          <h3 className="mb-7 text-base font-semibold text-primary-4">
            {item.title}
          </h3>
          <p className="font-medium text-neutral-5">{item.content}</p>
        </Card>
      ))}
    </div>
  )
}
