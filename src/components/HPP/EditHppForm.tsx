import Button from '../Button'
import InputText from '../Form/InputText'
import Modal from '../Modal'

interface IProps {
  eartagCode: string
  isOpen: boolean
  closeModal: any
}

export default function EditHppForm(props: IProps) {
  const { eartagCode, isOpen, closeModal } = props

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-5 text-base font-semibold">Edit Data HPP</h1>
      <div className="mb-8 space-y-5">
        <InputText label="" value={eartagCode} disabled />
        <div className="grid grid-cols-2 gap-5">
          <InputText label="" value={'3000000'} disabled />
          <InputText label="Harga Jual" />
        </div>
        <InputText label="Keterangan" />
      </div>
      <div className="flex justify-end gap-3">
        <Button intent="secondary" onClick={() => closeModal(false)}>
          cancel
        </Button>
        <Button>save</Button>
      </div>
    </Modal>
  )
}
