import {
  createContext, useReducer,
  useState,
} from "react";
import viewReducer, {MODE} from "../reducer/view-reducer";
import {setPreviewMode, setEditMode, setDefaultMode} from "../actions/view-actions";

export const ViewModeContext = createContext({})

export const ViewModeContextProvider = ({children}) => {
  const [mode, dispatch] = useReducer(viewReducer, {}, () => MODE.DEFAULT);

  const [modeActions] = useState(() => ({
    setPreviewMode: setPreviewMode(dispatch),
    setEditMode: setEditMode(dispatch),
    setDefaultMode: setDefaultMode(dispatch),
  }))

  return (
    <ViewModeContext.Provider value={{
      mode,
      modeActions,
    }}>
      {children}
    </ViewModeContext.Provider>
  )
}
