import { cookies } from "next/headers"
import axios from "axios"

import MemberCard from "./rm-card"
import RoleManagementHeader from "./rm-header"

export const metadata = {
  title: "Jatidiri Multifarm | Role Management",
}

export default async function RoleManagementPage() {
  const { data } = await getData(cookies().get("token")?.value!)

  return (
    <>
      <RoleManagementHeader />
      <div className="space-y-3">
        {data.map((item: any) => (
          <MemberCard data={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

const getData = async (token: string) => {
  const baseUrl = process.env.API_BASE_URL
  const Authorization = `bearer ${token}`
  const headers = { headers: { Authorization } }

  const res = await axios.get(baseUrl + "/user/get", headers)

  return res.data
}
