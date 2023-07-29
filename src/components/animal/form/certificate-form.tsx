"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DialogClose } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"

import { Api } from "@/lib/api"
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
  currentValue?: any
}

export default function CertificateForm({ currentValue }: IProps) {
  const { certificate } = useStore()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState("")
  const [showLevel2, setShowLevel2] = useState(false)
  const [activeTab, setActiveTab] = useState("section_1")
  const [loading, setLoading] = useState(false)

  const methods = useForm({
    values: {
      c_gender: certificate.gender,
      c_type: certificate.type,
      c_birth_date: certificate.birth_date,
      // ...(certificate.birth_date !== undefined && {
      //   c_birth_date: new Date(certificate.birth_date),
      // }),
    },
  })

  const createCertificate = async () => {
    setLoading(true)
    console.log({ certificate })
    const {
      name,
      gender,
      birth_date,
      type,
      lvl1_sire,
      lvl1_sire_eartag,
      lvl1_sire_tob,
      lvl1_dam,
      lvl1_dam_eartag,
      lvl1_dam_tob,
    } = certificate

    const url = "/api/cow/download/certificate"
    const queries = `name=${name}&gender=${gender}&birth_date=${birth_date}&type=${type}`
    const breeds = `lvl1_sire=${lvl1_sire}&lvl1_sire_eartag=${lvl1_sire_eartag}&lvl1_sire_tob=${lvl1_sire_tob}&lvl1_dam=${lvl1_dam}&lvl1_dam_eartag=${lvl1_dam_eartag}&lvl1_dam_tob=${lvl1_dam_tob}`
    setData(`${url}?${queries}&${breeds}`)
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
                <InputText name="c_type" label="Jenis Hewan" disabled />
                <InputText name="c_gender" label="Jenis Kelamin" disabled />
              </div>
              <InputText
                name="c_name"
                label="Nama Hewan"
                onChange={(e: any) => {
                  useStore.setState((s) => ({
                    ...s,
                    certificate: { ...certificate, name: e.target.value },
                  }))
                }}
              />
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
                    <InputText
                      name="lvl1_sire"
                      label="Nama Sire"
                      onChange={(e: any) => {
                        useStore.setState((s) => ({
                          ...s,
                          certificate: {
                            ...certificate,
                            lvl1_sire: e.target.value,
                          },
                        }))
                      }}
                    />
                    <InputText
                      name="lvl1_sire_eartag"
                      label="Eartag Sire"
                      onChange={(e: any) => {
                        useStore.setState((s) => ({
                          ...s,
                          certificate: {
                            ...certificate,
                            lvl1_sire_eartag: e.target.value,
                          },
                        }))
                      }}
                    />
                    <InputText
                      name="lvl1_sire_tob"
                      label="Keturunan"
                      onChange={(e: any) => {
                        useStore.setState((s) => ({
                          ...s,
                          certificate: {
                            ...certificate,
                            lvl1_sire_tob: e.target.value,
                          },
                        }))
                      }}
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium">Dam</p>
                    <InputText
                      name="lvl1_dam"
                      label="Nama Dam"
                      onChange={(e: any) => {
                        useStore.setState((s) => ({
                          ...s,
                          certificate: {
                            ...certificate,
                            lvl1_dam: e.target.value,
                          },
                        }))
                      }}
                    />
                    <InputText
                      name="lvl1_dam_eartag"
                      label="Eartag Dam"
                      onChange={(e: any) => {
                        useStore.setState((s) => ({
                          ...s,
                          certificate: {
                            ...certificate,
                            lvl1_dam_eartag: e.target.value,
                          },
                        }))
                      }}
                    />
                    <InputText
                      name="lvl1_dam_tob"
                      label="Keturunan"
                      onChange={(e: any) => {
                        useStore.setState((s) => ({
                          ...s,
                          certificate: {
                            ...certificate,
                            lvl1_dam_tob: e.target.value,
                          },
                        }))
                      }}
                    />
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
                <button
                  type="button"
                  onClick={() => window.open(data, "_blank")}
                  className="text-xs font-medium text-primary-5 underline"
                >
                  Klik di sini untuk melihat Sertifikat.
                </button>
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
