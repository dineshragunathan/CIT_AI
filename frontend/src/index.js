import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18 and above
// import './index.css';  // Optional: If you have global CSS styles
import App from './App';  // Import the main App component

// Select the root element in the index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
