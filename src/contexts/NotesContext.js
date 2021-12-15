import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

import mockData from "./mockData";

export const NoteContext = createContext([])

const storage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [mockData];

export const NotesContextProvider = ({children}) => {
  const [notes, setNotes] = useState(storage)
  const [editItem, setEditItem] = useState(null)
  const [previewMode, setPreviewMode] = useState(null)

  const setStorage = (arr) => {
    setNotes(arr)
    localStorage.setItem('notes', JSON.stringify(arr))
  }

  const addNote = ({title, description, rawTextFromHTML, sanitizedHTML}) => {
    setStorage([...notes, {title, description, rawTextFromHTML, sanitizedHTML, id: uuid()}])
  }

  const deleteNote = id => {
    setStorage(notes.filter(item => item.id !== id))
  }

  const findNote = id => {
    setEditItem(notes.find(item => item.id === id))
  }

  const getNoteById = id => {
    setPreviewMode(notes.find(item => item.id === id))
  }

  const backToForm = () => {
    setPreviewMode(null)
  }

  const editTask = (title, description, rawTextFromHTML, sanitizedHTML, id) => {
    setStorage(notes.map(note => note.id === id ? {title, description, rawTextFromHTML, sanitizedHTML, id} : note))
    setEditItem(null)
  }

  const contextValues = {
    notes,
    addNote,
    deleteNote,
    findNote,
    editTask,
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
