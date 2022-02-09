import { useContext } from "react";
import { ViewModeContext } from "../contexts/ViewModeContext";

const useViewModeContext = () => {
  const {
    isEdit,
    isPreview,
    toggleEdit,
    togglePreview,
  } = useContext(ViewModeContext)

  return {
    isEdit,
    isPreview,
    toggleEdit,
    togglePreview,
  }
}

export default useViewModeContext
