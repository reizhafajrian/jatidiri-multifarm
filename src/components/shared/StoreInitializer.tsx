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
  }
}

export default function StoreInitializer({ data }: IData) {
  const { token, animal, category: c, searchType } = data

  const { setAnimal, loadUser, setCategoryInfo } = useStore()

  useEffect(() => {
    if (token) {
      loadUser()
      useStore.setState({ token })
    }

    if (animal) {
      setAnimal(animal)
      useStore.setState({ searchType: animal })
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

// interface ICategoryState {
//   feed?: cat.IFeed
//   feedList?: cat.IFeed[]
//   feedInfo?: cat.IFeedInfo
//   vitamin?: cat.IVitamin
//   vitaminList?: []
//   vitaminInfo?: []
//   vaccine?: cat.IVaccine
//   vaccineList?: []
//   vaccineInfo?: []
//   anthelmintic?: cat.IAnthelmintic
//   anthelminticList?: cat.IAnthelmintic[]
//   anthelminticInfo?: []
// }

// interface IMilkState {
//   milk?: IMilk
//   milkInfo?: IMilkInfo
//   milkList?: IMilk[]
// }

// interface IHppState {
//   hpp?: IHpp
//   hppList?: IHpp[]
// }
