import {cleanHTML, replaceTags} from "../helpers/cleanHTML";
import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE
} from "../actions/actions";


const notesReducer = (state, event) => {
  switch (event.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          title: event.title,
          description: event.description,
          rawTextFromHTML: replaceTags(cleanHTML(event.description)),
          sanitizedHTML: cleanHTML(event.description),
          id: event.id
        }
      ]
    case EDIT_NOTE:
      return [
        ...state.map(note => note.id === event.id ? {
          title: event.title,
          description: event.description,
          rawTextFromHTML: replaceTags(cleanHTML(event.description)),
          sanitizedHTML: cleanHTML(event.description),
          id: event.id
        } : note)
      ]
    case DELETE_NOTE:
      return [
        ...state.filter(item => item.id !== event.id)
      ]

    default:
      return state
  }
}

export default notesReducer
