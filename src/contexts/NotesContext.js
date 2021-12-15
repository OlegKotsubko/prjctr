import { createContext, useState, useReducer, useEffect } from "react";

import mockData from "./mockData";
import reducer from "../reducer/reducer";

export const NoteContext = createContext([])

const storage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [mockData];

export const NotesContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, storage)
  const [editItem, setEditItem] = useState(null)
  const [previewMode, setPreviewMode] = useState(null)

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

  const contextValues = {
    state,
    dispatch,
    submitEdit,
    findNote,
    editItem,
    getNoteById,
    backToForm,
    previewMode
  }

  return (
    <NoteContext.Provider value={contextValues}>
      { children }
    </NoteContext.Provider>
  )
}
