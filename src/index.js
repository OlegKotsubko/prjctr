import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotesContextProvider } from "./contexts/NotesContext";
import {ViewModeContextProvider} from "./contexts/ViewModeContext";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FullViewNote from "./components/FullViewNote/FullViewNote";
import EditNoteForm from "./components/FormContainer/EditNoteForm";
import CreateNoteForm from "./components/FormContainer/CreateNoteForm";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesContextProvider>
        <ViewModeContextProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/note/:id" element={<FullViewNote />} />
            <Route path="/form/:id" element={<EditNoteForm />} />
            <Route path="/form/" element={<CreateNoteForm />} />
          </Routes>
        </ViewModeContextProvider>
      </NotesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
