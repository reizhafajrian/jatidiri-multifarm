import { Post } from '@/libs/api'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { animal, formType, uid, id, ...rest } = await request.json()

  const formData = new FormData()
  formData.append('created_by', uid)

  //   console.log(rest.files[0])

  for (let value in rest) {
    formData.append(value, rest[value])
  }

  formData.set('files', rest.files[0])

  //   for (const value of formData.values()) {
  //     console.log(value)
  //   }

  const dataUpdated = { data: [{ ...rest, _id: id }] }

  let res
  if (formType == 'add') {
    res = await Post(`/${animal}/create`, undefined, formData)
  } else {
    res = await Post(`/${animal}/update`, dataUpdated)
  }

  console.log({ res })
  //   console.log({ res: res.errors[0].value })

  return NextResponse.json(res)
}
