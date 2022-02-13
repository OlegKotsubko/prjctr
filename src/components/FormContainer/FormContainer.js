import Form from "../Form/Form";
import useNoteContext from "../../hooks/useNoteContext";
import {useParams} from "react-router-dom";

const FormContainer = () => {
  const {
    state,
    actions,
  } = useNoteContext();

  const {id} = useParams()

  const activeNote = () => {
    return state.find(item => item.id === Number(id))
  }

  if(id) {
    return <Form
      formTitle={activeNote().title}
      formDescription={activeNote().description}
      itemID={activeNote().id}
      formSubmitHandler={actions.editNote}
      mode={"EDIT"}
    />
  }

  return <Form
    formTitle=""
    formDescription=""
    itemID=""
    formSubmitHandler={actions.addNote}
  />

}

export default FormContainer;
