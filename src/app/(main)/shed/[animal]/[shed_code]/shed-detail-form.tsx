"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

import { shedDetailSchema } from "@/lib/schemas"
import { IShedDetail } from "@/store/slices/shedSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import Form from "@/components/ui/Form"
import { Icons } from "@/components/ui/Icons"
import InputCheckbox from "@/components/ui/InputCheckbox"
import InputDate from "@/components/ui/InputDate"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"

interface IProps {
  options: any
}

export default function ShedDetailForm({ options }: IProps) {
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<any>({ feed: true })
  const { user, addShedData, shed_code, shed_id } = useStore()

  const methods = useForm<IShedDetail>({
    resolver: zodResolver(shedDetailSchema(categories)),
  })

  const onSubmit: SubmitHandler<IShedDetail> = async (values) => {
    await addShedData(values)
    setOpen(false)
    methods.reset()
    mutate(`/api/shed/data/get?shed_code=${shed_id}`)
    mutate(`/api/shed/get/detail/${shed_code}`)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Tambah Data
          <Icons.pen className="ml-3 h-4 w-4 fill-white" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Tambah Data</DialogTitle>

        <Form
          onSubmit={(values) =>
            onSubmit({ ...values, created_by: user?.id, shed_code: shed_id })
          }
          methods={methods}
        >
          <div className="mb-8 space-y-5">
            {/* category radio options */}
            <div className="flex justify-between">
              {shedDataFormContent.options.map(({ name, label }, idx) => (
                <InputCheckbox
                  key={idx}
                  label={label}
                  defaultChecked={categories[name]}
                  onChange={({ target: { checked } }: any) =>
                    setCategories((s: any) => ({ ...s, [name]: checked }))
                  }
                />
              ))}
            </div>
            {/* form fields */}
            {shedDataFormContent.content.map(({ fields, name, title }, idx) => (
              <div key={idx} className={categories[name] ? "block" : "hidden"}>
                <h3 className="mb-4 text-base font-medium">{title}</h3>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  {fields.map((field, idx) => (
                    <div key={idx}>
                      {field.type === "date" ? (
                        <InputDate name={field.name} label={field.label} />
                      ) : field.type === "select" ? (
                        <InputSelect
                          name={field.name}
                          label={field.label}
                          options={options[name].map((option: any) => ({
                            name: option["name"],
                            value: option["_id"],
                          }))}
                        />
                      ) : (
                        <InputText
                          name={field.name}
                          label={field.label}
                          type="number"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3">
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
            <Button
              type="submit"
              className="w-36"
              isLoading={methods.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </Form>
      </DialogContent>
    </DialogRoot>
  )
}

const shedDataFormContent = {
  options: [
    { label: "Pakan", name: "feed" },
    { label: "Vitamin", name: "vitamin" },
    { label: "Vaksin", name: "vaccine" },
    { label: "Obat Cacing", name: "anthelmintic" },
  ],
  content: [
    {
      name: "feed",
      title: "Pakan",
      fields: [
        { type: "date", label: "Tanggal", name: "data_feed_date" },
        { type: "select", label: "Jenis Pakan", name: "data_feed_type" },
        { type: "input", label: "Stok per hewan", name: "data_feed_stock" },
      ],
    },
    {
      name: "vitamin",
      title: "Vitamin",
      fields: [
        { type: "date", label: "Tanggal", name: "data_vitamin_date" },
        { type: "select", label: "Jenis vitamin", name: "data_vitamin_type" },
        { type: "input", label: "Stok per hewan", name: "data_vitamin_stock" },
      ],
    },
    {
      name: "vaccine",
      title: "Vaksin",
      fields: [
        { type: "date", label: "Tanggal", name: "data_vaccine_date" },
        { type: "select", label: "Jenis Vaksin", name: "data_vaccine_type" },
        { type: "input", label: "Stok per hewan", name: "data_vaccine_stock" },
      ],
    },
    {
      name: "anthelmintic",
      title: "Obat Cacing",
      fields: [
        { type: "date", label: "Tanggal", name: "data_anthelmintic_date" },
        {
          type: "select",
          label: "Jenis Obat Cacing",
          name: "data_anthelmintic_type",
        },
        {
          type: "input",
          label: "Stok per hewan",
          name: "data_anthelmintic_stock",
        },
      ],
    },
  ],
}
