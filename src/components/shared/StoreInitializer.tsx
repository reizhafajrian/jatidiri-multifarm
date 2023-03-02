'use client'
import { IAnimal, IAnimalProps, useAnimalStore } from '@/store/animal'
import * as cat from '@/store/category'
import { ICempek, ICempekProps, useCempekStore } from '@/store/cempek'
import { IHpp, useHppStore } from '@/store/hpp'
import { IMilk, IMilkInfo, useMilkStore } from '@/store/milk'
import { IShed, IShedDetail, useShedStore } from '@/store/shed'
import { useRef } from 'react'

interface IData {
  data: {
    animal?: IAnimalState & IAnimalProps
    cempek?: ICempekState & ICempekProps
    shed?: IShedState
    category?: ICategoryState
    milk?: IMilkState
    hpp?: IHppState
  }
}

export default function StoreInitializer({ data }: IData) {
  const initialized = useRef(false)

  if (!initialized.current) {
    if (data.animal) {
      const { animal, animalList, animal_type, gender, animalFormContent } =
        data.animal
      useAnimalStore.setState({
        animal,
        animalList,
        animal_type,
        gender,
        animalFormContent,
      })
    }

    if (data.cempek) {
      const { cempek, cempekList, animal_type } = data.cempek
      useCempekStore.setState({ cempek, cempekList, animal_type })
    }

    if (data.shed) {
      const { shed, shedList, shedDetailList } = data.shed
      useShedStore.setState({ shed, shedList, shedDetailList })
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

    initialized.current = true
  }
  return null
}

interface IAnimalState {
  animal?: IAnimal
  animalList?: IAnimal[]
  animalFormContent?: any
}

interface ICempekState {
  cempek?: ICempek
  cempekList?: ICempek[]
}

interface IShedState {
  shed?: IShed
  shedList?: IShed[]
  shedDetailList?: IShedDetail[]
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
