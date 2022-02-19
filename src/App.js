import Content from "./components/Content/Content";
import FullViewNote from "./components/FullViewNote/FullViewNote";

import useViewModeContext from "./hooks/useViewModeContext";
import {VIEW_MODE} from "./reducer/view-reducer";
import useNoteContext from "./hooks/useNoteContext";
import Form from "./components/Form/Form";
import NoteListView from "./views/NoteListView";

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
      case VIEW_MODE.PREVIEW:
          return (
            <FullViewNote
              onResetActivation={() => {
                modeActions.setDefaultMode();
                deleteActiveNote()
              }}
              activeNote={activeNote}
            />
          )
      case VIEW_MODE.DEFAULT:
        return (
          <Form
            formTitle=""
            formDescription=""
            itemID=""
            formSubmitHandler={actions.addNote}
            setViewModeToDefault={modeActions.setDefaultMode}
          />
        )
      case VIEW_MODE.EDIT:
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
        <NoteListView
          state={state}
          activeNoteId={activeNote?.id}
          setPreviewMode={modeActions.setPreviewMode}
          setDefaultMode={modeActions.setDefaultMode}
          setEditMode={modeActions.setEditMode}
          setActiveNoteById={setActiveNoteById}
          deleteNoteById={actions.deleteNote}
          deleteActiveNote={deleteActiveNote}
          ifEditNode={mode === VIEW_MODE.EDIT}
        />
      </div>
    </Content>
  );
}

export default App;
