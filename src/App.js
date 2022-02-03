import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import NotesList from "./components/NotesList/NotesList";
import FullViewNote from "./components/FullViewNote/FullViewNote";

import useNoteContext from "./hooks/useNoteContext";

function App() {
  const {
    previewMode,
    editItem,
    actions
  } = useNoteContext();

  return (
    <Content>
      <div>
        {previewMode !== null && <FullViewNote />}

        {previewMode === null && editItem && (
          <Form
            formTitle={editItem.title}
            formDescription={editItem.description}
            itemID={editItem.id}
            formSubmitHandler={actions.editNote}
          />
        )}

        {previewMode === null && !editItem && (
          <Form
            formTitle=""
            formDescription=""
            itemID=""
            formSubmitHandler={actions.addNote}
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
