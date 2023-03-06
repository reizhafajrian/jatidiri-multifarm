'use client'
import { ToastContainer } from 'react-toastify'

export default function Toast() {
  return (
    <ToastContainer
      toastClassName="shadow-none border font-sans rounded-xl"
      position="top-center"
    />
  )
}
