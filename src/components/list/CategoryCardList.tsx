import { FC } from 'react'
import { Card } from '../shared'

interface IProps {
  cardList?: {
    icon: any
    title: string
    value: number | string
    label?: string
  }[]
}

const CategoryCardList: FC<IProps> = ({ cardList }) => {
  return (
    <div className="flex gap-6">
      {cardList?.map((item, idx) => (
        <Card key={idx}>
          <div className="mb-6 flex items-center justify-between gap-6 text-xl font-medium">
            {item.icon} <h3>{item.title}</h3>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold">
              {item.value}{' '}
              {item.label && (
                <span className="text-base font-normal text-neutral-4">
                  {item.label}
                </span>
              )}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default CategoryCardList
