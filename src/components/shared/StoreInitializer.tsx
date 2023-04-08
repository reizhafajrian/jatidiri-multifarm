'use client'
import { ICategoryInfo } from '@/store/types'
import useStore from '@/store/useStore'
import { useEffect } from 'react'

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
  const {  token,
    animal,
    type,
    category: c,
    searchType,
    shed_code,
    shed_id,
  } = data

  const { setAnimal, loadUser, setCategoryInfo } = useStore()

  useEffect(() => {
    if (token) {
      loadUser()
      useStore.setState((state) => ({ ...state, token }))
    }

    if (animal) {
      setAnimal(animal)
    }

    if (type) {
      useStore.setState((state) => ({ ...state, type }))
    }

    if (searchType) {
      if (searchType === 'shed') {
        useStore.setState({ searchType: 'shed' + '-' + animal })
      } else {
        useStore.setState({ searchType })
      }
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
  }, [JSON.stringify(data)])
 
  return null
}
