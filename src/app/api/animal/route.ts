import { Post } from '@/libs/api'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const animal = formData.get('animal')
  const formType = formData.get('formType')
  console.log({ formType })

  // for (const value of formData.values()) {
  //   console.log(value)
  // }

  const updatedDataJSON = [Object.fromEntries(formData)]

  let res
  if (formType == 'add') {
    res = await Post(`/${formData.get('animal')}/create`, undefined, formData)
  } else {
    res = await Post(`/${animal}/update`, updatedDataJSON)
  }

  return NextResponse.json(res)
}
