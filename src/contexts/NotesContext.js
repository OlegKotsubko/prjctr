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
} from "../actions/actions";
import notesReducer from '../reducer/reducer'
import mockData from "./mockData";

export const NoteContext = createContext([])

const storage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [mockData];

export const NotesContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(notesReducer, storage)
  const [editItem, setEditItem] = useState(null)
  const [previewMode, setPreviewMode] = useState(null)
  const [activeNote, setActiveNote] = useState(null)

  const [actions] = useState(() => ({
    addNote: addNote(dispatch),
    editNote: editNote(dispatch),
    deleteNote: deleteNote(dispatch),
  }))

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state))
  }, [state])

  const findNote = id => {
    setEditItem(state.find(item => item.id === id))
  }

  const getNoteById = id => {
    setPreviewMode(state.find(item => item.id === id))
  }

  const backToForm = () => {
    setPreviewMode(null)
  }

  const submitEdit = () => {
    setEditItem(null)
  }

  const setActiveNoteById = id => {
    if(id !== undefined) {
      return setActiveNote(state.find(item => item.id === id))
    }
    return setActiveNote(null)
  }

  const contextValues = {
    state,
    submitEdit,
    findNote,
    editItem,
    getNoteById,
    backToForm,
    previewMode,
    actions,
    setActiveNoteById,
    activeNote,
  }

  return (
    <NoteContext.Provider value={contextValues}>
      { children }
    </NoteContext.Provider>
  )
}
