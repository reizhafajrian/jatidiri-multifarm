'use client'
import * as cat from '@/store/category'
import useStore from '@/store/useStore'
import { useEffect } from 'react'

interface IData {
  data: {
    token?: string
    category?: ICategoryState
    animal?: string
    // animal?: IAnimalState
    // shed?: IShedState
    // milk?: IMilkState
    // hpp?: IHppState
  }
}

export default function StoreInitializer({ data }: IData) {
  const { setAnimal, loadUser } = useStore()
  useEffect(() => {
    if (data.token) {
      loadUser()
      useStore.setState({ token: data.token })
    }

    if (data.animal) {
      setAnimal(data.animal)
    }

    // if (data.animal) {
    //   const a = data.animal
    //   useAnimalStore.setState({ animal: a.animal, type: a.type })
    // }

    // if (data.shed) {
    //   const { shed_code, shed } = data.shed
    //   useShedStore.setState({ shed_code, shed })
    // }

    if (data.category) {
      const { category: c } = data

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

    // if (data.milk) {
    //   const { milk, milkList, milkInfo } = data.milk
    //   useMilkStore.setState({ milk, milkList, milkInfo })
    // }

    // if (data.hpp) {
    //   const { hpp, hppList } = data.hpp
    //   useHppStore.setState({ hpp, hppList })
    // }
  }, [data])

  return null
}

// interface IAnimalState {
//   type?: string
//   animal?: IAnimal
// }

// interface IShedState {
//   shed_code?: string
//   shed?: IShed
// }

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

// interface IMilkState {
//   milk?: IMilk
//   milkInfo?: IMilkInfo
//   milkList?: IMilk[]
// }

// interface IHppState {
//   hpp?: IHpp
//   hppList?: IHpp[]
// }
