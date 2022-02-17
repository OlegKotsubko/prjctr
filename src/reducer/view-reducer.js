import {
  SET_PREVIEW_ROUTE_MODE,
  SET_DEFAULT_ROUTE_MODE,
  SET_EDIT_ROUTE_MODE,
} from "../actions/view-actions";

export const VIEW_MODE = {
  EDIT: "EDIT",
  PREVIEW: "PREVIEW",
  DEFAULT: "DEFAULT"
}

const viewReducer = (_, event) => {
  switch (event.type) {
    case SET_EDIT_ROUTE_MODE:
      return VIEW_MODE.EDIT
    case SET_PREVIEW_ROUTE_MODE:
      return VIEW_MODE.PREVIEW
    case SET_DEFAULT_ROUTE_MODE:
      return VIEW_MODE.DEFAULT
    default:
      return false
  }
}

export default viewReducer;
