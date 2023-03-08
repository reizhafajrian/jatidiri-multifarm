'use client'
import { useAnimalStore } from '@/store/animal'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import { Button, Table } from '../shared'

interface AnimalTableProps {
  data: {
    animal: string
    type: string
    data: any
  }
}

const AnimalTable: FC<AnimalTableProps> = ({
  data: { animal, type, data },
}) => {
  const [isOpen, closeModal] = useState(false)
  const router = useRouter()
  const a = useAnimalStore()
  const columns = type === 'cempek' ? a.cempekTColumns : a.animalTColumns

  const deleteToggle = (id: string) => {
    closeModal(true)
    useAnimalStore.setState({ eartag_code: id })
  }

  const deleteHandler = async () => {
    try {
      await a.deleteAnimal(a.eartag_code)
    } catch (e) {
      console.log(e)
    }
  }

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
        fixedCol={3}
        data={data}
        columns={[
          ...columns,
          {
            header: 'Aksi',
            accessorKey: '_id',
            cell: (data: any) => (
              <div className="flex gap-2">
                <Button
                  intent="edit"
                  onClick={() =>
                    router.replace(`/${animal}/edit/${data.getValue()}`)
                  }
                />
                <Button
                  intent="delete"
                  onClick={() => deleteToggle(data.getValue())}
                />
              </div>
            ),
          },
          { header: 'Keterangan', accessorKey: 'description' },
        ]}
      />
    </>
  )
}

export default AnimalTable
