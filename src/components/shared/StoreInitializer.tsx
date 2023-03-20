'use client'
import { ICategoryInfo } from '@/store/types'
import useStore from '@/store/useStore'
import { useEffect } from 'react'

interface IData {
  data: {
    token?: string
    category?: ICategoryInfo
    animal?: string
  }
}

export default function StoreInitializer({ data }: IData) {
  const { token, animal, category: c } = data
  const { setAnimal, loadUser, setCategoryInfo } = useStore()

  useEffect(() => {
    if (token) {
      loadUser()
      useStore.setState({ token })
    }

    if (animal) {
      setAnimal(animal)
    }

    if (c) {
      setCategoryInfo({
        feedInfo: c.feedInfo,
        vitaminInfo: c.vitaminInfo,
        vaccineInfo: c.vaccineInfo,
        anthelminticInfo: c.anthelminticInfo,
      })
    }
  }, [data])

  return null
}
