import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import NotesList from "./components/NotesList/NotesList";
import React, {useContext} from "react";
import {NoteContext} from "./contexts/NotesContext";
import FullViewNote from "./components/FullViewNote/FullViewNote";

function App() {
  const {previewMode} = useContext(NoteContext);

  return (
    <Content>
      <div>
        {previewMode !== null ? <FullViewNote /> : <Form />}
      </div>
      <div>
        <NotesList />
      </div>
    </Content>
  );
}

export default App;
