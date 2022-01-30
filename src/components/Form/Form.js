import React, {useState, useContext, useEffect} from "react";
import DOMPurify from 'dompurify';
import { v4 as uuid } from 'uuid';


import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { NoteContext } from "../../contexts/NotesContext";

import styles from './Form.module.scss'

const MAX_TITLE_LENGTH = 10
const MAX_DESCRIPTION_LENGTH = 1000

const Form = () => {
  const {
    submitEdit,
    editItem,
    dispatch
  } = useContext(NoteContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  useEffect(() => {
    if(editItem !== null) {
      setTitle(editItem.title)
      setDescription(editItem.description)
    }
  }, [editItem])

  useEffect(() => {
    if(title.length > MAX_TITLE_LENGTH) {
      setTitleError(`Title is more then ${Number(title.length) - (MAX_TITLE_LENGTH)}`)
    } else {
      setTitleError('')
    }
  }, [title])

  useEffect(() => {
    if(description.length > MAX_DESCRIPTION_LENGTH) {
      setDescriptionError(`Description is more then ${Number(description.length) - (MAX_DESCRIPTION_LENGTH)}`)
    } else {
      setDescriptionError('')
    }
  }, [description])

  const clearForm = () => {
    setTitle('');
    setDescription('')
    setTitleError('')
    setDescriptionError('');
  }

  const submitHandler = () => {
    if(title === '') {
      setTitleError('Plz fill this field')
    }

    if(description === '') {
      setDescriptionError('Plz fill this field');
    }

    if(!descriptionError && !titleError && title !== '' && description !== '') {

      const sanitizedHTML = DOMPurify.sanitize(description, {})
      const rawTextFromHTML = sanitizedHTML
        .replace(/(<([^>]+)>)/gi, " ")
        .replace(/<script.*>.*<\/script>/ims, " ")
        .trim()

      if (editItem === null) {
        dispatch({
          type: "ADD_NOTE",
          payload: {
            title,
            description,
            rawTextFromHTML,
            sanitizedHTML,
            id: uuid(),
          }
        })
      } else {
        dispatch({
          type: "EDIT_NOTE",
          payload: {
            title,
            description,
            rawTextFromHTML,
            sanitizedHTML,
            id: editItem.id,
          }
        })
        submitEdit()
      }
      clearForm()
    }
  }

  return (
    <div className={styles.block}>
      <h1>{editItem ? "Edit note" : "Create new note"}</h1>
      <form>
        <div className={styles.offset}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            inputHandler={(e) => setTitle(e.target.value)}
          />
         <Alert text={titleError} />
        </div>
        <div className={styles.offset}>
          <Input
            type="textarea"
            value={description}
            placeholder="Description"
            inputHandler={(e) => setDescription(e.target.value)}
          />
          <Alert text={descriptionError} />
        </div>
        <div className={styles.footer}>
          <Button
            clickHandler={submitHandler}
            type="button"
          >
            {editItem ? "Save": "Create"}
          </Button>
          <Button
            clickHandler={clearForm}
            mod="empty"
            type="reset"
          >
            Clear form
          </Button>
        </div>

      </form>
    </div>
  )
}

export default React.memo(Form);
