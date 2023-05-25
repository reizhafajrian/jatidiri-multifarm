import AnimalForm from '@/components/form/AnimalForm'
import Tab from '@/components/shared/Tab'
import axios from 'axios'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Jatidiri Multifarm | Add Animal',
}

export default async function AddAnimalPage({ params }: { params: any }) {
  const token = cookies().get('token')?.value
  const animal = params.animal

  const options = await getData(animal, token!)

  const categories = {
    Pejantan: <AnimalForm formType="add" gender="true" options={options} />,
    Betina: <AnimalForm formType="add" gender="false" options={options} />,
    ...(animal !== 'cow' && {
      Cempek: <AnimalForm formType="add" cempekForm options={options} />,
    }),
  }

  return <Tab categories={categories} />
}

const getData = async (animal: string, token: string) => {
  const url = process.env.API_BASE_URL + `/${animal}/get`
  const options = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  const pejantan = await axios.get(url + '?gender=true', options)
  const indukan = await axios.get(url + '?gender=false', options)

  const pejantanOpts = pejantan.data.data.map((item: any) => ({
    name: item.eartag_code,
    value: item._id,
  }))

  const indukanOpts = indukan.data.data.map((item: any) => ({
    name: item.eartag_code,
    value: item._id,
  }))

  return {
    pejantanOpts,
    indukanOpts,
  }
}
