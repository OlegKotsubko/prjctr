import {
  useNavigate,
  useParams
} from "react-router-dom";

import Note from "./Note";

import useNoteContext from "../../hooks/useNoteContext";

const NoteView = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {
    getNoteById,
  } = useNoteContext();

  const onStepBack = () => {
    navigate('/')
  }

  return(
    <Note
      activeNote={getNoteById(id)}
      onStepBack={onStepBack}
    />
  )
}

export default NoteView
