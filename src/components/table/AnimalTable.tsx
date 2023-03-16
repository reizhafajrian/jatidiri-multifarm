'use client'
import useDataList from '@/hooks/useDataList'
import { useAnimalStore } from '@/store/animal'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
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
  const { origin_female, origin_male, ...a } = useAnimalStore()

  const queries = []
  !isCempek && queries.push(type === 'male' ? 'gender=true' : 'gender=false')
  origin_male !== 'all' && queries.push('origin_male=' + origin_male)
  origin_female !== 'all' && queries.push('origin_female=' + origin_female)

  const { data, loading, mutate } = useDataList(
    isCempek ? `/api/${animal}/cempek/get` : `/api/${animal}/get`,
    queries
  )

  const deleteHandler = async (id: string) => {
    try {
      const res = await a.deleteAnimal({
        animal,
        eartag_code: id,
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
          <DeleteModal
            title={`Hapus Data Ini?`}
            desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
            deleteHandler={() => deleteHandler(data.getValue())}
          />
        </div>
      ),
    },
    { header: 'Keterangan', accessorKey: 'description' },
  ]

  return (
    <Table
      isLoading={loading}
      fixedCol={3}
      data={data?.filter((i: any) => i._id !== null)}
      columns={columns}
    />
  )
}

export default AnimalTable
