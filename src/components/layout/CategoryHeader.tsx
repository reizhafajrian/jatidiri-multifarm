import { Card } from '../shared'
import { Anthelmintic, Feed, Vaksin, Vitamin } from '../shared/Icons'

export default function CategoryHeader() {
  return (
    <div className="mb-10">
      <div className="flex gap-1 md:gap-6">
        {categoryList?.map((item, idx) => (
          <Card
            key={idx}
            className="grid h-36 w-36 items-end justify-center p-3 text-center text-xs font-semibold md:h-28 md:text-base"
          >
            <span className="mx-auto">{item.icon}</span>
            <h2>{item.title}</h2>
          </Card>
        ))}
      </div>
    </div>
  )
}

const categoryList = [
  { title: 'Pakan', icon: <Feed /> },
  { title: 'Vitamin', icon: <Vitamin /> },
  {
    title: 'Vaksin',
    icon: <Vaksin />,
  },
  { title: 'Obat Cacing', icon: <Anthelmintic /> },
]
