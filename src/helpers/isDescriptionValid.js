const MAX_DESCRIPTION_LENGTH = 8

const isDescriptionValid = (description) => {
  if(description.length > MAX_DESCRIPTION_LENGTH) {
    console.log(`Description is more then ${Number(description.length) - (MAX_DESCRIPTION_LENGTH)}`)
  }
}

export default isDescriptionValid
