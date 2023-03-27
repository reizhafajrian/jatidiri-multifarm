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
        vaccine: c.vaccine,
        vaccineList: c.vaccineList,
        vaccineInfo: c.vaccineInfo,
        anthelmintic: c.anthelmintic,
        anthelminticList: c.anthelminticList,
        anthelminticInfo: c.anthelminticInfo,
      })
    }
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
