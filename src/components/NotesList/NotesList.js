import styles from './NotesList.module.scss'
import Note from "../Note/Note";

import useNoteContext from "../../hooks/useNoteContext";

const NotesList = () => {
  const {state, actions} = useNoteContext();

  return(
    <div>
      <div className={styles.header}>
        <h1>Notes</h1>
      </div>
      <div className={styles.grid}>
        {state.map(({title, rawTextFromHTML, id}) => (
          <Note
            key={id}
            id={id}
            title={title}
            description={rawTextFromHTML}
            noteRemoveHandler={actions.deleteNote}
          />
        ))}
      </div>
    </div>
  )
}

export default NotesList;
