import { useContext } from "react";
import { NoteContext } from "../contexts/NotesContext";

const useNoteContext = () => {
  const {
    state,
    actions,
    getNoteById,
  } = useContext(NoteContext);

  return {
    state,
    actions,
    getNoteById,
  }
}

export default useNoteContext;
