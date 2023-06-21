import axios from "axios"

import useStore from "@/store/useStore"

interface params {
  url: string
  data: any
}

export const Api = {
  options: (token: string) => ({
    withCredentials: true,
    headers: { Authorization: `bearer ${token}` },
  }),
  get: async (url: string) => {
    try {
      const opt = Api.options(useStore.getState().token)
      const res = await axios.get(url, opt)
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response)
    }
  },
  post: async ({ url, data }: params) => {
    try {
      const opt = Api.options(useStore.getState().token)
      const res = await axios.post(url, data, opt)
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response)
    }
  },
  put: async ({ url, data }: params) => {
    try {
      const opt = Api.options(useStore.getState().token)
      const res = await axios.put(url, data, opt)
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response)
    }
  },
  delete: async (url: string) => {
    try {
      const opt = Api.options(useStore.getState().token)
      const res = await axios.delete(url, opt)
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response)
    }
  },
}
