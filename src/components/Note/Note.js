import React, {useContext} from "react";
import classNames from 'classnames'

import Button from "../Button/Button";

import {NoteContext} from "../../contexts/NotesContext";

import styles from './Note.module.scss'

const Note = ({
  id,
  title,
  description,
}) => {
  const {findNote, getNoteById, previewMode, editItem, dispatch} = useContext(NoteContext);

  return (
    <div
      className={classNames(styles.block, (previewMode?.id === id) && styles.active)}
      onClick={() => getNoteById(id)}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        {previewMode?.id !== id && (
          <>
            <Button
              clickHandler={(e) => {
                e.stopPropagation();
                findNote(id)
              }}
              type="button"
            >
              Edit
            </Button>
            {(editItem?.id !== id) ?
              <Button
                clickHandler={(e) => {
                  e.stopPropagation();
                  console.log('delete')
                  dispatch({
                    type: "REMOVE_NOTE",
                    payload: id
                  });
                }}
                mod="danger"
                type="button"
              >
                Delete
              </Button>
              : null}
          </>
        )}
      </div>
    </div>
  )
}

export default Note
