import axios from "axios"

interface params {
  url: string
  data: any
  isFormData?: boolean
}

export const Api = {
  options: (token: string) => ({
    withCredentials: true,
    headers: { Authorization: `bearer ${token}` },
  }),
  get: async (url: string) => {
    try {
      const token = localStorage.getItem("token") || ""
      const res = await axios.get(url, Api.options(token))
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response.data)
    }
  },
  post: async ({ url, data, isFormData }: params) => {
    try {
      const token = localStorage.getItem("token") || ""

      const formData = new FormData()
      for (let value in data) {
        if (value.includes("_date")) {
          formData.append(value, data[value].toISOString())
          continue
        }
        formData.append(value, data[value])
      }
      if (data.files) formData.set("files", data.files[0])

      const res = await axios.post(
        url,
        isFormData ? formData : data,
        Api.options(token)
      )
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response.data)
    }
  },
  put: async ({ url, data, isFormData }: params) => {
    try {
      const token = localStorage.getItem("token") || ""
      const formData = new FormData()
      for (let value in data) {
        if (value.includes("_date")) {
          formData.append(value, data[value].toISOString())
          continue
        }
        formData.append(value, data[value])
      }
      if (data.files) formData.set("files", data.files[0])

      const res = await axios.put(
        url,
        isFormData ? { data: [Object.fromEntries(formData)] } : data,
        Api.options(token)
      )
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response.data)
    }
  },
  delete: async (url: string) => {
    try {
      const token = localStorage.getItem("token") || ""
      const res = await axios.delete(url, Api.options(token))
      return res.data
    } catch (err: any) {
      return Promise.reject(err.response.data)
    }
  },
}
