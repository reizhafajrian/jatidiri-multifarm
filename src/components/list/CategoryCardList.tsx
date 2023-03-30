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
    <div className="flex flex-col gap-3 md:flex-row md:gap-6">
      {cardList?.map((item, idx) => (
        <Card key={idx} className="p-3 md:p-6">
          <div className="flex items-center justify-between gap-6 text-base font-medium md:mb-6 md:text-xl">
            {item.icon} <h3>{item.title}</h3>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold">
              {item.value}{' '}
              {item.label && (
                <span className="text-xs font-normal text-neutral-4 md:text-base">
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
