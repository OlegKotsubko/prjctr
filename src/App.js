import Content from "./components/Content/Content";
import NotesList from "./components/NotesList/NotesList";
import FullViewNote from "./components/FullViewNote/FullViewNote";

import useViewModeContext from "./hooks/useViewModeContext";
import FormContainer from "./components/FormContainer/FormContainer";

function App() {
  const { mode, modeActions } = useViewModeContext()

  const LeftSidebar = () => {
    switch (mode) {
    case "PREVIEW":
        return (
          <FullViewNote
            onDefaultView={modeActions.onDefaultView}
          />
        )
    default:
      return (
        <FormContainer
          mode={mode}
          modeAction={modeActions}
        />
      )
    }
  }

  return (
    <Content>
      <div>
        <LeftSidebar/>
      </div>
      <div>
        <NotesList/>
      </div>
    </Content>
  );
}

export default App;
