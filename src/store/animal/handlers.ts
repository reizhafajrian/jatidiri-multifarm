import { IAnimal, IAnimalProps, ICempek } from '@/store/animal'
import { fetcher } from '@/utils/fetcher'
import { longDateFormatter } from '@/utils/formatDate'
import formatRupiah from '@/utils/formatRupiah'

export const addAnimalHandler = async (
  payload: IAnimal & IAnimalProps & { uid: string }
) => {
  const { animal_type, ...rest } = payload

  const formData = new FormData()
  formData.append('created_by', payload.uid)

  for (let value in rest) {
    if (value.includes('date')) {
      formData.append(value, rest[value].toISOString())
    } else {
      formData.append(value, rest[value])
    }
  }

  formData.set('files', rest.files[0])

  const res = await fetcher({
    url: `http://52.221.241.95/api/v1/${animal_type}/create`,
    method: 'post',
    formData,
  })

  return res
}

export const editAnimalHandler = async (
  payload: IAnimal & IAnimalProps & { uid: string }
) => {
  return
}

export const deleteAnimalHandler = async (payload: string) => {
  return
}

export const addCempekHandler = async (
  payload: ICempek & IAnimalProps & { uid: string }
) => {
  return
}

export const editCempekHandler = async (
  payload: ICempek & IAnimalProps & { uid: string }
) => {
  return
}

export const deleteCempekHandler = async (payload: string) => {
  return
}

export const animalTitle = (payload: string) => {
  return payload === 'goat' ? 'Kambing' : payload === 'sheep' ? 'Domba' : 'Sapi'
}

export const genderTitle = (payload: string) => {
  return payload === 'male' ? 'Pejantan' : 'Betina'
}

export const cempekTColumns = [
  {
    header: 'Tgl Lahir',
    accessorKey: 'birth_date',
    cell: (data: any) => longDateFormatter(new Date(data.getValue())),
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Jenis Cempek',
    accessorKey: 'type',
  },
  {
    header: 'Jenis Kelamin',
    accessorKey: 'gender',
    cell: (data: any) => (data.getValue() ? 'male' : 'female'),
  },
  {
    header: 'Berat',
    accessorKey: 'weight',
  },
  {
    header: 'Usia',
    accessorKey: 'age',
  },
  {
    header: 'Kondisi Lahir',
    accessorKey: 'birth_condition',
  },
  {
    header: 'Asal Induk',
    accessorKey: 'female_parent_origin',
  },
  {
    header: 'Asal Pejantan',
    accessorKey: 'male_parent_origin',
  },
]

export const animalTColumns = [
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_date',
    cell: (data: any) => longDateFormatter(new Date(data.getValue())),
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Jenis',
    accessorKey: 'type',
  },
  {
    header: 'Asal',
    accessorKey: 'origin',
  },
  {
    header: 'Berat',
    accessorKey: 'weight',
  },
  {
    header: 'Usia',
    accessorKey: 'age',
  },
  {
    header: 'Asal Induk',
    accessorKey: 'origin_female',
  },
  {
    header: 'Asal Pejantan',
    accessorKey: 'origin_male',
  },
  {
    header: 'Harga Beli',
    accessorKey: 'purchase_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
]
