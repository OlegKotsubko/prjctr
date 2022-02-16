import { useContext } from "react";
import { ViewModeContext } from "../contexts/ViewModeContext";

const useViewModeContext = () => {
  const {
    mode,
    actions,
  } = useContext(ViewModeContext)

  return {
    mode,
    actions,
  }
}

export default useViewModeContext
