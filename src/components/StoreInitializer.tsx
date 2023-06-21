"use client"

import { useEffect } from "react"

import { ICategoryInfo } from "@/store/slices/categorySlice"
import useStore from "@/store/useStore"

interface IData {
  data: {
    token?: string
    category?: ICategoryInfo
    animal?: string
    type?: string
    searchType?: string
    shed_code?: string
    shed_id?: string
  }
}

export default function StoreInitializer({ data }: IData) {
  const { token, animal, type, category, searchType, shed_code, shed_id } = data
  const { setAnimal, loadUser, setCategoryInfo } = useStore() || {}

  useEffect(() => {
    if (token) {
      loadUser()
      useStore.setState((state) => ({ ...state, token }))
    }

    if (animal) setAnimal(animal)

    if (type) useStore.setState((state) => ({ ...state, type }))

    if (searchType) useStore.setState((state) => ({ ...state, searchType }))

    if (shed_code) useStore.setState((state) => ({ ...state, shed_code }))

    if (shed_id) useStore.setState((state) => ({ ...state, shed_id }))

    if (category)
      setCategoryInfo({
        feedInfo: category.feedInfo,
        vitaminInfo: category.vitaminInfo,
        vaccineInfo: category.vaccineInfo,
        anthelminticInfo: category.anthelminticInfo,
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(data),
  ])

  return null
}
