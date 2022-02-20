import classNames from 'classnames'

import Button from "../../Button/Button";

import styles from './NoteListItem.module.scss'

const NoteListItem = ({
  id,
  title,
  description,
  onPreview,
  onEdit,
  onDelete,
}) => {

  return (
    <div
      className={classNames(styles.block)}
      onClick={() => onPreview(id)}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{description}</div>
      <div className={styles.footer}>
        <Button
          clickHandler={(e) => {
            e.stopPropagation();
            onEdit(id)
          }}
          mod="empty"
          type="button"
        >
          Edit
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

export default NoteListItem
