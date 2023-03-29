import { toast } from '@/components/shared'
import { Delete, Post } from '@/lib/api'
import { StateCreator } from 'zustand'
import { IAnimalState } from '../types'

const createAnimalSlice: StateCreator<IAnimalState> = (set, get) => ({
  animal: { name: '', title: '' },
  animalList: [
    { name: 'goat', title: 'Kambing' },
    { name: 'sheep', title: 'Domba' },
    { name: 'cow', title: 'Sapi' },
  ],
  originMale: 'all',
  originFemale: 'all',
  setFilter: ({ originMale, originFemale }) => {
    originMale && set((state) => ({ ...state, originMale }))
    originFemale && set((state) => ({ ...state, originFemale }))
  },
  setAnimal: (name) => {
    const animal = get().animalList.find((item) => item.name === name)
    set((state) => ({ ...state, animal }))
  },
  addAnimal: async (data, router) => {
    try {
      const isCempek = data.cempek === 'true'
      const animal = get().animal.name

      const formData = new FormData()
      for (let value in data) {
        if (value.includes('_date')) {
          formData.append(value, data[value].toISOString())
        } else {
          formData.append(value, data[value])
        }
      }

      if (!isCempek) formData.set('files', data.files[0])

      const url = isCempek
        ? `/api/${animal}/cempek/create`
        : `/api/${animal}/create`

      const res = await Post({ url, data: formData })

      toast({
        type: 'success',
        message: res.message,
      })

      router.replace(`/${animal}/male`)
    } catch (err: any) {
      return toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
  editAnimal: async (data, router) => {
    try {
      const isCempek = data.cempek === 'true'
      const formData = new FormData()

      for (let value in data) {
        if (value.includes('_date')) {
          formData.append(value, data[value].toISOString())
        } else {
          formData.append(value, data[value])
        }
      }

      if (!isCempek && data?.files) formData.set('files', data?.files[0])

      const url = isCempek
        ? `/api/${data.animal}/cempek/update`
        : `/api/${data.animal}/update`

      const res = await Post({
        url,
        data: { data: [Object.fromEntries(formData)] },
      })

      toast({
        type: 'success',
        message: res.message,
      })

      if (router) {
        router.replace(`/${get().animal.name}/male`)
      }
    } catch (err: any) {
      return toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
  deleteAnimal: async (id) => {
    try {
      const res = await Delete(`/api/${get().animal.name}/delete/${id}`)

      toast({
        type: 'success',
        message: res.message,
      })
    } catch (err: any) {
      return toast({
        type: 'error',
        message: err.data.errors[0].msg,
      })
    }
  },
})

export default createAnimalSlice
