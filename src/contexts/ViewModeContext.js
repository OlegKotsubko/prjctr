import {
  createContext, useReducer,
  useState,
} from "react";
import viewReducer, {VIEW_MODE} from "../reducer/view-reducer";
import {setPreviewMode, setEditMode, setDefaultMode} from "../actions/view-actions";

export const ViewModeContext = createContext({})

export const ViewModeContextProvider = ({children}) => {
  const [mode, dispatch] = useReducer(viewReducer, {}, () => VIEW_MODE.DEFAULT);

  const [actions] = useState(() => ({
    setPreviewMode: setPreviewMode(dispatch),
    setEditMode: setEditMode(dispatch),
    setDefaultMode: setDefaultMode(dispatch),
  }))

  return (
    <ViewModeContext.Provider value={{
      mode,
      actions,
    }}>
      {children}
    </ViewModeContext.Provider>
  )
}
