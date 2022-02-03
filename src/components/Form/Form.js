import React, {useState} from "react";

// import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";
import isTitleValid from "../../helpers/isTitleValid";
import isDescriptionValid from "../../helpers/isDescriptionValid";

import styles from './Form.module.scss'
import useNoteContext from "../../hooks/useNoteContext";

const Form = ({
  formTitle,
  formDescription,
  itemID,
  formSubmitHandler,
}) => {
  const {
    submitEdit,
    editItem,
  } = useNoteContext();

  const [title, setTitle] = useState(formTitle);
  const [description, setDescription] = useState(formDescription);

  const submitHandler = () => {
    if(title !== '' && description !== '') {
      formSubmitHandler(title, description, itemID)
      submitEdit()
      setTitle('');
      setDescription('')
    } else {
      console.log('Fields is empty')
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
            inputHandler={(e) => {
              setTitle(e.target.value)
              isTitleValid(e.target.value)
            }}
          />
         {/*<Alert text={titleError} />*/}
        </div>
        <div className={styles.offset}>
          <Input
            type="textarea"
            value={description}
            placeholder="Description"
            inputHandler={(e) => {
              setDescription(e.target.value)
              isDescriptionValid(e.target.value)
            }}
          />
          {/*<Alert text={descriptionError} />*/}
        </div>
        <div className={styles.footer}>
          <Button
            clickHandler={submitHandler}
            type="button"
          >
            {editItem ? "Save": "Create"}
          </Button>
          <Button
            clickHandler={() => {
              setTitle('');
              setDescription('')
            }}
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
