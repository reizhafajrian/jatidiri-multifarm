'use client'
import useDataList from '@/hooks/useDataList'
import { useAnimalStore } from '@/store/animal'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import { Button, Table } from '../shared'
import { toast } from '../shared/Toast'

interface AnimalTableProps {
  animal?: string
  type: string
}

const AnimalTable: FC<AnimalTableProps> = ({ animal, type }) => {
  const router = useRouter()
  const isCempek = type === 'cempek'
  const [isOpen, closeModal] = useState(false)

  const { origin_female, origin_male, ...a } = useAnimalStore()

  const queries = []
  !isCempek && queries.push(type === 'male' ? 'gender=true' : 'gender=false')
  origin_male !== 'all' && queries.push('origin_male=' + origin_male)
  origin_female !== 'all' && queries.push('origin_female=' + origin_female)

  const { data, loading, mutate } = useDataList(
    isCempek ? `/api/${animal}/cempek/get` : `/api/${animal}/get`,
    queries
  )

  const deleteHandler = async () => {
    try {
      const res = await a.deleteAnimal({
        animal,
        eartag_code: a.eartag_code,
      })

      if (res.status === 201) {
        toast({
          type: 'success',
          message: res.message,
        })
        mutate()
      }
    } catch (e) {
      console.log(e)
    } finally {
      closeModal(false)
    }
  }

  const columns: ColumnDef<any, any>[] = [
    ...(type === 'cempek' ? a.cempekTColumns : a.animalTColumns),
    {
      header: 'Aksi',
      accessorKey: '_id',
      cell: (data) => (
        <div className="flex gap-2">
          <Button
            size="xs"
            variant="edit"
            onClick={() => router.replace(`/${animal}/edit/${data.getValue()}`)}
          />
          <Button
            size="xs"
            variant="delete"
            onClick={() => {
              closeModal(true)
              useAnimalStore.setState({ eartag_code: data.getValue() })
            }}
          />
        </div>
      ),
    },
    { header: 'Keterangan', accessorKey: 'description' },
  ]

  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={`Hapus Data Ini?`}
        desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
        deleteHandler={deleteHandler}
      />
      <Table
        isLoading={loading}
        fixedCol={3}
        data={data?.filter((i: any) => i._id !== null)}
        columns={columns}
      />
    </>
  )
}

export default AnimalTable
