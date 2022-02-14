import classNames from 'classnames'
import { useNavigate } from "react-router-dom";

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
  } = useNoteContext();

  const {
    modeActions: {
      onPreview,
      onDefaultView,
      onEdit,
    }
  } = useViewModeContext()

  const navigate = useNavigate()

  return (
    <div
      className={classNames(styles.block)}
      onClick={() => {
        onPreview()
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
            onEdit()
            navigate(`/form/${id}`)
          }}
          type="button"
        >
          Edit
        </Button>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            noteRemoveHandler(id)
            deleteActiveNote()
            onDefaultView()
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
