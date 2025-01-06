import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

// Get the root element from your HTML
const container = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(container);

// Render your app inside the root
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
