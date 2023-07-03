import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useShedAnimalList = () => {
  const { shed_id, type } = useStore()
  const isCempek = type === "cempek"
  const gender = type === "male" ? "true" : "false"
  const url = isCempek
    ? `/api/shed/get/detail/${shed_id}?cempek=true`
    : `/api/shed/get/detail/${shed_id}?gender=${gender}`

  const { data, loading, error, mutate } = useDataList({ url })

  return { data, loading, error, mutate }
}

export default useShedAnimalList
