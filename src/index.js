import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotesContextProvider } from "./contexts/NotesContext";
import {ViewModeContextProvider} from "./contexts/ViewModeContext";


ReactDOM.render(
  <React.StrictMode>
    <NotesContextProvider>
      <ViewModeContextProvider>
        <App />
      </ViewModeContextProvider>
    </NotesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
