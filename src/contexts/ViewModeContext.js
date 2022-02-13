import {
  createContext, useReducer,
  useState,
} from "react";
import viewReducer from "../reducer/view-reducer";
import {setPreview, setEdit, setDefault} from "../actions/view-actions";

export const ViewModeContext = createContext({})

export const initialState = {
  mode: 'DEFAULT'
};

export const ViewModeContextProvider = ({children}) => {
  const [mode, dispatch] = useReducer(viewReducer, initialState, () => undefined);

  const [modeActions] = useState(() => ({
    onPreview: setPreview(dispatch),
    onEdit: setEdit(dispatch),
    onDefaultView: setDefault(dispatch),
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
