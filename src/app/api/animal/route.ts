import { Get } from '@/lib/api'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const animal = searchParams.get('animal')
  const type = searchParams.get('type')
  const origin_male = searchParams.get('origin_male')
  const origin_female = searchParams.get('origin_female')

  let params = []

  if (type !== 'cempek') {
    params.push(`gender=${type === 'male' ? 'true' : 'false'}`)
  }

  params.push(`cempek=${type == 'cempek' ? 'true' : 'false'}`)

  if (origin_male !== 'all' || origin_male) {
    params.push(`origin_male=${origin_male}`)
  }

  if (origin_female !== 'all') {
    params.push(`origin_female=${origin_female}`)
  }

  const queries = params.join('&')

  const res = await Get(`/${animal}/get?${queries}`)

  return NextResponse.json(res)
}

// export async function POST(request: Request) {
//   const formData = await request.formData()
//   const animal = formData.get('animal')
//   const formType = formData.get('formType')

//   const updatedDataJSON = [Object.fromEntries(formData)]

//   let res
//   if (formType == 'add') {
//     res = await Post(`/${formData.get('animal')}/create`, undefined, formData)
//   } else {
//     res = await Post(`/${animal}/update`, updatedDataJSON)
//   }

//   return NextResponse.json(res)
// }
