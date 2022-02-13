import classNames from 'classnames'

import Button from "../Button/Button";

import styles from './Note.module.scss'
import {
  useNavigate,
} from "react-router-dom";

const Note = ({
  id,
  title,
  description,
  noteRemoveHandler,
}) => {
  const navigate = useNavigate()
  return (
    <div
      className={classNames(styles.block)}
      onClick={() => {
        navigate(`/note/${id}`)
      }}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
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
