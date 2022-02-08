import {
  createContext,
  useState,
} from "react";

export const ViewModeContext = createContext({})

export const ViewModeContextProvider = ({children}) => {
  const [isEdit, setEdit] = useState(null)
  const [isPreview, setPreview] = useState(null)

  const onEdit = () => {
    setEdit(!isEdit)
  }

  const onPreview = () => {
    setPreview(!isPreview)
  }

  return (
    <ViewModeContext.Provider value={{
      isEdit,
      isPreview,
      onEdit,
      onPreview,
    }}>
      {children}
    </ViewModeContext.Provider>
  )
}
