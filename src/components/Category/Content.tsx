'use client'
import { useState } from 'react'
import Button from '../Button'
import AddCategoryForm from '../Form/AddCategoryForm'
import Modal from '../Modal'
import Table from '../Table/Table'

interface IProps {
  category: string
  title: string
  data: any
  cardList: {
    icon?: any
    title: string
    value: string
    label?: string
  }[]
  columns: any
}

export default function Content(props: IProps) {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <AddCategoryForm
          category={props.category}
          title={props.title}
          closeModal={closeModal}
        />
      </Modal>
      <div>
        <h1 className="mb-8 text-2xl font-semibold text-primary-4">
          {props.title}
        </h1>
        <div className="mb-6 flex items-end justify-between">
          <div className="flex gap-6">
            {props.cardList.map((item, idx) => (
              <div key={idx} className="rounded-lg bg-white p-6">
                <div className="mb-6 flex items-center justify-between gap-6 text-xl font-medium">
                  {item.icon} <h3>{item.title}</h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold">
                    {item.value}{' '}
                    {item.label && (
                      <span className="text-base font-normal text-neutral-4">
                        {item.label}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button className="capitalize" onClick={() => closeModal(true)}>
            tambah {props.title}
          </Button>
        </div>
        <Table data={props.data} columns={props.columns} fixedCol={2} />
      </div>
    </>
  )
}
