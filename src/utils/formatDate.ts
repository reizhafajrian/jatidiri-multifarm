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
