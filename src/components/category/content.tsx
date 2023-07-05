"use client"

import { categoryTitle } from "@/lib/utils"
import useDataList from "@/hooks/useDataList"

import Loader from "../ui/loader"
import CardList from "./card-list"
import { setCategories } from "./data"
import AddCategoryForm from "./form/form-add"
import TableData from "./table-data"

export default function Content() {
  const { data, loading } = useDataList({
    url: "/api/category/detail",
  })

  if (loading)
    return <Loader className="flex h-20 items-center justify-center" />

  const categories = setCategories({
    feedInfo: data?.find((d: any) => d.title === "Feed")?.result,
    vitaminInfo: data?.find((d: any) => d.title === "Vitamin")?.result,
    anthelminticInfo: data?.find((d: any) => d.title === "Anthelmintic")
      ?.result,
    vaccineInfo: data?.find((d: any) => d.title === "Vaccine")?.result,
  })

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
                <CardList cardList={cardList} />
                <AddCategoryForm category={category} />
              </div>
            </div>
            <TableData category={category} />
          </div>
        ))}
      </div>
    </>
  )
}
