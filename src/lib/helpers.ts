import { cookies } from "next/headers"
import axios from "axios"

const base = process.env.API_BASE_URL

const Get = async (url: string) => {
  const token = cookies().get("token")?.value
  const options = {
    withCredentials: true,
    headers: { Authorization: `bearer ${token}` },
  }

  const { data } = await axios.get(base + url, options)
  return data
}

export const getUndefinedClusterInfo = async (animal: string) => {
  const url = `/${animal}/cluster-info/get`
  const data = await Get(url)
  return data.data
}

export const getShedCode = async (shed_id: string) => {
  const detail = await Get(`/shed/get/detail/${shed_id}`)

  return {
    shed_code: detail.data.code,
  }
}

export const getDetailShedData = async (shed_id: string) => {
  const detail = await Get(`/shed/get/detail/${shed_id}`)

  const feed = await Get("/feed/get")
  const vitamin = await Get("/vitamin/get")
  const vaccine = await Get("/vaccine/get")
  const anthelmintic = await Get("/anthelmintic/get")

  return {
    shedDetail: detail.data,
    options: {
      feed: feed.data,
      vitamin: vitamin.data,
      vaccine: vaccine.data,
      anthelmintic: anthelmintic.data,
    },
  }
}

export const getShedCodeOptions = async (animal: string) => {
  const res = await Get(`/shed/get?animal_type=${animal}`)
  console.log({ res })

  const shedCodeOptions = res.data.map((item: any) => ({
    name: item.code,
    value: item._id,
  }))

  return {
    shedCodeOptions,
  }
}
