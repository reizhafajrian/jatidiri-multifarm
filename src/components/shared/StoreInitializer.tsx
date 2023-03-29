'use client'
import { ICategoryInfo } from '@/store/types'
import useStore from '@/store/useStore'
import { useEffect } from 'react'

interface IData {
  data: {
    token?: string
    category?: ICategoryInfo
    animal?: string
    searchType?: string
    shed_code?: string
  }
}

export default function StoreInitializer({ data }: IData) {
  const { token, animal, category: c, searchType, shed_code } = data
  const { setAnimal, loadUser, setCategoryInfo } = useStore()

  useEffect(() => {
    if (token) {
      loadUser()
      useStore.setState({ token })
    }

    if (animal) {
      setAnimal(animal)
    }

    if (searchType) {
      useStore.setState({ searchType })
    }

    if (shed_code) {
      useStore.setState({ shed_code })
    }

    if (c) {
      setCategoryInfo({
        feedInfo: c.feedInfo,
        vitaminInfo: c.vitaminInfo,
        vaccineInfo: c.vaccineInfo,
        anthelminticInfo: c.anthelminticInfo,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return null
}
