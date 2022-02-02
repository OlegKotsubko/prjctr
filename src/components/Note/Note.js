import React, {useContext} from "react";
import classNames from 'classnames'

import Button from "../Button/Button";

import {NoteContext} from "../../contexts/NotesContext";

import styles from './Note.module.scss'

const Note = ({
  id,
  title,
  description,
  noteRemoveHandler,
}) => {
  const {
    findNote,
    getNoteById,
    previewMode,
    editItem,
  } = useContext(NoteContext);

  return (
    <div
      className={classNames(styles.block, previewMode && styles.active)}
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
                  noteRemoveHandler(id)
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
