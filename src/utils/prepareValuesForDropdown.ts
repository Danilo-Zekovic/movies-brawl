const prepareValuesForDropdown = (
  arrToBePrepared: { [key: string]: string | number }[],
  mapToValue: string,
  mapToLabel: string,
) => {
  const options = arrToBePrepared.map((obj) => {
    return { value: obj[mapToValue], label: obj[mapToLabel] }
  })

  return options
}

export default prepareValuesForDropdown
