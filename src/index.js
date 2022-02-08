import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotesContextProvider } from "./contexts/NotesContext";


ReactDOM.render(
  <React.StrictMode>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
