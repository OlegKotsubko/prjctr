import styles from './NotesList.module.scss'
import Note from "../Note/Note";

import useNoteContext from "../../hooks/useNoteContext";
import Content from "../Content/Content";

const NotesList = () => {
  const {state, actions} = useNoteContext();

  return (
    <Content>
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
    </Content>
  )
}

export default NotesList;
