'use client'
import * as cat from '@/store/category'
import useStore from '@/store/useStore'
import { useEffect } from 'react'

interface ICategoryState {
  feed?: cat.IFeed
  feedList?: cat.IFeed[]
  feedInfo?: cat.IFeedInfo
  vitamin?: cat.IVitamin
  vitaminList?: cat.IVitamin[]
  vitaminInfo?: cat.IVitaminInfo
  anthelmintic?: cat.IAnthelmintic
  anthelminticList?: cat.IAnthelmintic[]
  anthelminticInfo?: cat.IAnthelminticInfo
}

interface IData {
  data: {
    token?: string
    category?: ICategoryState
    animal?: string
  }
}

export default function StoreInitializer({ data }: IData) {
  const { token, animal, category: c } = data
  const { setAnimal, loadUser } = useStore()

  useEffect(() => {
    if (token) {
      loadUser()
      useStore.setState({ token })
    }

    if (animal) {
      setAnimal(animal)
    }

    if (c) {
      cat.useCategoryStore.setState({
        feed: c.feed,
        feedList: c.feedList,
        feedInfo: c.feedInfo,
        vitamin: c.vitamin,
        vitaminList: c.vitaminList,
        vitaminInfo: c.vitaminInfo,
        anthelmintic: c.anthelmintic,
        anthelminticList: c.anthelminticList,
        anthelminticInfo: c.anthelminticInfo,
      })
    }
  }, [data])

  return null
}
