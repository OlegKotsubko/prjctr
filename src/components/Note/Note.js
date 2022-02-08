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
    activeNote,
  } = useNoteContext();

  const {
    onEdit,
    onPreview,
    isPreview,
  } = useViewModeContext()

  const isCurrent = activeNote?.id === id

  return (
    <div
      className={classNames(styles.block, isCurrent && isPreview && styles.active)}
      onClick={() => {
        onPreview()
        setActiveNoteById(id)
      }}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        {!isPreview &&
          <>
            <Button
              clickHandler={(e) => {
                e.stopPropagation();
                setActiveNoteById(id)
                onEdit()
              }}
              type="button"
            >
              Edit
            </Button>
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
          </>
        }
      </div>
    </div>
  )
}

export default Note
