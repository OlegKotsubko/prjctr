import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { NotesContextProvider } from "./contexts/NotesContext";
import {ViewModeContextProvider} from "./contexts/ViewModeContext";
import FormContainer from "./components/FormContainer/FormContainer";
import NotesListPage from "./pages/NotesListPage";
import FullViewNotePage from "./pages/FullViewNotePage";


ReactDOM.render(
  <React.StrictMode>
    <NotesContextProvider>
      <ViewModeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/notes" element={<NotesListPage />} />
            <Route path="/note/:id" element={<FullViewNotePage />}/>
            <Route path="/form/" element={<FormContainer />}/>
            <Route path="/form/:id" element={<FormContainer />}/>
          </Routes>
        </BrowserRouter>
      </ViewModeContextProvider>
    </NotesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
