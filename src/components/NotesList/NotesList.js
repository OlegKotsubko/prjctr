import styles from './NotesList.module.scss'
import Note from "../Note/Note";


const NotesList = ({
 notes,
 notesActions,
 viewModeActions,
 setActiveNoteById,
 deleteActiveNote,
 noteRemoveHandler,
 activeNote,
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
          notesActions={notesActions}
          viewModeActions={viewModeActions}
          setActiveNoteById={setActiveNoteById}
          deleteActiveNote={deleteActiveNote}
          noteRemoveHandler={noteRemoveHandler}
          activeNote={activeNote}
          isEdit={isEdit}
        />
      ))}
    </div>
  </div>
)


export default NotesList;
