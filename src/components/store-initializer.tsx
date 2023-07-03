"use client"

import { useEffect } from "react"

import { ICategoryInfo } from "@/store/slices/categorySlice"
import useStore from "@/store/useStore"

interface IData {
  data: {
    animal?: string
    type?: string
    gender?: string
    category?: ICategoryInfo
    searchType?: string
    shed_code?: string
    shed_id?: string
  }
}

export default function StoreInitializer({ data }: IData) {
  const { animal, type, gender, category, searchType, shed_code, shed_id } =
    data

  const [setCat, setAnimal, setGender] = useStore((s) => [
    s.setCategoryInfo,
    s.setAnimalTitle,
    s.setGenderTitle,
  ])

  useEffect(() => {
    if (animal) {
      useStore.setState((state) => ({ ...state, animal }))
      setAnimal()
    }
    if (gender) {
      useStore.setState((state) => ({ ...state, gender }))
      setGender()
    }
    if (type) {
      useStore.setState((state) => ({ ...state, type }))
    }
    if (searchType) useStore.setState((state) => ({ ...state, searchType }))
    if (shed_code) useStore.setState((state) => ({ ...state, shed_code }))
    if (shed_id) useStore.setState((state) => ({ ...state, shed_id }))
    if (category)
      setCat({
        feedInfo: category.feedInfo,
        vitaminInfo: category.vitaminInfo,
        vaccineInfo: category.vaccineInfo,
        anthelminticInfo: category.anthelminticInfo,
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
