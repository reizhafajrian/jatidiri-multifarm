import useStore from "@/store/useStore"
import useSWR from "swr"

import { Get } from "@/lib/api"

const useAnimalList = () => {
  const {
    type,
    animal: { name: animal },
    originMale,
    originFemale,
    filterByDate,
    searchResults,
    searchKeyword,
    searchLoading,
  } = useStore()

  const queriesArray = []
  const isCempek = type === "cempek"
  const gender = type === "male" ? true : false
  originMale !== "all" && queriesArray.push("origin_male=" + originMale)
  originFemale !== "all" && queriesArray.push("origin_female=" + originFemale)

  !isCempek &&
    queriesArray.push(type === "male" ? "gender=true" : "gender=false")

  queriesArray.push(filterByDate)
  const queries = queriesArray?.join("&")
  const url = isCempek ? `/api/${animal}/cempek/get` : `/api/${animal}/get`
  const endpoint = queriesArray ? url + `?${queries}` : url

  const { data, isLoading, error, mutate } = useSWR(endpoint, Get)

  let animalsData = data?.data.filter((i: any) => i._id !== null)

  if (searchKeyword.length !== 0) {
    if (!isCempek) {
      animalsData = searchResults.filter((item: any) => item.gender == gender)
    } else {
      animalsData = searchResults.filter((item: any) => item.cempek == true)
    }
  }

  return {
    data: animalsData,
    loading: isLoading || searchLoading,
    error,
    mutate,
  }
}

export default useAnimalList
