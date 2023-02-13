import AnthelminticIcon from '@/assets/icons/anthelmintic.svg'
import FeedIcon from '@/assets/icons/feed.svg'
import VitaminIcon from '@/assets/icons/vitamin.svg'
import AnthelminticSection from '@/components/Category/AnthelminticSection'
import FeedSection from '@/components/Category/FeedSection'
import VitaminSection from '@/components/Category/VitaminSection'

export default function CategoryPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold text-neutral-5">Kategori</h1>
      <div className="mb-9 flex gap-6">
        {categoryList.map((item, idx) => (
          <div
            key={idx}
            className="grid h-28 w-36 items-end justify-center rounded-lg bg-white p-3 text-center font-semibold"
          >
            <span className="mx-auto">{item.icon}</span>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="space-y-9">
        <FeedSection />
        <VitaminSection />
        <AnthelminticSection />
      </div>
    </div>
  )
}

const categoryList = [
  {
    title: 'Obat Cacing',
    icon: <AnthelminticIcon />,
  },
  {
    title: 'Vitamin',
    icon: <VitaminIcon />,
  },
  {
    title: 'Pakan',
    icon: <FeedIcon />,
  },
]
