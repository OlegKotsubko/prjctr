import {
  createContext,
  useState,
} from "react";

export const ViewModeContext = createContext({})

export const ViewModeContextProvider = ({children}) => {
  const [isEdit, setEdit] = useState(false)
  const [isPreview, setPreview] = useState(false)

  const toggleEdit = () => {
    setEdit(!isEdit)
  }

  const togglePreview = () => {
    setPreview(!isPreview)
  }

  return (
    <ViewModeContext.Provider value={{
      isEdit,
      isPreview,
      toggleEdit,
      togglePreview,
    }}>
      {children}
    </ViewModeContext.Provider>
  )
}
