import { useContext } from "react";
import { NoteContext } from "../contexts/NotesContext";

const useNoteContext = () => {
  const {
    state,
    actions,
    setActiveNoteById,
    deleteActiveNote,
    activeNote,
  } = useContext(NoteContext);

  return {
    state,
    actions,
    setActiveNoteById,
    deleteActiveNote,
    activeNote,
  }
}

export default useNoteContext;
