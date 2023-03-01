'use client'
import { useAnimalStore } from '@/store/animal'
import { useCempekStore } from '@/store/cempek'
import { longDateFormatter } from '@/utils/formatDate'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import AnimalFilter from '../filter/AnimalFilter'
import DeleteModal from '../form/DeleteModal'
import { Button, Table } from '../shared'

export default function CempekTable() {
  const router = useRouter()
  const { animal_type } = useAnimalStore()
  const { deleteCempek, cempekList } = useCempekStore()
  const [isOpen, closeModal] = useState(false)
  const [id, setId] = useState('')

  const editCempekData = (id: any) => {
    router.push(`/${animal_type}/cempek/edit?id=${id}`)
  }

  const deleteHandler = async () => {
    try {
      await deleteCempek(id)
    } catch (e) {
      console.log(e)
    }
  }

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
      <Table
        data={cempekList}
        columns={columns(editCempekData, setId, closeModal)}
        fixedCol={3}
      />
    </>
  )
}

const columns = (editCempekData: any, setId: any, closeModal: any) => [
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
  {
    header: 'Aksi',
    accessorKey: '_id',
    cell: (data: any) => (
      <div className="flex gap-2">
        <Button intent="edit" onClick={() => editCempekData(data.getValue())} />
        <Button
          intent="delete"
          onClick={() => {
            closeModal(true)
            setId(data.getValue())
          }}
        />
      </div>
    ),
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
  {
    header: 'updated_at',
    accessorKey: 'updated_at',
  },
]
