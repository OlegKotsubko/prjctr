import { useContext } from "react";
import { ViewModeContext } from "../contexts/ViewModeContext";

const useViewModeContext = () => {
  const {
    mode,
    modeActions,
  } = useContext(ViewModeContext)

  return {
    mode,
    modeActions,
  }
}

export default useViewModeContext
