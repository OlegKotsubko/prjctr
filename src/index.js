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
import Layout from "./components/Layout/Layout";
import CreateNotePage from "./pages/CreateNotePage";
import EditNotePage from "./pages/EditNotePage";
import NotePage from "./pages/NotePage";

ReactDOM.render(
  <React.StrictMode>
    <NotesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="form" element={<CreateNotePage />} />
            <Route path="form/:id" element={<EditNotePage />} />
            <Route path="note/:id" element={<NotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
