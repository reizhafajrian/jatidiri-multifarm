import { Card } from '../shared'
import { Anthelmintic, Feed, Vitamin } from '../shared/Icons'

export default function CategoryHeader() {
  return (
    <div className="mb-10">
      <h1 className="mb-8 text-2xl font-semibold text-neutral-5">Kategori</h1>
      <div className="flex gap-6">
        {categoryList.map((item, idx) => (
          <Card
            key={idx}
            className="grid h-28 w-36 items-end justify-center p-3 text-center font-semibold"
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
  {
    title: 'Obat Cacing',
    icon: <Anthelmintic />,
  },
  {
    title: 'Vitamin',
    icon: <Vitamin />,
  },
  {
    title: 'Pakan',
    icon: <Feed />,
  },
]
