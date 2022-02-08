import { useContext } from "react";
import { NoteContext } from "../contexts/NotesContext";

const useNoteContext = () => {
  const {
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
  } = useContext(NoteContext);

  return {
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
}

export default useNoteContext;
