import classNames from 'classnames'

import Button from "../Button/Button";

import styles from './Note.module.scss'

const Note = ({
  id,
  title,
  description,
  noteRemoveHandler,
  viewModeActions,
  setActiveNoteById,
  deleteActiveNote,
  activeNote,
  isEdit,
}) => {

  const isCurrent = activeNote?.id === id

  return (
    <div
      className={classNames(styles.block)}
      onClick={() => {
        viewModeActions.setPreviewMode()
        setActiveNoteById(id);
      }}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            setActiveNoteById(id);
            if(isEdit) {
              return viewModeActions.setDefaultMode()
            }

            return viewModeActions.setEditMode()
          }}
          type="button"
        >
          {isCurrent && isEdit ? 'Cancel' : 'Edit' }
        </Button>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            noteRemoveHandler(id)
            deleteActiveNote()
            viewModeActions.setDefaultMode()
          }}
          mod="danger"
          type="button"
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Note
