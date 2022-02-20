import NoteForm from "./NoteForm";
import { useNavigate } from 'react-router-dom'

import useNoteContext from "../../hooks/useNoteContext";

const CreateNoteFormView = () => {
  const navigate = useNavigate();
  const {
    actions,
  } = useNoteContext();

  const onSubmit = (...args) => {
    actions.addNote(...args)
    navigate('/')
  }

  const onStepBack = () => {
    navigate(-1)
  }

  return (
    <NoteForm
      formTitle=""
      formDescription=""
      itemID=""
      onStepBack={onStepBack}
      formSubmitHandler={onSubmit}
      isEdit={false}
    />
  )
}

export default CreateNoteFormView
