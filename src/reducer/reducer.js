import {cleanHTML, replaceTags} from "../helpers/cleanHTML";
import {v4 as uuid} from "uuid";

// Events

const ADD_NOTE = "ADD_NOTE"
const EDIT_NOTE = "EDIT_NOTE"
const REMOVE_NOTE = "REMOVE_NOTE"

//Reducer
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
    case REMOVE_NOTE:
      return [
        ...state.filter(item => item.id !== event.id)
      ]

    default:
      return state
  }
}

export default notesReducer

export const addNote = (dispatch) => (
  title,
  description,
) =>
  dispatch({
    type: ADD_NOTE,
    title,
    description,
    id: uuid()
});

export const editNote = (dispatch) => (
  title,
  description,
  id
) =>
  dispatch({
    type: EDIT_NOTE,
    title,
    description,
    id
});

export const removeNote = (dispatch) => (
  id
) =>
  dispatch({
    type: REMOVE_NOTE,
    id
});
