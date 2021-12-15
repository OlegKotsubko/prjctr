import React, {useState, useContext, useEffect} from "react";
import DOMPurify from 'dompurify';

import Button from "../Button/Button";
import Input from "../Input/Input";

import { NoteContext } from "../../contexts/NotesContext";

import styles from './Form.module.scss'

const MAX_TITLE_LENGTH = 10

const Form = () => {
  const [title, setTitle] = useState('')
  const [titleAlert, setTitleAlert] = useState(0)
  const [description, setDescription] = useState('')
  const {addNote, editItem, editTask} = useContext(NoteContext);

  useEffect(() => {
    if(editItem !== null) {
      setTitle(editItem.title)
      setDescription(editItem.description)
    }
  }, [editItem])

  const titleHandler = (e) => {
    const text = e.target.value
    setTitle(text)

    if(text.length > MAX_TITLE_LENGTH) {
      setTitleAlert(text.length - MAX_TITLE_LENGTH)
    } else {
      setTitleAlert(0)
    }
  }
  const descriptionHandler = (e) => setDescription(e.target.value)

  const clearHandler = () => {
    setTitle('')
    setDescription('')
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const sanitizedHTML = DOMPurify.sanitize(description, {})
    const rawTextFromHTML = sanitizedHTML
      .replace(/(<([^>]+)>)/gi, " ")
      .replace(/<script.*>.*<\/script>/ims, " ")
      .trim()

    if(title.trim() !== '' && rawTextFromHTML !== '') {
      if (editItem === null) {
        addNote({title, description, rawTextFromHTML, sanitizedHTML})
        clearHandler()
      } else {
        editTask(title, description, rawTextFromHTML, sanitizedHTML, editItem.id)
        clearHandler()
      }
    }
  }

  return (
    <div className={styles.block}>
      <h1>{editItem ? "Edit note" : "Create new note"}</h1>
      <form>
        <div className={styles.input}>
          <Input
            type="text"
            placeholder="Placeholder"
            value={title}
            inputHandler={titleHandler}
            contenteditable
          />
         <span className={styles.error}>
            {titleAlert > MAX_TITLE_LENGTH && `Max title length is ${MAX_TITLE_LENGTH} chars`}
         </span>
        </div>
        <div className={styles.input}>
          <textarea
            rows="6"
            className={styles.textarea}
            placeholder="Placeholder"
            onInput={descriptionHandler}
            value={description}
          />
        </div>
        <div className={styles.footer}>
          <Button
            clickHandler={submitHandler}
            type="button"
          >
            {editItem ? "Save": "Create"}
          </Button>
          <Button
            clickHandler={clearHandler}
            mod="empty"
            type="button"
          >
            Clear form
          </Button>
        </div>

      </form>
    </div>
  )
}

export default React.memo(Form);
