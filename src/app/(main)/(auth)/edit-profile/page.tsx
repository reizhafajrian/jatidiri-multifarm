import { cookies } from "next/headers"
import axios from "axios"

import Card from "@/components/ui/Card"

import EditProfileForm from "./edit-profile-form"

export const metadata = {
  title: "Jatidiri Multifarm | Edit Profile",
}

export default async function EditProfilePage() {
  const { user } = await getData(cookies().get("token")?.value!)

  return (
    <Card>
      <EditProfileForm user={user} />
    </Card>
  )
}

const getData = async (token: string) => {
  const url = process.env.API_BASE_URL + `/user/profile`
  const options = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  const {
    data: { data: user },
  } = await axios.get(url, options)

  return {
    user,
  }
}
