'use client'
import { categoryTitle } from '@/data/data'
import { ICategoryProps } from '@/data/interfaces'
import { useState } from 'react'
import Button from '../Button'
import AddCategoryForm from './AddCategoryForm'
import CategoryCardList from './CategoryCardList'
import CategoryTable from './CategoryTable'

export default function Content(props: ICategoryProps) {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <AddCategoryForm
        category={props.category!}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <div>
        <h1 className="mb-8 text-2xl font-semibold text-primary-4">
          {categoryTitle(props.category!)}
        </h1>
        <div className="mb-6 flex items-end justify-between">
          <CategoryCardList cardList={props.cardList} />
          <Button className="w-fit px-2" onClick={() => closeModal(true)}>
            <span className="text-sm capitalize">
              tambah {categoryTitle(props.category!)}
            </span>
          </Button>
        </div>
      </div>
      <CategoryTable category={props.category} data={props.data} />
    </>
  )
}
