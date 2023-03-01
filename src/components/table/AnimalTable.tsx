'use client'
import { useAnimalStore } from '@/store/animal'
import { longDateFormatter } from '@/utils/formatDate'
import formatRupiah from '@/utils/formatRupiah'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import AnimalFilter from '../filter/AnimalFilter'
import DeleteModal from '../form/DeleteModal'
import { Button, Table } from '../shared'

export default function AnimalTable() {
  const router = useRouter()
  const { deleteAnimal, animal_type, gender, animalList } = useAnimalStore()
  const [isOpen, closeModal] = useState(false)
  const [id, setId] = useState('')

  const editAnimalData = (eartag_code: any) => {
    router.push(`/${animal_type}/${gender}/edit?eartag_code=${eartag_code}`)
  }

  const deleteHandler = async () => {
    try {
      await deleteAnimal(id)
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
        data={animalList}
        columns={columns(editAnimalData, setId, closeModal)}
        fixedCol={3}
      />
    </>
  )
}

const columns = (editAnimalData: any, setId: any, closeModal: any) => [
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
  {
    header: 'Aksi',
    accessorKey: '_id',
    cell: (data: any) => (
      <div className="flex gap-2">
        <Button intent="edit" onClick={() => editAnimalData(data.getValue())} />
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
