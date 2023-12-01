import axios, { isAxiosError } from "axios"
import { StateCreator } from "zustand"

import { Api } from "@/lib/api"
import { changePassType, SignInType, userType } from "@/lib/schemas/auth"
import { toast } from "@/components/ui/toast"

export interface IAuthState {
  user: userType | null
  loadUser: () => void
  signin: (data: SignInType) => void
  logout: () => void

  register: (data: userType) => void
  updateUser: (data: userType) => void
  changeRole: (data: { _id: string; role: string }) => void
  deleteUser: (id: string) => void

  updateProfile: (data: userType) => void
  changePass: (data: changePassType) => void
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
  signin: async (data) => {
    try {
      const res = await axios.post("/api/auth/signin", data)
      localStorage.setItem("user", JSON.stringify(res.data.data.user))
      localStorage.setItem("token", res.data.data.token)
      window.location.replace("/dashboard")
    } catch (err: any) {
      if (isAxiosError(err))
        toast({ type: "error", message: err.response?.data.message })
    }
  },
  logout: async () => {
    try {
      await fetch("/api/signout")
      localStorage.removeItem("user")
      localStorage.removeItem("token")
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
      toast({ type: "error", message: err?.data?.error||"something went wrong" })
    }
  },
  updateUser: async (data) => {
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
      toast({ type: "error", message: err?.data?.error||"something went wrong" })
    }
  },
  changeRole: async (data) => {
    try {
      const res = await Api.post({
        url: "/api/user/role/update",
        data: { data: [data] },
      })
      const newData = await Api.get("/api/user/get/detail/" + data._id)
      localStorage.setItem("user", JSON.stringify(newData.data))
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
      toast({ type: "error", message: err?.data?.error||"something went wrong" })
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
