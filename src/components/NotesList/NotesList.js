import styles from './NotesList.module.scss'
import Note from "../Note/Note";


const NotesList = ({
 notes,
 onActivate,
 onEdit,
 onDelete,
 activeNoteId,
 isEdit,
}) => (
  <div>
    <div className={styles.header}>
      <h1>Notes</h1>
    </div>
    <div className={styles.grid}>
      {notes.map(({title, rawTextFromHTML, id}) => (
        <Note
          key={id}
          id={id}
          title={title}
          description={rawTextFromHTML}
          onActivate={onActivate}
          onEdit={onEdit}
          onDelete={onDelete}
          activeNoteId={activeNoteId}
          isEdit={isEdit}
        />
      ))}
    </div>
  </div>
)


export default NotesList;
