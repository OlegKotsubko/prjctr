import Form from "../Form/Form";
import useNoteContext from "../../hooks/useNoteContext";

const FormContainer = ({
  mode,
}) => {
  const {
    actions,
    activeNote,
    deleteActiveNote,
  } = useNoteContext();

  switch (mode) {
    case "EDIT":
      return (
        <Form
          formTitle={activeNote.title}
          formDescription={activeNote.description}
          itemID={activeNote.id}
          formSubmitHandler={actions.editNote}
          deleteActiveNote={deleteActiveNote}
          mode={mode}
        />
      )
    default:
      return (
        <Form
          formTitle=""
          formDescription=""
          itemID=""
          formSubmitHandler={actions.addNote}
        />
      )
  }
}

export default FormContainer;
