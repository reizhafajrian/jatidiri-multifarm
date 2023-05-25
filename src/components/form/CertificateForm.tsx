'use client'
import { Plus, X } from '@/components/shared/Icons'
import useStore from '@/store/useStore'
import { format } from 'date-fns'
import Image from 'next/image'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputDate, InputSelect, InputText } from '../shared'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../shared/Dialog'

const CertificateForm: FC<any> = ({ currentValue }) => {
  const { animal, user } = useStore()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(DUMMY_CERTIFICATE)

  const [sec1, setSec1] = useState(true)
  const [sec2, setSec2] = useState(false)
  const [sec3, setSec3] = useState(false)
  const [success, setSuccess] = useState(false)

  const orgOptions = [
    'Australian Dorper and White Dorper Association',
    'Dorper Sheep Society of Australia Inc',
    'Dairy Goat Society of Australia Ltd',
  ]

  const methods = useForm({
    defaultValues: {
      c_animal: animal.name,
      c_gender: currentValue.gender === true ? 'Sire' : 'Dam',
    },
  })

  const submitHandler: SubmitHandler<any> = async (value) => {
    setSec2(false)

    await setData((prev) => ({
      ...prev,
      organization: value.c_organization,
      prefix: value.c_name,
      tag: value.c_eartag,
      gender: value.c_gender,
      issueDate: format(new Date(), 'dd/MM/yyyy'),
      birthDate: format(new Date(value.c_birth_date), 'dd/MM/yyyy'),
      adminName: `${user?.firstName!} ${user?.lastName!}`,
    }))

    setSuccess(true)
  }

  const closeModalHandler = () => {
    setSec1(true)
    setSec2(false)
    setSec3(false)
    setSuccess(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-16 w-full" type="button">
          <Plus className="mr-2 md:mr-6" />
          <span className="text-sm font-medium">Buat Sertifikat</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        {success && (
          <div className="">
            <div className="flex justify-end">
              <DialogClose onClick={closeModalHandler}>
                <X />
              </DialogClose>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative h-80 w-80">
                <Image
                  src="/success.png"
                  alt="success-img"
                  className="object-contain"
                  fill
                />
              </div>
              <h1 className="mb-1 text-xl font-medium">
                Sertifikat berhasil dibuat!
              </h1>
              {/* <PDFDownloadLink
                document={<Certificate data={data} />}
                fileName="certificate.pdf"
                className="text-xs font-medium text-primary-5 underline"
              >
                {({ loading }) =>
                  loading
                    ? 'Loading Document...'
                    : 'Klik di sini untuk melihat Sertifikat.'
                }
              </PDFDownloadLink> */}
            </div>
          </div>
        )}

        {!success && <DialogTitle>Buat Sertifikat</DialogTitle>}

        <Form methods={methods} onSubmit={submitHandler}>
          <div className={sec1 ? 'block space-y-5' : 'hidden'}>
            <InputSelect
              label="Organisasi"
              name="c_organization"
              options={orgOptions.map((name) => ({ name, value: name }))}
            />
            <div className="grid grid-cols-2 gap-6">
              <InputText name="c_animal" label="Jenis Hewan" disabled />
              <InputText name="c_gender" label="Jenis Kelamin" disabled />
            </div>
            <InputText name="c_name" label="Nama Hewan" />
            <div className="grid grid-cols-2 gap-6">
              <InputText name="c_eartag" label="Eartag" />
              <InputDate name="c_birth_date" label="Tanggal Lahir" />
            </div>
            <ButtonAction
              methods={methods}
              onNext={() => {
                setSec1(false)
                setSec2(true)
              }}
            />
          </div>

          <div className={sec2 ? 'block space-y-5' : 'hidden'}>
            <div className="space-y-5">
              <p className="font-medium">Level 1</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-medium">Sire</p>
                  <InputText name="l1_sire_name" label="Nama Sire" />
                  <InputText name="l1_sire_eartag" label="Eartag Sire" />
                  <InputText name="l1_sire_breed" label="Keturunan" />
                </div>

                <div className="space-y-3">
                  <p className="font-medium">Dam</p>
                  <InputText name="l1_dam_name" label="Nama Dam" />
                  <InputText name="l1_dam_eartag" label="Eartag Dam" />
                  <InputText name="l1_dam_breed" label="Keturunan" />
                </div>
              </div>
            </div>

            <div className={sec3 ? 'block space-y-5' : 'hidden'}>
              <p className="font-medium">Level 2</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-medium">Sire</p>
                  <InputText name="l2_sire_name" label="Nama Sire" />
                  <InputText name="l2_sire_eartag" label="Eartag Sire" />
                  <InputText name="l2_sire_breed" label="Keturunan" />
                </div>

                <div className="space-y-3">
                  <p className="font-medium">Dam</p>
                  <InputText name="l2_dam_name" label="Nama Dam" />
                  <InputText name="l2_dam_eartag" label="Eartag Dam" />
                  <InputText name="l2_dam_breed" label="Keturunan" />
                </div>
              </div>
            </div>

            <div className={sec3 ? 'block' : 'hidden'}>
              <ButtonAction methods={methods} onPrev={() => setSec3(false)} />
            </div>

            <div className={!sec3 ? 'block' : 'hidden'}>
              <ButtonAction
                methods={methods}
                onPrev={() => {
                  setSec1(true)
                  setSec2(false)
                  setSec3(false)
                }}
                onNext={() => {
                  setSec3(true)
                }}
              />
            </div>
          </div>
        </Form>
      </DialogContent>
    </DialogRoot>
  )
}

export default CertificateForm

const ButtonAction = ({ methods, onNext, onPrev }: any) => {
  return (
    <div className="flex justify-end gap-3">
      {!onPrev ? (
        <DialogClose asChild>
          <Button
            type="button"
            variant="outline"
            className="w-36"
            disabled={methods.formState.isSubmitting}
          >
            CANCEL
          </Button>
        </DialogClose>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-36"
          onClick={onPrev}
          disabled={methods.formState.isSubmitting}
        >
          PREVIOUS
        </Button>
      )}
      {!onNext ? (
        <Button
          type="submit"
          className="w-36"
          isLoading={methods.formState.isSubmitting}
        >
          SAVE
        </Button>
      ) : (
        <Button
          type="button"
          className="w-36"
          onClick={onNext}
          disabled={methods.formState.isSubmitting}
        >
          NEXT
        </Button>
      )}
    </div>
  )
}

const DUMMY_CERTIFICATE = {
  organization: 'DORPER SHEEP SOCIETY OF AUSTRALIA INC',
  prefix: 'douwana',
  tag: '210759',
  issueDate: '21/09/2022',
  exportTag: 'BL4528',
  registrationNum: 'D048 210759',
  lambPlanId: '400048-2021-210759',
  colour: 'black',
  conception: 'natural',
  gender: 'Dam',
  grade: 'Fullblood',
  birthDate: '05/09/2021',
  breeder: 'D048 BATTEN FARMS',
  owner: 'D048 BATTEN FARMS',
  notes:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est porro praesentium tenetur ab omnis. Eveniet, perspiciatis hic vel facere illo earum aliquid dolores nemo reiciendis numquam perferendis dicta iste.',
  adminName: 'name',
}
