const yearsAsDropdownOptions = () => {
  const currentYear = new Date().getFullYear()

  const yearOptions = []

  for (let index = 1900; index <= currentYear; index++) {
    yearOptions.push({ value: index, label: index })
  }

  return yearOptions.reverse()
}

export default yearsAsDropdownOptions
