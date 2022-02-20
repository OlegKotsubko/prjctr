import styles from './NotesList.module.scss'
import NoteListItem from "./NoteListItem/NoteListItem";


const NotesList = ({
 notes,
                     onPreview,
 onEdit,
 onDelete,
}) => (
  <div>
    <div className={styles.header}>
      <h1>Notes</h1>
    </div>
    <div className={styles.grid}>
      {notes.map(({title, rawTextFromHTML, id}) => (
        <NoteListItem
          key={id}
          id={id}
          title={title}
          description={rawTextFromHTML}
          onPreview={onPreview}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  </div>
)


export default NotesList;
