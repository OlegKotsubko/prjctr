const MAX_TITLE_LENGTH = 10

const validateTitle = (title) => {
  if (title.length > MAX_TITLE_LENGTH) {
    return `Title is more then ${Number(title.length) - (MAX_TITLE_LENGTH)}`
  } else if(title === '') {
    return 'Title is empty'
  }

  return ''
}
export default validateTitle
