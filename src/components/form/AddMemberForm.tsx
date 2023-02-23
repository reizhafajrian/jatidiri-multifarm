import { IUser } from '@/data/interfaces'
import { memberSchema } from '@/data/validations'
import clsx from 'clsx'
import { Formik } from 'formik'
import { Button, InputSelect, InputText, Modal } from '../shared'
import { Close } from '../shared/Icons'

export default function AddMemberForm({ isOpen, closeModal }: any) {
  const addMemberHandler = async (values: IUser) => {
    return console.log({ ...values })
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tambah Member</h1>
        <button onClick={() => closeModal(false)}>
          <Close />
        </button>
      </div>
      <Formik
        initialValues={{} as IUser}
        validationSchema={memberSchema}
        onSubmit={(values) => addMemberHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <InputText
              name="name"
              label="Nama"
              defaultValue={values.name}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.name}
            />
            <InputText
              name="email"
              label="Email"
              defaultValue={values.email}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.email}
            />
            <InputText
              name="whatsapp_number"
              label="No Whatsapp"
              defaultValue={values.whatsapp_number}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.whatsapp_number}
            />
            <InputSelect
              name="role"
              label="Role"
              options={['Admin', 'Super Admin']}
              value={values.role!}
              errorMsg={errors.role}
              disabled={isSubmitting}
            />

            <InputText
              isSecured
              name="password"
              label="Password"
              defaultValue={values.password}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.password}
            />
            <Button
              type="submit"
              className={clsx(
                'w-full rounded-lg py-2',
                isSubmitting && 'animate-pulse'
              )}
              disabled={isSubmitting}
            >
              save
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
