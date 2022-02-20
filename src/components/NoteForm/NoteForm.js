import React, {
  useState,
  useMemo
} from "react";

import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";

import validateTitle from "../../helpers/validateTitle";
import validateDescription from "../../helpers/validateDescription";

import styles from './NoteForm.module.scss'

const NoteForm = ({
  formTitle,
  formDescription,
  itemID,
  formSubmitHandler,
  onStepBack,
  isEdit,
}) => {
  const [title, setTitle] = useState(formTitle);
  const [description, setDescription] = useState(formDescription);

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
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(titleErrors || descriptionErrors) {
      setShowErrors({
        title: !!titleErrors,
        description: !!descriptionErrors
      })
      return
    }

    formSubmitHandler(title, description, itemID)
    clearForm()
  }

  return (
    <div className={styles.block}>
      <Button
        mod="empty"
        clickHandler={onStepBack}
      >
        Back
      </Button>
      <h1>{isEdit ? "Edit note" : "Create new note"}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.offset}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            inputHandler={(e) => {
              setTitle(e.target.value)
              setShowErrors({...showErrors, title: true})
            }}
          />
          <Alert text={showErrors.title && titleErrors} />
        </div>
        <div className={styles.offset}>
          <Input
            type="textarea"
            value={description}
            placeholder="Description"
            inputHandler={(e) => {
              setDescription(e.target.value)
              setShowErrors({...showErrors, description: true})
            }}
          />
          <Alert text={showErrors.description && descriptionErrors} />
        </div>
        <div className={styles.footer}>
          <Button
            clickHandler={clearForm}
            mod="empty"
            type="reset"
          >
            Clear form
          </Button>
          <Button
            type="submit"
          >
            {isEdit ? "Save": "Create"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default React.memo(NoteForm);
