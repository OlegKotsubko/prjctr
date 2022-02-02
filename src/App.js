import React, {useContext} from "react";

import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import NotesList from "./components/NotesList/NotesList";
import {NoteContext} from "./contexts/NotesContext";
import FullViewNote from "./components/FullViewNote/FullViewNote";
import {
  addNote,
  editNote
} from "./reducer/reducer";

function App() {
  const {previewMode, editItem, dispatch} = useContext(NoteContext);

  return (
    <Content>
      <div>
        {previewMode !== null && <FullViewNote />}

        {previewMode === null && editItem && (
          <Form
            formTitle={editItem.title}
            formDescription={editItem.description}
            itemID={editItem.id}
            formSubmitHandler={editNote(dispatch)}
          />
        )}

        {previewMode === null && !editItem && (
          <Form
            formTitle=""
            formDescription=""
            itemID=""
            formSubmitHandler={addNote(dispatch)}
          />
        )}
      </div>
      <div>
        <NotesList />
      </div>
    </Content>
  );
}

export default App;
