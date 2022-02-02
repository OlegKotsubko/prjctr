import React, {useContext} from "react";
import {NoteContext} from "../../contexts/NotesContext";
import { removeNote } from "../../reducer/reducer";

import styles from './NotesList.module.scss'
import Note from "../Note/Note";

const NotesList = () => {
  const {state, dispatch} = useContext(NoteContext);

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
            noteRemoveHandler={removeNote(dispatch)}
          />
        ))}
      </div>
    </div>
  )
}

export default NotesList;
