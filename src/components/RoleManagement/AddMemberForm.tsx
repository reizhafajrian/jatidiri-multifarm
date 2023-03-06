import AuthForm from '../Form/AuthForm'
import { Close } from '../Icons'
import Modal from '../Modal'

interface IProps {
  isOpen: boolean
  closeModal: any
}

export default function AddMemberForm(props: IProps) {
  const { isOpen, closeModal } = props

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tambah Member</h1>
        <button onClick={() => closeModal(false)}>
          <Close />
        </button>
      </div>
      <div className="my-5">
        <AuthForm mode="register" />
      </div>
    </Modal>
  )
}
