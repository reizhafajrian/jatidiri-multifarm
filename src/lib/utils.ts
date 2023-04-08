import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const longDateFormatter = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formatter.format(date)
}

export const shortDateFormatter = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return formatter.format(date)
}

export const formatRupiah = (angka: string | number = 0, prefix?: string) => {
  if (angka === null || angka === undefined) return 'Rp 0'
  let angka_string = typeof angka == 'number' ? angka.toString() : angka

  let number_string = angka_string?.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substring(0, sisa),
    ribuan = split[0].substring(sisa).match(/\d{3}/gi)

  if (ribuan) {
    const separator = sisa ? '.' : ''
    rupiah += separator + ribuan.join('.')
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah
  console.log( prefix ? rupiah : rupiah ? 'Rp ' + rupiah : '')
  return prefix ? rupiah : rupiah ? 'Rp ' + rupiah : ''
}

export const categoryTitle = (category: string) => {
  const title =
    category === 'feed'
      ? 'Pakan'
      : category === 'vitamin'
      ? 'Vitamin'
      : category === 'vaccine'
      ? 'Vaksin'
      : 'Obat Cacing'

  return title
}
