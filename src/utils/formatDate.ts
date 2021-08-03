const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

// return example Aug 8, 2021
const formatDate = (date: string) => {
  const rawDate = new Date(date)

  const month = months[rawDate.getMonth()]
  const day = rawDate.getDate()
  const year = rawDate.getFullYear()

  return `${month} ${day}, ${year}`
}

export default formatDate
