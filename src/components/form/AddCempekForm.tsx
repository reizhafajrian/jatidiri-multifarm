'use client'
import { Field, Form } from '@/components/shared'
import { cempekSchema as schema } from '@/data/validations'
import { useAnimalStore } from '@/store/animal'
import { useAuthStore } from '@/store/auth'
import { ICempek, useCempekStore } from '@/store/cempek'
import { useRouter } from 'next/navigation'

export default function AddCempekForm() {
  const router = useRouter()
  const { user } = useAuthStore()
  const {
    animal_type,
    animalFormContent: c,
    animalTitle,
  } = useAnimalStore.getState()
  const { addCempek } = useCempekStore()

  const onSubmit = async (values: ICempek) => {
    // try {
    //   const res = await addCempek({
    //     ...values,
    //     animal_type,
    //     uid: user.id!,
    //   })
    //   if (res.status === 201) {
    //     toast.success(res.message)
    //     router.replace(`/${animal_type}`)
    //   } else {
    //     toast.error(res.errors[0].msg)
    //   }
    // } catch (e: any) {
    //   toast.error(e.message)
    // }
  }

  return (
    <>
      <h1 className="mb-6 text-base font-semibold">
        Tambah Data {animalTitle()} Cempek
      </h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-6">
            <Field
              type="select"
              name="type"
              label="Jenis Cempek"
              options={c?.typeOptions}
            />
            <Field type="input" name="birth_weight" label="Berat Lahir" />
            <Field
              type="select"
              name="female_origin"
              label="Asal Induk"
              options={c?.femaleOriginOptions}
            />
            <Field type="input" name="birth_condition" label="Kondisi Lahir" />
          </div>
          <div className="space-y-6">
            <Field type="date" name="birth_date" label="Tgl Lahir" />
            <Field
              type="select"
              name="gender"
              label="Jenis Kelamin"
              options={['female', 'male']}
            />
            <Field
              type="select"
              name="male_origin"
              label="Asal Pejantan"
              options={c?.maleOriginOptions}
            />
            <Field type="input" name="description" label="Keterangan" />
          </div>
        </div>
        <div className="mt-28 flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => router.back()} />
        </div>
      </Form>
    </>
  )
}
