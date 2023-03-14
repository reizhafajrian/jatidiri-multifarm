import { IModal } from '@/data/interfaces'
import { Button, Modal } from '../shared'

export default function DeleteModal(
  props: IModal & { title: string; desc: string; deleteHandler: any }
) {
  const { isOpen, closeModal, title, desc, deleteHandler } = props

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="space-y-6 p-3 text-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-base text-neutral-4">{desc}</p>
        <div className="flex gap-4">
          <Button className="w-full" onClick={() => closeModal(false)}>
            Cancel
          </Button>
          <Button className="w-full" variant="outline" onClick={deleteHandler}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}
