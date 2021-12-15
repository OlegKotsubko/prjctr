import {useContext} from "react";
import {NoteContext} from "../../contexts/NotesContext";

import styles from './NotesList.module.scss'
import Note from "../Note/Note";

const NotesList = () => {
  const {state} = useContext(NoteContext);

  return(
    <div>
      <div className={styles.header}>
        <h1>Notes</h1>
      </div>

      <div className={styles.grid}>
        {state?.map(({title, rawTextFromHTML, id}) => {
          return(
            <Note
              key={id}
              id={id}
              title={title}
              description={rawTextFromHTML}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NotesList;
