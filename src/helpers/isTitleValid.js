const MAX_TITLE_LENGTH = 10

const isTitleValid = (title) => {
  if (title.length > MAX_TITLE_LENGTH) {
    console.log(`Title is more then ${Number(title.length) - (MAX_TITLE_LENGTH)}`)
  }
}
export default isTitleValid
