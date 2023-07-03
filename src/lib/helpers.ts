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
