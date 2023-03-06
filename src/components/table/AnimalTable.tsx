'use client'
import { useAnimalList } from '@/hooks/useAnimal'
import { useAnimalStore } from '@/store/animal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import AnimalFilter from '../filter/AnimalFilter'
import DeleteModal from '../form/DeleteModal'
import { Button, Table } from '../shared'

export default function AnimalTable() {
  const router = useRouter()
  const store = useAnimalStore()
  const type = useSearchParams().get('type')
  const [isOpen, closeModal] = useState(false)
  const { data, loading, error } = useAnimalList()

  const editAnimalData = (eartag_code: any) => {
    router.push(`/${store.animal_type}/edit?eartag_code=${eartag_code}`)
  }

  const deleteToggle = (id: string) => {
    closeModal(true)
    useAnimalStore.setState((state) => ({ ...state, eartag_code: id }))
  }

  const deleteHandler = async () => {
    try {
      await store.deleteAnimal(store.eartag_code)
    } catch (e) {
      console.log(e)
    }
  }

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>

  const columns = [
    ...(type != undefined && type != 'cempek'
      ? store.animalTColumns
      : store.cempekTColumns),
    {
      header: 'Aksi',
      accessorKey: '_id',
      cell: (data: any) => (
        <div className="flex gap-2">
          <Button
            intent="edit"
            onClick={() => editAnimalData(data.getValue())}
          />
          <Button
            intent="delete"
            onClick={() => deleteToggle(data.getValue())}
          />
        </div>
      ),
    },
    { header: 'Keterangan', accessorKey: 'description' },
    { header: 'updated_at', accessorKey: 'updated_at' },
  ]

  return (
    <>
      <AnimalFilter />
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={`Hapus Data Ini?`}
        desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
        deleteHandler={deleteHandler}
      />
      <Table data={data} columns={columns} fixedCol={3} />
    </>
  )
}
