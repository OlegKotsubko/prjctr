import {
  createContext,
  useState,
  useReducer,
  useEffect
} from "react";

import {
  addNote,
  editNote,
  deleteNote
} from "../actions/notes-actions";
import notesReducer from '../reducer/notes-reducer'
import mockData from "./mockData";

export const NoteContext = createContext([])

const storage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [mockData];

export const NotesContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(notesReducer, storage)
  const [activeNote, setActiveNote] = useState(null)

  const [actions] = useState(() => ({
    addNote: addNote(dispatch),
    editNote: editNote(dispatch),
    deleteNote: deleteNote(dispatch),
  }))

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state))
  }, [state])

  const setActiveNoteById = (id) => {
    setActiveNote(state.find(item => item.id === id))
  }

  const deleteActiveNote = () => {
    setActiveNote(null)
  }

  const contextValues = {
    state,
    actions,
    setActiveNoteById,
    deleteActiveNote,
    activeNote,
  }

  return (
    <NoteContext.Provider value={contextValues}>
      { children }
    </NoteContext.Provider>
  )
}
