'use client'
import { hppSchema } from '@/lib/schemas'
import { IModal } from '@/lib/types'
import { IEditHpp, useHppStore } from '@/store/hpp'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputText, Modal } from '../shared'

interface IProps extends IModal {
  eartag_code: string
}

const EditHppForm: FC<IProps> = ({ closeModal, eartag_code, isOpen }) => {
  const { hpp, editHpp } = useHppStore()

  const methods = useForm<IEditHpp>({
    resolver: zodResolver(hppSchema),
    defaultValues: {
      ...hpp,
      eartag_code,
      // hpp: formatRupiah('1000000', ' '),
    },
  })

  const onSubmit: SubmitHandler<IEditHpp> = async (values) => {
    console.log(values)
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-5 text-base font-semibold">Edit Data HPP</h1>

      <Form methods={methods} onSubmit={onSubmit}>
        <div className="mb-8 space-y-5">
          <InputText name="eartag_code" label="" disabled />
          <div className="grid grid-cols-2 gap-5">
            <InputText name="hpp" label="" disabled />
            <InputText name="selling_price" label="Harga Jual" />
          </div>
          <InputText name="description" label="Keterangan" />
        </div>
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => closeModal(false)}
            disabled={methods.formState.isSubmitting}
          >
            CANCEL
          </Button>
          <Button
            type="submit"
            className="w-36"
            isLoading={methods.formState.isSubmitting}
          >
            SAVE
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default EditHppForm
