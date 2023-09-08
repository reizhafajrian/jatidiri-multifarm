"use client"

import { useEffect } from "react"

import { ICategoryInfo } from "@/lib/schemas/category"
import useStore from "@/store/useStore"

interface IData {
  data: {
    animal?: string
    type?: string
    gender?: string
    c_gender?: string
    ucTotal?: number
    category?: ICategoryInfo
    searchType?: string
    shed_code?: string
    shed_id?: string
  }
}

export default function StoreInitializer({ data }: IData) {
  const {
    animal,
    type,
    ucTotal,
    gender,
    c_gender,
    category,
    searchType,
    shed_code,
    shed_id,
  } = data

  const [setCat, setAnimal, setGender, certificate] = useStore((s) => [
    s.setCategoryInfo,
    s.setAnimalTitle,
    s.setGenderTitle,
    s.certificate,
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
    if (c_gender) {
      useStore.setState((s) => ({
        ...s,
        certificate: {
          ...certificate,
          gender: gender == "true" ? "sire" : "dam",
        },
      }))
    }
    if (type) {
      useStore.setState((state) => ({ ...state, type }))
    }
    if (ucTotal) {
      useStore.setState((state) => ({
        ...state,
        undefinedClusterTotal: ucTotal,
      }))
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
