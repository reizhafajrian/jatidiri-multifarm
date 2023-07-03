"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DialogClose } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/ui/form"
import { Icons } from "@/components/ui/Icons"
import InputDate from "@/components/ui/input-date"
import InputText from "@/components/ui/input-text"
import { Tabs, TabsContent } from "@/components/ui/tabs"

interface IProps {
  currentValue: any
}

export default function CertificateForm({ currentValue }: IProps) {
  const { user } = useStore()
  const [open, setOpen] = useState(false)
  const [showLevel2, setShowLevel2] = useState(false)
  const [activeTab, setActiveTab] = useState("section_1")
  const [loading, setLoading] = useState(false)

  const methods = useForm({
    defaultValues: {
      // c_animal: animal.name,
      c_gender: currentValue.gender === true ? "sire" : "dam",
      c_birth_date: currentValue.birth_date,
      created_by: `${user?.firstName!} ${user?.lastName!}`,
    },
  })

  const createCertificate = async () => {
    setLoading(true)
    const values = methods.getValues()
    console.log({ values })
    setActiveTab("section_3")
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-16 w-full" type="button">
          <Icons.plus className="mr-2 md:mr-6" />
          <span className="text-sm font-medium">Buat Sertifikat</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <Form methods={methods}>
          {activeTab !== "section_3" ? (
            <DialogTitle>Buat Sertifikat</DialogTitle>
          ) : (
            <div className="flex justify-end">
              <DialogClose
                onClick={() => {
                  setActiveTab("section_1")
                  setShowLevel2(false)
                }}
              >
                <Icons.x />
              </DialogClose>
            </div>
          )}

          <Tabs defaultValue="section_1" value={activeTab}>
            <TabsContent value="section_1" className="space-y-5">
              <div className="grid grid-cols-2 gap-6">
                <InputText name="c_animal" label="Jenis Hewan" disabled />
                <InputText name="c_gender" label="Jenis Kelamin" disabled />
              </div>
              <InputText name="c_name" label="Nama Hewan" />
              <div className="grid grid-cols-2 gap-6">
                <InputText name="c_eartag" label="Eartag" disabled />
                <InputDate name="c_birth_date" label="Tanggal Lahir" disabled />
              </div>
            </TabsContent>

            <TabsContent value="section_2" className="space-y-5">
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

              <div className={showLevel2 ? "block space-y-5" : "hidden"}>
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
            </TabsContent>

            <TabsContent value="section_3" className="space-y-5">
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
                <Link
                  href={`/dashboard`}
                  className="text-xs font-medium text-primary-5 underline"
                >
                  Klik di sini untuk melihat Sertifikat.
                </Link>
              </div>
            </TabsContent>
          </Tabs>

          <div
            className={cn(
              "justify-end gap-3 pt-5",
              activeTab === "section_3" ? "hidden" : "flex"
            )}
          >
            {activeTab === "section_1" ? (
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-36"
                  disabled={loading}
                  onClick={() => {
                    methods.reset()
                    setShowLevel2(false)
                  }}
                >
                  CANCEL
                </Button>
              </DialogClose>
            ) : (
              <Button
                type="button"
                variant="outline"
                className="w-36"
                onClick={() => {
                  const sec = (num: number) => activeTab === "section_" + num
                  if (sec(2) && showLevel2) return setShowLevel2(false)
                  setActiveTab("section_1")
                }}
                disabled={loading}
              >
                PREVIOUS
              </Button>
            )}
            {showLevel2 ? (
              <Button
                type="button"
                className="w-36"
                onClick={createCertificate}
                isLoading={loading}
              >
                SAVE
              </Button>
            ) : (
              <Button
                type="button"
                className="w-36"
                onClick={() => {
                  const sec = (num: number) => activeTab === "section_" + num
                  if (sec(1)) return setActiveTab("section_2")
                  if (!showLevel2) setShowLevel2(true)
                }}
                disabled={loading}
              >
                NEXT
              </Button>
            )}
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
