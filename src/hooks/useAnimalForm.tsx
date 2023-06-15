"use client"

import { useEffect, useState } from "react"

import useStore from "@/store/useStore"

interface IProps {
  formType: "add" | "edit"
  cempekForm?: boolean
  gender?: string
}

function useAnimalForm({ formType, cempekForm, gender }: IProps) {
  const { user, animal, addAnimal, editAnimal } = useStore()
  const [title, setTitle] = useState("")
  const [detailTitle, setDetailTitle] = useState("")
  const [animalTitle, setAnimalTitle] = useState("")
  const [animalName, setAnimalName] = useState("")
  const [created_by, setCreatedBy] = useState("")

  const formTitle = formType == "add" ? "Tambah" : "Edit"
  const genderTitle = gender === "true" ? "Jantan" : "Betina"

  useEffect(() => {
    setTitle(
      `${formTitle} Data ${animal.title} ${cempekForm ? "cempek" : genderTitle}`
    )
    setDetailTitle(
      `Detail Data ${animal.title} ${cempekForm ? "cempek" : genderTitle}`
    )
    setAnimalTitle(animal?.title)
    setAnimalName(animal?.name)
    setCreatedBy(user?.id ?? "")
    console.log("hit")
  }, [])

  return {
    title,
    detailTitle,
    animalTitle,
    genderTitle,
    addAnimal,
    editAnimal,
    animal: animalName,
    created_by,
  }
}

export default useAnimalForm
