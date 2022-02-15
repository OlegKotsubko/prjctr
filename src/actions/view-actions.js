export const SET_PREVIEW_ROUTE_MODE = "SET_PREVIEW_ROUTE_MODE"
export const SET_EDIT_ROUTE_MODE = "SET_EDIT_ROUTE_MODE"
export const SET_DEFAULT_ROUTE_MODE = "SET_DEFAULT_ROUTE_MODE"

export const setPreviewMode = (dispatch) => () =>
  dispatch({
    type: SET_PREVIEW_ROUTE_MODE,
  });

export const setEditMode = (dispatch) => () =>
  dispatch({
    type: SET_EDIT_ROUTE_MODE,
  });

export const setDefaultMode = (dispatch) => () =>
  dispatch({
    type: SET_DEFAULT_ROUTE_MODE,
  });
