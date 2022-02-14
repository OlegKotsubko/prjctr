import {useMemo, useState} from "react";

import Form from "../Form/Form";

import useNoteContext from "../../hooks/useNoteContext";
import useViewModeContext from "../../hooks/useViewModeContext";

import validateTitle from "../../helpers/validateTitle";
import validateDescription from "../../helpers/validateDescription";

const EditNoteForm = () => {
  const {
    actions,
    activeNote,
    deleteActiveNote,
  } = useNoteContext();

  const [title, setTitle] = useState(activeNote.title);
  const [description, setDescription] = useState(activeNote.description);

  const { modeActions } = useViewModeContext()

  const [showErrors, setShowErrors] = useState({
    title: false,
    description: false
  });

  const titleErrors = useMemo(() => validateTitle(title),[title]);
  const descriptionErrors = useMemo(() => validateDescription(description),[description]);

  const clearForm = () => {
    setTitle('');
    setDescription('')
    setShowErrors({
      title: false,
      description: false
    })
    modeActions.onDefaultView();
  }

  const submitHandler = () => {
    if(titleErrors || descriptionErrors) {
      setShowErrors({
        title: !!titleErrors,
        description: !!descriptionErrors
      })
      return
    }

    actions.editNote(title, description, activeNote.id)
    clearForm()
    deleteActiveNote()
  }

  return (
    <Form
      mainTitle="Edit note"

      firstInputTitle={title}
      firstInputHandler={(e) => {
        setTitle(e.target.value)
        setShowErrors({...showErrors, title: true})
      }}
      firstInputAlerts={showErrors.title && titleErrors}

      secondInputType="textarea"
      secondInputTitle={description}
      secondInputHandler={(e) => {
        setDescription(e.target.value)
        setShowErrors({...showErrors, description: true})
      }}

      submitButtonTitle="Edit"
      secondInputAlerts={showErrors.description && descriptionErrors}
      submitHandler={submitHandler}
      clearForm={clearForm}
    />
  )
}


export default EditNoteForm
