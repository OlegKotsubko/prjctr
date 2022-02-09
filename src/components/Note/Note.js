import classNames from 'classnames'

import Button from "../Button/Button";
import useNoteContext from "../../hooks/useNoteContext";

import styles from './Note.module.scss'
import useViewModeContext from "../../hooks/useViewModeContext";

const Note = ({
  id,
  title,
  description,
  noteRemoveHandler,
}) => {
  const {
    setActiveNoteById,
    deleteActiveNote,
    activeNote,
  } = useNoteContext();

  const {
    toggleEdit,
    togglePreview,
    isPreview,
    isEdit,
  } = useViewModeContext()

  const isCurrent = activeNote?.id === id

  return (
    <div
      className={classNames(styles.block, isCurrent && isPreview && styles.active)}
      onClick={() => {
        togglePreview()
        setActiveNoteById(id)
      }}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            setActiveNoteById(id);
            toggleEdit()
          }}
          type="button"
        >
          {isEdit && isCurrent ? 'Cancel' : 'Edit' }
        </Button>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            noteRemoveHandler(id)
            deleteActiveNote()

            if(isEdit && isCurrent) {
              toggleEdit()
            }
            if(isPreview && isCurrent) {
              togglePreview()
            }
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
