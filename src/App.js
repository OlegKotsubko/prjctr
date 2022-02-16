import Content from "./components/Content/Content";
import NotesList from "./components/NotesList/NotesList";
import FullViewNote from "./components/FullViewNote/FullViewNote";

import useViewModeContext from "./hooks/useViewModeContext";
import {MODE} from "./reducer/view-reducer";
import useNoteContext from "./hooks/useNoteContext";
import Form from "./components/Form/Form";

function App() {
  const {
    mode,
    actions: modeActions
  } = useViewModeContext()
  const {
    state,
    actions,
    activeNote,
    setActiveNoteById,
    deleteActiveNote,
  } = useNoteContext();

  const LeftSidebar = () => {
    switch (mode) {
      case MODE.PREVIEW:
          return (
            <FullViewNote
              setViewModeToDefault={modeActions.setDefaultMode}
              activeNote={activeNote}
              deleteActiveNote={deleteActiveNote}
            />
          )
      case MODE.DEFAULT:
        return (
          <Form
            formTitle=""
            formDescription=""
            itemID=""
            formSubmitHandler={actions.addNote}
            setViewModeToDefault={modeActions.setDefaultMode}
          />
        )
      case MODE.EDIT:
          return (
            <Form
              formTitle={activeNote.title}
              formDescription={activeNote.description}
              itemID={activeNote.id}
              formSubmitHandler={actions.editNote}
              setViewModeToDefault={modeActions.setDefaultMode}
              deleteActiveNote={deleteActiveNote}
              mode={mode}
            />
          )
      default:
        return false
    }
  }

  return (
    <Content>
      <div>
        <LeftSidebar/>
      </div>
      <div>
        <NotesList
          notes={state}
          notesActions={actions}
          viewModeActions={modeActions}
          setActiveNoteById={setActiveNoteById}
          deleteActiveNote={deleteActiveNote}
          noteRemoveHandler={actions.deleteNote}
          activeNote={activeNote}
          isEdit={mode === MODE.EDIT}
        />
      </div>
    </Content>
  );
}

export default App;
