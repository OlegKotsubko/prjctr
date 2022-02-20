import NotesList from "../components/NotesList/NotesList";

const NoteListView = ({
  state,
  activeNoteId,
  setPreviewMode,
  setDefaultMode,
  setEditMode,
  setActiveNoteById,
  deleteNoteById,
  deleteActiveNote,
  ifEditNode,
}) => {

  const onActivate = (id) => {
    setPreviewMode()
    setActiveNoteById(id);
  }

  const onEdit = (id) => {
    setActiveNoteById(id);
    if(ifEditNode) {
      return setDefaultMode()
    }

    return setEditMode()
  }

  const onDelete = (id) => {
    deleteNoteById(id)
    deleteActiveNote()
    setDefaultMode()
  }
  return (
    <NotesList
      notes={state}
      onActivate={onActivate}
      onEdit={onEdit}
      onDelete={onDelete}
      activeNoteId={activeNoteId}
      isEdit={ifEditNode}
    />
  )
}

export default NoteListView
