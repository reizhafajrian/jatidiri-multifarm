'use client'
import { IAnimal, IAnimalProps, ICempek, useAnimalStore } from '@/store/animal'
import * as cat from '@/store/category'
import { IHpp, useHppStore } from '@/store/hpp'
import { IMilk, IMilkInfo, useMilkStore } from '@/store/milk'
import { IShed, useShedStore } from '@/store/shed'
import { useEffect } from 'react'

interface IData {
  data: {
    animal?: IAnimalState & IAnimalProps
    shed?: IShedState
    category?: ICategoryState
    milk?: IMilkState
    hpp?: IHppState
  }
}

export default function StoreInitializer({ data }: IData) {
  useEffect(() => {
    if (data.animal) {
      const a = data.animal
      useAnimalStore.setState({
        animal: a.animal,
        cempek: a.cempek,
        animal_type: a.animal_type,
        gender: a.gender,
        type: a.type,
        animalFormContent: a.animalFormContent,
        listData: a.listData,
      })
    }

    if (data.shed) {
      const { shed_code, shed } = data.shed
      useShedStore.setState({ shed_code, shed })
    }

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

    if (data.milk) {
      const { milk, milkList, milkInfo } = data.milk
      useMilkStore.setState({ milk, milkList, milkInfo })
    }

    if (data.hpp) {
      const { hpp, hppList } = data.hpp
      useHppStore.setState({ hpp, hppList })
    }
  }, [JSON.stringify(data)])

  return null
}

interface IAnimalState {
  type?: string
  animal?: IAnimal
  listData?: IAnimal[] | ICempek[]
  cempek?: ICempek
  cempekList?: ICempek[]
  animalFormContent?: any
}

interface IShedState {
  shed_code?: string
  shed?: IShed
}

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

interface IMilkState {
  milk?: IMilk
  milkInfo?: IMilkInfo
  milkList?: IMilk[]
}

interface IHppState {
  hpp?: IHpp
  hppList?: IHpp[]
}
