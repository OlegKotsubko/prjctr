const MAX_DESCRIPTION_LENGTH = 8

const validateDescription = (description) => {
  if(description.length > MAX_DESCRIPTION_LENGTH) {
    return `Description is more then ${Number(description.length) - (MAX_DESCRIPTION_LENGTH)}`
  } else if(description === '') {
    return 'Description is empty'
  }

  return ''
}

export default validateDescription
