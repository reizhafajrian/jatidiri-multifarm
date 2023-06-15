import Card from "@/components/ui/Card"
import { Icons } from "@/components/ui/Icons"

import CategoryContent from "./category-content"

export const metadata = {
  title: "Jatidiri Multifarm | Category",
}

export default function Page() {
  return (
    <>
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
      <CategoryContent />
    </>
  )
}

const categoryList = [
  { title: "Pakan", icon: <Icons.feed /> },
  { title: "Vitamin", icon: <Icons.vitamin /> },
  { title: "Vaksin", icon: <Icons.vaksin /> },
  { title: "Obat Cacing", icon: <Icons.anthelmintic /> },
]
