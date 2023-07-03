"use client"

import { categoryTitle } from "@/lib/utils"
import useDataList from "@/hooks/useDataList"
import { Icons } from "@/components/ui/Icons"

import CategoryCardList from "./category-card-list"
import { setCategories } from "./category-data"
import AddCategoryForm from "./category-form-add"
import CategoryTable from "./category-table"

export default function CategoryContent() {
  const { data, loading, error, mutate } = useDataList({
    url: "/api/category/detail",
  })

  const categoryDetail = {
    feedInfo: data?.find((d: any) => d.title === "Feed")?.result,
    vitaminInfo: data?.find((d: any) => d.title === "Vitamin")?.result,
    anthelminticInfo: data?.find((d: any) => d.title === "Anthelmintic")
      ?.result,
    vaccineInfo: data?.find((d: any) => d.title === "Vaccine")?.result,
  }

  const categories = setCategories(categoryDetail)

  if (loading)
    return (
      <div className="flex h-20 items-center justify-center">
        <Icons.loader className="animate-spin stroke-primary-4" />
      </div>
    )

  return (
    <>
      <div className="space-y-10">
        {categories?.map(({ cardList, category }, idx) => (
          <div key={idx}>
            <div>
              <h1 className="mb-8 text-2xl font-semibold text-primary-4">
                {categoryTitle(category)}
              </h1>
              <div className="mb-3 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
                <CategoryCardList cardList={cardList} />
                <AddCategoryForm category={category} />
              </div>
            </div>
            <CategoryTable category={category} />
          </div>
        ))}
      </div>
    </>
  )
}
