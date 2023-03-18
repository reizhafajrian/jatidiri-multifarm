import useStore from '@/store/useStore'
import axios from 'axios'

export const Get = async (url: string) => {
  try {
    const res = await axios.get(url, {
      withCredentials: true,
      headers: {
        Authorization: `bearer ${useStore.getState().token}`,
      },
    })

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response)
  }
}

type params = {
  url: string
  data?: any
}

export const Post = async ({ url, data }: params) => {
  try {
    const res = await axios.post(url, data, {
      withCredentials: true,
      headers: {
        Authorization: `bearer ${useStore.getState().token}`,
      },
    })

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response)
  }
}

export const Put = async ({ url, data }: params) => {
  try {
    const res = await axios.put(url, data, {
      withCredentials: true,
      headers: {
        Authorization: `bearer ${useStore.getState().token}`,
      },
    })

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response)
  }
}

export const Delete = async (url: string) => {
  try {
    const res = await axios.delete(url, {
      withCredentials: true,
      headers: {
        Authorization: `bearer ${useStore.getState().token}`,
      },
    })

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response)
  }
}
