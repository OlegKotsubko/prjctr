export const ADD_NOTE = "ADD_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"

export const addNote = (dispatch) => (
  title,
  description,
) =>
  dispatch({
    type: ADD_NOTE,
    title,
    description,
    id: new Date().getTime()
  });

export const editNote = (dispatch) => (
  title,
  description,
  id
) =>
  dispatch({
    type: EDIT_NOTE,
    title,
    description,
    id
  });

export const deleteNote = (dispatch) => (
  id
) =>
  dispatch({
    type: DELETE_NOTE,
    id
  });
