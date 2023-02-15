import Button from '../Button'
import Modal from '../Modal'

interface IProps {
  isOpen: boolean
  closeModal: any
}

export default function DeleteMemberModal(props: IProps) {
  const { isOpen, closeModal } = props

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="space-y-6 p-3 text-center">
        <h1 className="text-2xl font-semibold">Hapus Member Ini?</h1>
        <p className="text-base text-neutral-4">
          Apakah kamu yakin ingin menghapus member ini? Tindakan ini tidak bisa
          dibatalkan
        </p>
        <div className="flex gap-4">
          <Button className="w-full py-3 capitalize">Cancel</Button>
          <Button className="w-full py-3 capitalize" intent="secondary">
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}
