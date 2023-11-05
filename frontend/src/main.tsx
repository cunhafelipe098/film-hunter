import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
