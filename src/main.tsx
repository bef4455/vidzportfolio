import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ScrollProvider } from './components/ScrollContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}