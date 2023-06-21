import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useShedDetail = () => {
  const { shed_code } = useStore()
  const url = "/api/shed/get/detail/" + shed_code

  const { data, loading, error, mutate } = useDataList(url)

  return { data, loading, error, mutate }
}

export default useShedDetail
