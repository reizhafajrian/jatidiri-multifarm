import { shedData, shedDetailData } from '@/data/dummy'
import { get } from '@/utils/fetcher'
import useSWR from 'swr'

export const useShedList = () => {
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    // data: data?.data,
    data: shedData,
    loading: !error && !data,
    error,
  }
}

// todo:get sheddetailist by shed_code -> get code from shedstore
export const useShedDetailList = () => {
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    // data: data?.data,
    data: shedDetailData,
    loading: !error && !data,
    error,
  }
}

// todo:get shedanimalist by shed_code -> get code from shedstore
export const useShedAnimalList = () => {
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    data: data?.data,
    loading: !error && !data,
    error,
  }
}
