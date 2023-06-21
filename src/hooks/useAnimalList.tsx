import useStore from "@/store/useStore"

import useDataList from "./useDataList"

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
  const url = isCempek ? `/api/${animal}/cempek/get` : `/api/${animal}/get`

  const gender = type === "male" ? true : false
  !isCempek &&
    queriesArray.push(type === "male" ? "gender=true" : "gender=false")

  originMale !== "all" && queriesArray.push("origin_male=" + originMale)
  originFemale !== "all" && queriesArray.push("origin_female=" + originFemale)

  queriesArray.push(filterByDate)

  const { data, loading, error, mutate } = useDataList(url, queriesArray)

  let animalsData = data?.filter((i: any) => i._id !== null)

  // if (searchKeyword.length !== 0) {
  //   if (!isCempek) {
  //     animalsData = searchResults.filter((item: any) => item.gender == gender)
  //   } else {
  //     animalsData = searchResults.filter((item: any) => item.cempek == true)
  //   }
  // }

  return {
    data: animalsData,
    loading: loading || searchLoading,
    error,
    mutate,
  }
}

export default useAnimalList
