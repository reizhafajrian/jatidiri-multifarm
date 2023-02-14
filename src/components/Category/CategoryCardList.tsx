import { ICategoryProps } from '@/data/interfaces'

export default function CategoryCardList(props: ICategoryProps) {
  return (
    <div className="flex gap-6">
      {props.cardList?.map((item, idx) => (
        <div key={idx} className="rounded-lg bg-white p-6">
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
        </div>
      ))}
    </div>
  )
}
