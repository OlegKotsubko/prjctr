import Content from "./components/Content/Content";
import NotesList from "./components/NotesList/NotesList";
import FullViewNote from "./components/FullViewNote/FullViewNote";

import useViewModeContext from "./hooks/useViewModeContext";
import {VIEW_MODE} from "./reducer/view-reducer";
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

  // TODO Think where I can store this eventHandlers
  const onActivate = (id) => {
    modeActions.setPreviewMode()
    setActiveNoteById(id);
  }

  const onResetActivation = () => {
    modeActions.setDefaultMode()
    deleteActiveNote()
  }

  const onEdit = (id) => {
    setActiveNoteById(id);
    if(mode === VIEW_MODE.EDIT) {
      return modeActions.setDefaultMode()
    }

    return modeActions.setEditMode()
  }

  const onDelete = (id) => {
    actions.deleteNote(id)
    deleteActiveNote()
    modeActions.setDefaultMode()
  }

  const LeftSidebar = () => {
    switch (mode) {
      case VIEW_MODE.PREVIEW:
          return (
            <FullViewNote
              onResetActivation={onResetActivation}
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
        <NotesList
          notes={state}
          onActivate={onActivate}
          onEdit={onEdit}
          onDelete={onDelete}
          activeNoteId={activeNote?.id}
          isEdit={mode === VIEW_MODE.EDIT}
        />
      </div>
    </Content>
  );
}

export default App;
