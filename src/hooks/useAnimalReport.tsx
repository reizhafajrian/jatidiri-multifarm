import { useEffect, useState } from "react"
import useStore from "@/store/useStore"

const useAnimalReport = () => {
  const { animal, type, originMale, originFemale, filterByDate } = useStore()
  const [endpoint, setEndpoint] = useState("")

  useEffect(() => {
    const queriesArray = []
    if (type !== "cempek") {
      type === "male" && queriesArray.push("gender=true")
      type === "female" && queriesArray.push("gender=false")
    } else {
      queriesArray.push("cempek=true")
    }

    originMale !== "all" && queriesArray.push("origin_male=" + originMale)
    originFemale !== "all" && queriesArray.push("origin_female=" + originFemale)
    queriesArray.push(filterByDate)

    const url = `/api/${animal.name}/download`
    const isQueries = queriesArray.length > 0
    isQueries && setEndpoint(url + `?${queriesArray?.join("&")}`)
  }, [type, originMale, originFemale, animal, filterByDate])

  return { endpoint }
}

export default useAnimalReport
