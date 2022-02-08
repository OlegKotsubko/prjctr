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
  }
}

export default useNoteContext;
