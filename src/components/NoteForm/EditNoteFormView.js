import {
  useNavigate,
  useParams
} from "react-router-dom";

import NoteForm from "./NoteForm";

import useNoteContext from "../../hooks/useNoteContext";

const EditNoteFormView = () => {
  const {
    actions,
    getNoteById,
  } = useNoteContext();
  const navigate = useNavigate();
  const {id} = useParams()

  const activeNote = getNoteById(id)

  const onStepBack = () => {
    navigate(-1)
  }

  const onSubmit = (...args) => {
    actions.editNote(...args);
    navigate('/')
  }

  return (
    <NoteForm
      onStepBack={onStepBack}
      formTitle={activeNote.title}
      formDescription={activeNote.description}
      itemID={activeNote.id}
      formSubmitHandler={onSubmit}
      isEdit={true}
    />
  )
}

export default EditNoteFormView;
