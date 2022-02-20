import classNames from 'classnames'

import Button from "../Button/Button";

import styles from './Note.module.scss'

const Note = ({
  id,
  title,
  description,
  onActivate,
  onEdit,
  onDelete,
  activeNoteId,
  isEdit,
}) => {

  const isCurrent = activeNoteId === id

  return (
    <div
      className={classNames(styles.block)}
      onClick={() => onActivate(id)}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            onEdit(id)
          }}
          type="button"
        >
          {isCurrent && isEdit ? 'Cancel' : 'Edit' }
        </Button>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            onDelete(id)
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
