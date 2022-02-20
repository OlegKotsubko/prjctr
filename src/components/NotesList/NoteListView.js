import { useNavigate } from 'react-router-dom'

import NotesList from "./NotesList";
import useNoteContext from "../../hooks/useNoteContext";
import Button from "../Button/Button";

const NoteListView = () => {
  const navigate = useNavigate();
  const {
    state,
    actions,
  } = useNoteContext();

  const onPreview = (id) => {
    navigate(`note/${id}`)
  }

  const onEdit = (id) => {
    navigate(`/form/${id}`)
  }

  const onDelete = (id) => {
    actions.deleteNote(id)
  }

  const onCreate = () => {
    navigate('/form')
  }

  return (
    <div>
      <Button clickHandler={onCreate}>Create new note</Button>
      <NotesList
        notes={state}
        onPreview={onPreview}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>

  )
}

export default NoteListView
