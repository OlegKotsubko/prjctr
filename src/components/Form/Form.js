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

  const [inputValues, setInputValues] = useState({
    title: '',
    description: ''
  });

  const [inputAlerts, setInputAlerts] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    if(editItem !== null) {
      setInputValues({
        title: editItem.title,
        description: editItem.description
      });
    }
  }, [editItem])

  useEffect(() => {
    setInputAlerts({
      title:
        inputValues.title?.length > MAX_TITLE_LENGTH
          ? `Title is more then ${Number(inputValues.title?.length) - MAX_TITLE_LENGTH}`
          : '',
      description:
        inputValues.description?.length > MAX_DESCRIPTION_LENGTH
          ? `Description is more then ${Number(inputValues.description?.length) - MAX_DESCRIPTION_LENGTH}`
          : '',
    });

  }, [inputValues.title, inputValues.description])

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  const clearHandler = () => {
    setInputValues({
      title: '',
      description: ''
    });

    setInputAlerts({
      title: '',
      description: ''
    });
  }

  const submitHandler = () => {
    if(inputValues.title === '') {
      setInputAlerts({
        title: 'Plz fill this field'
      })
      return false
    }

    if(inputValues.description === '') {
      setInputAlerts({
        description: 'Plz fill this field'
      })
      return false
    }

    if(
      inputValues.title?.length > MAX_TITLE_LENGTH
      || inputValues.description?.length > MAX_DESCRIPTION_LENGTH
    ) {
      return false
    }

    const sanitizedHTML = DOMPurify.sanitize(inputValues.description, {})
    const rawTextFromHTML = sanitizedHTML
      .replace(/(<([^>]+)>)/gi, " ")
      .replace(/<script.*>.*<\/script>/ims, " ")
      .trim()

    if (editItem === null) {
      dispatch({
        type: "ADD_NOTE",
        payload: {
          title: inputValues.title,
          description: inputValues.description,
          rawTextFromHTML,
          sanitizedHTML,
          id: uuid(),
        }
      })
      clearHandler()
    } else {
      dispatch({
        type: "EDIT_NOTE",
        payload: {
          title: inputValues.title,
          description: inputValues.description,
          rawTextFromHTML,
          sanitizedHTML,
          id: editItem.id,
        }
      })
      submitEdit()
      clearHandler()
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
            name="title"
            value={inputValues.title}
            inputHandler={inputHandler}
          />
         <Alert text={inputAlerts.title} />
        </div>
        <div className={styles.input}>
          <textarea
            rows="6"
            name="description"
            className={styles.textarea}
            placeholder="Placeholder"
            onInput={inputHandler}
            value={inputValues.description}
          />
          <Alert text={inputAlerts.description} />
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
