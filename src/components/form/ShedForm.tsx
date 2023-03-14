'use client'
import { Field, Form, InputRadio } from '@/components/shared'
import { shedSchema as schema } from '@/data/validations'
import { useAuthStore } from '@/store/auth'
import { IShed, useShedStore } from '@/store/shed'
import { useRouter } from 'next/navigation'

const animal_types = [
  { value: 'goat', label: 'Kambing' },
  { value: 'sheep', label: 'Domba' },
  { value: 'cow', label: 'Sapi' },
]

export default function ShedForm() {
  const router = useRouter()
  const { user } = useAuthStore()
  const { shed, addShed } = useShedStore()

  const onSubmit = async (values: IShed) => {
    console.log(values)

    // try {
    //   const res = await addShed({
    //     ...values,
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
    <Form schema={schema} onSubmit={onSubmit}>
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {animal_types.map((item, idx) => (
          <InputRadio
            key={idx}
            label={item.label}
            name="animal_type"
            value={item.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <Field type="input" name="shed_code" label="No Kandang" />
          <Field
            type="select"
            name="feed"
            label="Pakan"
            options={[
              { name: 'opt-1', value: 'opt-1' },
              { name: 'opt-2', value: 'opt-2' },
              { name: 'opt-3', value: 'opt-3' },
            ]}
          />
          <Field type="input" name="age_range" label="Range Usia" />
        </div>
        <div className="space-y-6">
          <Field type="input" name="animal_weight" label="Berat Hewan" />
          <Field type="input" name="feed_weight" label="Berat Pakan" />
          <Field type="input" name="description" label="Keterangan" />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <Field type="submit" cancelHandler={() => router.back()} />
      </div>
    </Form>
  )
}
