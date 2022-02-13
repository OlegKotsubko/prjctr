import {
  SET_DEFAULT,
  SET_EDIT,
  SET_PREVIEW,
} from "../actions/view-actions";

const viewReducer = (_, event) => {
  switch (event.type) {
    case SET_EDIT:
      return "EDIT"
    case SET_PREVIEW:
      return "PREVIEW"
    case SET_DEFAULT:
      return "DEFAULT"
    default:
      return false
  }
}

export default viewReducer;
