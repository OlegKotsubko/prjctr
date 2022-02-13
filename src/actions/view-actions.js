export const SET_PREVIEW = "SET_PREVIEW"
export const SET_EDIT = "SET_EDIT"
export const SET_DEFAULT = "SET_DEFAULT"

export const setPreview = (dispatch) => () =>
  dispatch({
    type: SET_PREVIEW,
  });

export const setEdit = (dispatch) => () =>
  dispatch({
    type: SET_EDIT,
  });

export const setDefault = (dispatch) => () =>
  dispatch({
    type: SET_DEFAULT,
  });
