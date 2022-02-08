import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import NotesList from "./components/NotesList/NotesList";
import FullViewNote from "./components/FullViewNote/FullViewNote";

import useNoteContext from "./hooks/useNoteContext";
import useViewModeContext from "./hooks/useViewModeContext";

function App() {
  const {
    actions,
    activeNote,
  } = useNoteContext();

  const {
    isEdit,
    isPreview,
  } = useViewModeContext()

  return (
    <Content>
      <div>
        {isPreview && <FullViewNote />}

        {activeNote && isEdit &&
          <Form
            formTitle={activeNote.title}
            formDescription={activeNote.description}
            itemID={activeNote.id}
            formSubmitHandler={actions.editNote}
          />
        }

        {!isEdit && !isPreview &&
          <Form
            formTitle=""
            formDescription=""
            itemID=""
            formSubmitHandler={actions.addNote}
          />
        }

      </div>
      <div>
        <NotesList />
      </div>
    </Content>
  );
}

export default App;
