// Actions

const ADD_NOTE = "ADD_NOTE"
const EDIT_NOTE = "EDIT_NOTE"
const REMOVE_NOTE = "REMOVE_NOTE"

//Reducer

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          title: action.payload.title,
          description: action.payload.description,
          rawTextFromHTML: action.payload.rawTextFromHTML,
          sanitizedHTML: action.payload.sanitizedHTML,
          id: action.payload.id
        }
      ]
    case EDIT_NOTE:
      return [
        ...state.map(note => note.id === action.payload.id ? {
          title: action.payload.title,
          description: action.payload.description,
          rawTextFromHTML: action.payload.rawTextFromHTML,
          sanitizedHTML: action.payload.sanitizedHTML,
          id: action.payload.id
        } : note)
      ]
    case REMOVE_NOTE:
      return [
        ...state.filter(item => item.id !== action.payload)
      ]

    default:
      return state
  }
}
