import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { toast } from "@/components/ui/Toast"

export interface IUser {
  avatar?: any
  id?: string
  _id?: string
  firstName?: string
  lastName?: string
  gender?: string
  email: string
  password: string
  phone?: string
  jobTitle?: string
  role?: string

  name?: string
}

export interface IChangePass {
  passwordOld?: string
  password: string
  passwordConfirmation: string
}

export interface IAuthState {
  token: string
  user: IUser | null
  loadUser: () => void
  login: (data: IUser) => void
  logout: () => void
  // role management
  register: (data: IUser) => void
  updateUser: (data: IUser) => void
  changeRole: (data: { _id: string; role: string }) => void
  deleteUser: (id: string) => void
  // profile
  updateProfile: (data: IUser) => void
  changePass: (data: IChangePass) => void
}

const initialState = {
  user: null,
  token: "",
}

const createAuthSlice: StateCreator<IAuthState> = (set) => ({
  ...initialState,
  loadUser: () => {
    if (localStorage.getItem("user")) {
      let User = JSON.parse(localStorage.getItem("user") || "{}")
      set((state) => ({ ...state, user: User }))
    }
  },
  login: async (data) => {
    try {
      const options = { method: "POST", body: JSON.stringify(data) }
      let res = await fetch("/api/signin", options).then((res) => res.json())
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user))
        window.location.replace("/dashboard")
      }
    } catch (err) {
      toast({ type: "error", message: "wrong credentials!" })
    }
  },
  logout: async () => {
    try {
      await fetch("/api/signout")
      localStorage.removeItem("user")
      window.location.replace("/signin")
    } catch (err) {
      toast({ type: "error", message: "Something went wrong!" })
    }
  },
  register: async (data) => {
    try {
      const res = await Api.post({ url: "/api/auth/register", data })
      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
  updateUser: async (data) => {
    try {
      const res = await Api.post({
        url: "/api/user/update",
        data: { data: [data] },
      })
      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
  changeRole: async (data) => {
    try {
      const res = await Api.post({
        url: "/api/user/role/update",
        data: { data: [data] },
      })
      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  deleteUser: async (id) => {
    try {
      const res = await Api.delete("/api/user/delete/" + id)
      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
  updateProfile: async (data) => {
    try {
      const res = await Api.post({
        url: "/api/user/update",
        data: { data: [data] },
      })
      const newData = await Api.get("/api/user/get/detail/" + data._id)
      localStorage.setItem("user", JSON.stringify(newData.data))
      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      toast({ type: "error", message: err.data.error })
    }
  },
  changePass: async (data) => {
    try {
      const res = await Api.post({ url: "/api/user/password/update", data })
      toast({ type: "success", message: res.message })
      window.location.reload()
    } catch (err: any) {
      toast({ type: "error", message: err.data.errors[0].msg })
    }
  },
})

export default createAuthSlice
