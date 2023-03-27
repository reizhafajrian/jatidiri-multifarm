'use client'
import { useAuthStore } from '@/store/auth'
import * as cat from '@/store/category'
import { useEffect } from 'react'


interface IData {
  data: {
    token?: string
    category?: ICategoryState
    // animal?: IAnimalState
    // shed?: IShedState
    // milk?: IMilkState
    // hpp?: IHppState
  }
}

export default function StoreInitializer({ data }: IData) {
  useEffect(() => {
    if (data.token) {
      useAuthStore.setState({ token: data.token })
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
        vaccine: c.vaccine,
        vaccineList: c.vaccineList,
        vaccineInfo: c.vaccineInfo,
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
  vitaminList?: []
  vitaminInfo?: []
  vaccine?: cat.IVaccine
  vaccineList?: []
  vaccineInfo?: []
  anthelmintic?: cat.IAnthelmintic
  anthelminticList?: cat.IAnthelmintic[]
  anthelminticInfo?: []
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
