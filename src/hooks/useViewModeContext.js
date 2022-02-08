import { useContext } from "react";
import { ViewModeContext } from "../contexts/ViewModeContext";

const useViewModeContext = () => {
  const {
    isEdit,
    isPreview,
    onEdit,
    onPreview,
  } = useContext(ViewModeContext)

  return {
    isEdit,
    isPreview,
    onEdit,
    onPreview,
  }
}

export default useViewModeContext
