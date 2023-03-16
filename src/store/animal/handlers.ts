import { Delete, Post } from '@/lib/api'
import { formatRupiah, longDateFormatter } from '@/lib/utils'
import { IAnimal } from '@/store/animal'
import { ColumnDef } from '@tanstack/react-table'

const addAnimalHandler = async (payload: IAnimal) => {
  const isCempek = payload.cempek === 'true'
  const formData = new FormData()

  for (let value in payload) {
    if (value.includes('_date')) {
      formData.append(value, payload[value].toISOString())
    } else {
      formData.append(value, payload[value])
    }
  }

  if (!isCempek) formData.set('files', payload.files[0])

  // formData.append('created_by', payload.uid!)

  const url = isCempek
    ? `/api/${payload.animal}/cempek/create`
    : `/api/${payload.animal}/create`

  const res = await Post({ url, formData })

  return res
}

const editAnimalHandler = async (payload: IAnimal) => {
  const isCempek = payload.cempek === 'true'
  const formData = new FormData()

  for (let value in payload) {
    if (value.includes('_date')) {
      formData.append(value, payload[value].toISOString())
    } else {
      formData.append(value, payload[value])
    }
  }

  if (!isCempek) formData.set('files', payload.files[0])

  const url = isCempek
    ? `/api/${payload.animal}/cempek/update`
    : `/api/${payload.animal}/update`

  const res = await Post({
    url,
    body: { data: [Object.fromEntries(formData)] },
  })

  return res
}

const deleteAnimalHandler = async (payload: IAnimal) => {
  const res = await Delete(
    `/api/${payload.animal}/delete/${payload.eartag_code}`
  )

  return res
}

export { addAnimalHandler, editAnimalHandler, deleteAnimalHandler }

export const animalTitle = (payload: string) => {
  return payload === 'goat' ? 'Kambing' : payload === 'sheep' ? 'Domba' : 'Sapi'
}

export const genderTitle = (payload: string) => {
  return payload === 'true' ? 'Pejantan' : 'Betina'
}

export const cempekTColumns: ColumnDef<any, any>[] = [
  {
    header: 'Tgl Lahir',
    accessorKey: 'birth_date',
    cell: (data) => longDateFormatter(new Date(data.getValue())),
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
    cell: (data) => (data.getValue() ? 'jantan' : 'betina'),
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

export const animalTColumns: ColumnDef<any, any>[] = [
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_date',
    cell: (data) => longDateFormatter(new Date(data.getValue())),
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
    cell: (data) => formatRupiah(data.getValue()),
  },
]
